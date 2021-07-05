import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;


String predictedTime = "";

Future<http.Response> predictQuestionTime(var body) async {

  try {
    var url = "https://timeprediction.herokuapp.com/predictTime";
    //encode Map to JSON
    var body1 = jsonEncode(body);
    print(body1);
    var response = await http.post(url, headers: {"Content-Type": "application/json"}, body: body1);
    print(response);
    print("${response.statusCode}");
    print("${response.body}");
    var responseBody = response.body;

    predictedTime = responseBody
        .toString()
        .replaceAll("{", "")
        .replaceAll("}", "")
        .split("\"prediction\":")
        .removeLast();
    print("*****************************");
    print(predictedTime);

    return response;
  } catch (e) {
    print(e);
    return e;
  }
}

  Future<int> predictTime(var body) async {

    var time= await predictQuestionTime(body);
    print(time);
    print(predictedTime);
    predictedTime = predictedTime.replaceAll("[","").replaceAll("]","");
    predictedTime = predictedTime.replaceAll("\"", "");

    int newTime = int.parse(predictedTime);
    return newTime;
  }
