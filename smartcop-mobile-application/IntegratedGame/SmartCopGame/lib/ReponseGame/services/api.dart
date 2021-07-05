import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import '../userinterfaces/safe_life_quiz_welcome_screen.dart';
import 'marks.dart';

  String collectionName = "ScoreDetail";

  //method to store the player's score
  void storeMarks(String name , int score , String id){
    Marks marksDetail = Marks(playerName: name, marks: score);
    try{
      Firestore.instance.runTransaction(
            (Transaction transaction) async{
          await Firestore.instance
              .collection(collectionName)
              .document(id)
              .setData(marksDetail.toJson());
        },
      );
    } catch(e){
      print(e.toString());
    }
  }

  //method to update the player's score
  void updateMarks(Marks player, int newScore){
    try {
      Firestore.instance.runTransaction((transaction) async {
        await transaction.update(player.reference, {'Score': newScore});
      });
    } catch(e) {
      print(e.toString());
    }
  }

  final GoogleSignIn _googleSignIn = new GoogleSignIn();
  //methoud to sign-out from the game
  signOut(BuildContext context) async {
    _googleSignIn.signOut();
    Navigator.push(context, MaterialPageRoute(builder: (context) => WelcomeScreen())
    );
  }
