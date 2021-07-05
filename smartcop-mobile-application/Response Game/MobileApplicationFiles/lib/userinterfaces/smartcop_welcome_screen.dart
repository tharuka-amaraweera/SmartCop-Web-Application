import 'package:assets_audio_player/assets_audio_player.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'game_selection_screen.dart';

void main() {
  runApp(MaterialApp(
    home: SmartcopScreen(),
  ));
}

class SmartcopScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SmartcopScreenState();
  }
}
class SmartcopScreenState extends State<SmartcopScreen> {
  AssetsAudioPlayer _assetsAudioPlayer;
  @override
  void initState() {
      super.initState();
      _assetsAudioPlayer = AssetsAudioPlayer();
      _assetsAudioPlayer.open(
        Audio("assets/startup.mp3"),
      );
      _assetsAudioPlayer.playOrPause();
    loadingProcess();
  }

  @override
  void dispose() {
    _assetsAudioPlayer = null;
    super.dispose();
  }

  //To display the welcome screen for 6 seconds
  Future<Timer> loadingProcess() async {
    return new Timer(Duration(seconds: 6), loadingNextScreen);
  }
  //Display login screen after the welcome screen(It will display after 8 seconds)
  loadingNextScreen() async {
    Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (context) => OptionScreen()));
  }
//Display welcome screen
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
            image: AssetImage('images/smartcop-edited.jpg'),
            fit: BoxFit.cover
        ) ,
      ),
    );
  }
}
