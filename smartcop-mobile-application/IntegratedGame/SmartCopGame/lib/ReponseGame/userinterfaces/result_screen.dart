import 'package:assets_audio_player/assets_audio_player.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dashboard_screen.dart';
import 'home_screen.dart';
import '../services/api.dart';


class ResultScreen extends StatefulWidget{
  final int marks;

  ResultScreen({Key key, @required this.marks}) : super(key : key);
  @override
  _ResultScreenState createState() => _ResultScreenState(marks);
}

class _ResultScreenState extends State<ResultScreen>{
  SharedPreferences loginData;
  String loggedUser;
  AssetsAudioPlayer _assetsAudioPlayer;
  String message;
  String image;
  String audio;
  List<String> images = [
    "images/happy_mario.png",
    "images/normal_mario.png",
    "images/sad_mario.png"
  ];

  @override
  void initState(){
    if(marks < 20){
      image = images[2];
      message="You Should Try Hard\n" +  "You scored $marks marks";
      audio = "assets/clap.mp3";
    }else if(marks < 35){
      image = images[1];
      message="You Can Do Better\n" +  "You scored $marks marks";
      audio = "assets/clap.mp3";
    }else{
      image = images[0];
      message="You Did Very Well\n" +  "You scored $marks marks";
      audio = "assets/clap.mp3";
    }
    super.initState();
    loggedUsername();
    _assetsAudioPlayer = AssetsAudioPlayer();
    _assetsAudioPlayer.open(
      Audio(audio),
    );
    _assetsAudioPlayer.playOrPause();
  }

  @override
  void dispose() {
    _assetsAudioPlayer = null;
    super.dispose();
  }

  int marks;
  String questionType;
  //Store logged user's username
  void loggedUsername() async {
    loginData = await SharedPreferences.getInstance();
    setState(() {
      loggedUser = loginData.getString('userName');
    });
  }
  _ResultScreenState(this.marks);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => Navigator.push(context, MaterialPageRoute(
              builder: (context) => DashBoardScreen())),
        ),
        title: Text("Safe Life Quiz Result"),
        actions: [
          IconButton(
            icon: Icon(
              Icons.power_settings_new,
              color: Colors.white,
            ),
            onPressed: () {signOut(context);},
          ),
        ],
        backgroundColor: Colors.indigoAccent,
      ),
      body:Column(
        children: <Widget>[
          Expanded(
            flex: 18,
            child: Card(
              color:Colors.indigo,
              child: Container(
                padding: EdgeInsets.all(32.0),
                child: Column(
                  children: <Widget>[
                   Material(
                     color: Colors.indigo,
                     child: Container(
                       width: 300.0,
                       height: 300.0,
                       alignment: Alignment.center,
                       child: ClipRect(
                         child: Image(
                           image: AssetImage(
                             image,
                           ),
                         ),
                       ),
                     ),
                   ),
                    Padding(
                      padding: EdgeInsets.symmetric(
                        vertical: 8.0,
                        horizontal: 15.0,
                      ),
                      child: Center(
                            child: Text(
                              loggedUser+' '+ message,
                              style: TextStyle(
                                  fontSize: 16.0,
                                  fontFamily: "Quando",
                                color: Colors.white,
                              ),
                            ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
          Expanded(
            flex: 4,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RaisedButton(
                  onPressed: (){
                    Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context)=>HomeScreen(),));
                  },
                  color:Colors.indigoAccent,
                  textColor: Colors.white,
                  child: Text("Continue", style: TextStyle(fontSize: 20.0,fontFamily: "Alike"),),
                  padding: EdgeInsets.symmetric(
                    vertical: 10.0,
                    horizontal: 20.0,
                  ),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10)),
                  splashColor: Colors.indigoAccent,
                )
              ],
            ),
          )
        ],
      )
    );
  }

}