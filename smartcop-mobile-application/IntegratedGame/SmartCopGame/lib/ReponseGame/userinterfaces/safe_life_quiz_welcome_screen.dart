import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:assets_audio_player/assets_audio_player.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dashboard_screen.dart';

class WelcomeScreen extends StatefulWidget{
  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen>{
  FirebaseAuth _auth = FirebaseAuth.instance;
  SharedPreferences loginData;
  bool newUser;
  AssetsAudioPlayer _assetsAudioPlayer;

  @override
  void initState() {
    super.initState();
    _assetsAudioPlayer = AssetsAudioPlayer();
    _assetsAudioPlayer.open(
      Audio("assets/smartcopTune.mp3"),
    );
    _assetsAudioPlayer.playOrPause();
    checkLoginStatus();
  }

  @override
  void dispose() {
    _assetsAudioPlayer = null;
    super.dispose();
  }

  void checkLoginStatus() async {
    loginData = await SharedPreferences.getInstance();
    newUser = (loginData.getBool('login') ?? true);
    print(newUser);
  }
  @override
  Widget build(BuildContext context){
    return  Container(
      padding: EdgeInsets.only(left:20.0,right: 20.0,bottom:40.0),
      alignment: Alignment.bottomCenter,
      decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('images/two.png'),
            fit: BoxFit.fill
          )
      ),
      child: Container(
        width: double.infinity,
        height: 50.0,
        padding: EdgeInsets.only(left:20.0,right: 20.0,bottom:10.0),
        child: RaisedButton(
          onPressed: () async{
            bool res = await loginWithGoogle();
            if(!res)
              print('Error login with google');
          },
          child: new Text("START",style:TextStyle(color:Colors.white,fontFamily: "Quando",fontSize: 30.0)),
          color: Colors.lightBlue,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(20)),
        ),
      ),
    );
  }

  Future<bool>loginWithGoogle() async {
    try{
      GoogleSignIn googleSignIn = GoogleSignIn();
      GoogleSignInAccount account = await googleSignIn.signIn();
      if(account == null)
        return false;
      AuthResult res = await _auth.signInWithCredential(GoogleAuthProvider.getCredential(
          idToken: (await account.authentication).idToken,
          accessToken: (await account.authentication).accessToken
      ));
      if(res.user == null) {
        return false;
      } else {
        print(res.user.uid.toString());
        print(res.user.displayName.toString());
        loginData.setString('userName', res.user.displayName.toString());
        loginData.setString('uid', res.user.uid.toString());
        loginData.setString('url',res.user.photoUrl.toString());
        loginData.setString('email', res.user.email.toString());
        Navigator.push(context, MaterialPageRoute(
            builder: (context) => DashBoardScreen(user: res.user)));
        return true;
      }
    }
    catch(e){
      print("Error login with google");
      return false;
    }
  }
}