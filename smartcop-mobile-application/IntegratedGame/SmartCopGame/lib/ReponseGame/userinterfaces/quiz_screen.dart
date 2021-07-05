import 'dart:async';
import 'dart:convert';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../services/marks.dart';
import '../services/api.dart';
import 'result_screen.dart';
import '../services/prediction.dart';

 class VideoQuestionJson extends StatelessWidget{

  Widget build(BuildContext context){
    return FutureBuilder(
      future: DefaultAssetBundle.of(context).loadString("questions/videoBased.json"),
      builder: (context,snapshot){
        List videoQuestionList = json.decode(snapshot.data.toString());
        if(videoQuestionList == null){
          return Scaffold(
            body: Center(
              child: Text("Loading",
              ),
            ),
          );
        }
        else{
          return QuizScreen(questionList: videoQuestionList);
        }
      },
    );
  }
}

 class AudioQuestionJson extends StatelessWidget{

  Widget build(BuildContext context){
    return FutureBuilder(
      future: DefaultAssetBundle.of(context).loadString("questions/audioBased.json"),
      builder: (context,snapshot){
        List audioQuestionList = json.decode(snapshot.data.toString());
        if(audioQuestionList == null){
          return Scaffold(
            body: Center(
              child: Text("Loading",
              ),
            ),
          );
        }
        else{
          return QuizScreen(questionList: audioQuestionList);
        }
      },
    );
  }
}

 class ArticleQuestionJson extends StatelessWidget{

  Widget build(BuildContext context){
    return FutureBuilder(
      future: DefaultAssetBundle.of(context).loadString("questions/articleBased.json"),
      builder: (context,snapshot){
        List articleQuestionList = json.decode(snapshot.data.toString());
        if(articleQuestionList == null){
          return Scaffold(
            body: Center(
              child: Text("Loading",
              ),
            ),
          );
        }
        else{
          return QuizScreen(questionList: articleQuestionList);
        }
      },
    );
  }
}

 class QuizScreen extends StatefulWidget{

  final questionList;

  QuizScreen({Key key, @required this.questionList}):super(key:key);
  _QuizScreenState createState() => _QuizScreenState(questionList);
}

 class _QuizScreenState extends State<QuizScreen>{

  var questionList;
  _QuizScreenState(this.questionList);

  SharedPreferences loginData;
  String loggedUser , loggedUid;
  int questionNumber = 1;
  int marks = 0;
  int timer = 50;
  int sysTime = 50;
  int qus = 1;
  int ansStatus = 0;
  String predictedDifficulty="";
  int time = 3;
  String showTimer = "50";
  Color colorToShow = Colors.indigoAccent;
  Color rightAnswer = Colors.green;
  Color wrongAnswer = Colors.red;
  Map<String, Color> btnColor = {
    "a" : Colors.indigoAccent,
    "b" : Colors.indigoAccent,
    "c" : Colors.indigoAccent,
    "d" : Colors.indigoAccent,
  };
  bool cancelTimer = false;
  bool isEditing = false;
  Marks playerName;
  bool isLoading = false;

  //method to prevent the answer button from multiple clicks
  setLoading(bool state) => setState(() {
    isLoading = state;
  });

  //method to get logged user's name and id
  void loggedUsername() async {
    loginData = await SharedPreferences.getInstance();
    setState(() {
      loggedUser = loginData.getString('userName');
      loggedUid = loginData.getString('uid');
    });
  }

  //method to store players marks in firebase database
  add(){
    if (isEditing) {
      updateMarks(playerName, marks);
      setState(() {
        isEditing = false;
      });
    } else{
      storeMarks(loggedUser,marks,loggedUid);
    }
  }

  Future<void> generateNextQuestion() async {
    cancelTimer = false;

    //Predict time need for next question
    var timeBody=[[{"CurrentQuestion": qus, "TimeTakenToAnswer": time, "AnswerStatus": ansStatus,"TimeGiven":sysTime}]];
    int newTime =await predictTime(timeBody);

    //Predict next question
    var body=[[{"CurrentQuestion": qus, "TimeGiven":sysTime, "TimeTakenToAnswer": time, "AnswerStatus": ansStatus}]];
    var resp =  await predictDifficultyLevel(body);
    print(resp);
    print(predictedDifficulty);

    // assign value of predicted time for timer variable
    timer=newTime;
    sysTime=newTime;

    //remove unnecessary parts in the result returned by predictDifficultyLevel(body) function
    predictedDifficulty = predictedDifficulty.replaceAll("[","").replaceAll("]","");
    predictedDifficulty = predictedDifficulty.replaceAll("\"", "");

    //assign predicted question number value for questionNumber variable
    setState((){
      if(questionNumber < 2 && int.parse(predictedDifficulty) == 4)
      {
        questionNumber++;
        qus = 4;
      } else if(questionNumber < 2 && int.parse(predictedDifficulty) == 3){
        questionNumber++;
        qus = 3;
      } else if(questionNumber < 2 && int.parse(predictedDifficulty) == 2){
        questionNumber++;
        qus = 2;
      } else if(questionNumber < 2 && int.parse(predictedDifficulty) == 1){
        questionNumber++;
        qus = 1;
      } else{
        add();
        Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context)=>ResultScreen(marks:marks),));
      }
      btnColor["a"] = Colors.indigoAccent;
      btnColor["b"] = Colors.indigoAccent;
      btnColor["c"] = Colors.indigoAccent;
      btnColor["d"] = Colors.indigoAccent;
    });
    startTimer();
  }

