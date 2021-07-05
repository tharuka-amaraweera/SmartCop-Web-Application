import 'dart:async';
import 'package:flutter/material.dart';
import 'playing_audio_screen.dart';
import 'article_screen.dart';
import 'playing_video_screen.dart';
import 'package:video_player/video_player.dart';

class QuizIntroPage extends StatefulWidget{
  final String videoFile;
  final String questionType;
  QuizIntroPage({Key key, @required this.videoFile, @required this.questionType}) : super(key : key);
  QuizIntroPageState createState() => QuizIntroPageState(videoFile,questionType);
}

class QuizIntroPageState extends State<QuizIntroPage>{
  VideoPlayerController _controller;
  int duration;
  String videoFile;
  String questionType;
  QuizIntroPageState(this.videoFile,this.questionType);

  void initState(){
    super.initState();
    _controller = VideoPlayerController.asset(videoFile)
      ..initialize().then((_){
        setState(() {
          duration=_controller.value.duration.inSeconds;
          print(duration);
          print(questionType);
          Timer(Duration(seconds:duration),(){
            if(videoFile == 'video/videoBased.mp4') {
              Navigator.of(context).pushReplacement(
                  MaterialPageRoute(builder: (context) => VideoPage(questionType:questionType),));
            } else if(videoFile == 'video/audioBased.mp4'){
              Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) =>AudioPage(questionType:questionType),));
            } else if(videoFile == 'video/articleBased.mp4'){
              Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) =>ArticleScreen(questionType:questionType),));
            }
          });
        });
      });
    _controller.play();
    _controller.setLooping(false);
  }
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Stack(
          fit: StackFit.expand,
          children: <Widget>[
            Container(
              child: _controller.value.initialized?AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                
                child: VideoPlayer(_controller),
              )
                  :Container(),
            )
          ],
        ),
      ),
    );
  }
}