@override

  Future<void> initState(){
    startTimer();
    super.initState();
    loggedUsername();
  }

  void startTimer() async{
    const oneSec = Duration(seconds: 1);
    Timer.periodic(oneSec, (Timer t){
      setState(() {
        if(timer < 1){
          t.cancel();
          generateNextQuestion();
        }
        else if(cancelTimer == true){
          t.cancel();
        }
        else{
          timer = timer-1;
        }
        showTimer=timer.toString();
      });
    });
  }

  //method to check the answer status(correct or wrong) and get the time taken by player to answer the question
  Future<void> checkAnswer(String answer) async {
    print(questionList[2][qus.toString()][questionNumber.toString()]);
    if(answer==questionList[2][qus.toString()][questionNumber.toString()]){
      marks = marks+20;
      print(marks);
      colorToShow = rightAnswer;
      ansStatus=1; // If the answer is correct
    } else{
      colorToShow = wrongAnswer;
      ansStatus=0; // If the answer is wrong
    }
    setState(() {
      btnColor[answer] = colorToShow;
      print(timer);
      cancelTimer = true;
      if(timer > 40 && timer < 50)
        {
          time = 1; // If the time taken by player to answer the question is less than 50 seconds and greater than 40 seconds
        } else if(timer > 20 && timer <= 40)
        {
          time = 2;  // If the time taken by player to answer the question is less than or equal to 40 seconds and greater than 20 seconds
        } else if(timer >= 0 && timer <= 20)
        {
          time = 3; // If the time taken by player to answer the question is less than or equal to 20 seconds and greater than or equal to 0 seconds
        }
    });
    try {
      setLoading(true);
      cancelTimer = true;
      await generateNextQuestion();
    }
    finally {
      setLoading(false);
    }
  }

//Get the machine learning result using URL generated by Heroku
  Future<http.Response> predictDifficultyLevel(var body) async {
    try {
      var url = "https://research-1-app.herokuapp.com/predict";
      //encode Map to JSON
      var body1 = jsonEncode(body);
      var response = await http.post(url, headers: {"Content-Type": "application/json"}, body: body1);
      var responseBody = response.body;
      predictedDifficulty = responseBody.toString().replaceAll("{", "").replaceAll("}", "").split("\"prediction\":").removeLast();
      return response;
    } catch (e) {
      print(e);
      return e;
    }
  }

  Widget choiceAnswer(String answer) {
    return Padding(
      padding: EdgeInsets.symmetric(
        vertical: 10.0,
        horizontal: 20.0,
      ),
      child: MaterialButton(
        onPressed: () {
          //isLoading == false until the player select the answer for the question
         // isLoading ? null : checkAnswer(answer);
          if(isLoading == false){
            checkAnswer(answer);
          }
        },
        child: Text(
          questionList[1][qus.toString()][questionNumber.toString()][answer],
          style: TextStyle(fontFamily: "Alike",color: Colors.white,fontSize: 16.0),
        ),
        color: btnColor[answer],
        splashColor: Colors.indigo[700],
        highlightColor: Colors.indigo[700],
        minWidth: 200.0,
        height: 45.0,
        shape: RoundedRectangleBorder(borderRadius:BorderRadius.circular(20.0),),
      ),
    );
  }

  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor:Colors.white,
      body: Column(
        children: <Widget>[

          Expanded(
            flex: 3,
            child: Container(
             padding: EdgeInsets.all(15.0),
              alignment: Alignment.bottomLeft,
              child: Text(
                questionList[0][qus.toString()][questionNumber.toString()],
                style: TextStyle(
                  color: Colors.black,
                  fontFamily: "Quando",
                  fontSize: 16.0,
                ),
              ),
            ),
          ),

          Expanded(
            flex: 6,
            child: Container(
              width: 500.0,
              child: Column(
                children: <Widget>[
                  choiceAnswer("a"),
                  choiceAnswer("b"),
                  choiceAnswer("c"),
                  choiceAnswer("d"),
                ],
              )
            ),
          ),

          Expanded(
            flex: 1,
            child: Container(
              alignment: Alignment.topCenter,
              child: Center(
                child: Text(
                  showTimer,
                  style: TextStyle(
                      color: Colors.black,
                      fontSize: 35.0,
                      fontWeight: FontWeight.w700,
                      fontFamily: "Times New Roman",
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}