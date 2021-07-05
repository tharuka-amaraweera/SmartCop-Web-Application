import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class AudioLeaderBoardPage extends StatefulWidget {
  @override
  _AudioLeaderBoardPageState createState() => _AudioLeaderBoardPageState();
}

class _AudioLeaderBoardPageState extends State<AudioLeaderBoardPage> {
  LeaderBoardItem obj = new LeaderBoardItem();
  Map<String,String> leaderBoardItems = Map();
  var leaderBoardEntries;

  @override
  void initState() {
    // super.initState(); should be at the start of the method
    super.initState();
    fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: ListView.builder(
        itemCount: leaderBoardItems.length,
        itemBuilder: (BuildContext ctxt, int index) => buildList(ctxt,index),
      ),
    );
  }

  Widget buildList(BuildContext ctxt, int index) {
    int ind = index + 1;
    Widget crown;

    if (ind == 1) {
      crown = Padding(
          padding: const EdgeInsets.only(right: 0.0),
          child: Stack(
            alignment: Alignment.center,
            children: <Widget>[
              Center(child: Icon(FontAwesomeIcons.crown, size: 36, color: Colors.yellow,)),
              Padding(
                padding: const EdgeInsets.only(left: 8.0, top: 6),
                child: Center(child: Text('1', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),)),
              )
            ],
          )
      );
    } else if (ind == 2) {
      crown = Padding(
          padding: const EdgeInsets.only(right: 0.0),
          child: Stack(
            alignment: Alignment.center,
            children: <Widget>[
              Center(child: Icon(FontAwesomeIcons.crown, size: 36, color: Colors.grey[300],)),
              Padding(
                padding: const EdgeInsets.only(left: 8.0, top: 6),
                child: Center(child: Text('2', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),)),
              )
            ],
          )
      );
    } else if (ind == 3) {
      crown = Padding(
          padding: const EdgeInsets.only(right: 0.0),
          child: Stack(
            alignment: Alignment.center,
            children: <Widget>[
              Center(child: Icon(FontAwesomeIcons.crown, size: 36, color: Colors.orange[300],)),
              Padding(
                padding: const EdgeInsets.only(left: 8.0, top: 6),
                child: Center(child: Text('3', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),)),
              )
            ],
          )
      );
    } else {
      crown = CircleAvatar(
          backgroundColor: Colors.grey,
          radius: 13,
          child: Text(
            ind.toString(),
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 15
            ),
          )
      );
    }

    return Padding(
      padding: const EdgeInsets.only(left:8.0,right: 8.0,top: 10),
      child: Container(
        height: 100,
        decoration: BoxDecoration(
            color: Colors.indigo,
            borderRadius: BorderRadius.all(Radius.circular(15.0)),
            boxShadow: [BoxShadow(color: Colors.indigoAccent)]
        ),
        child: Row(
          children: <Widget>[
            Expanded(
              child: Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: const EdgeInsets.only(right: 0.0),
                  child: Row(
                    children: <Widget>[
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Padding(
                          padding: const EdgeInsets.only(left: 15.0, right: 25),
                          child: crown,
                        ),
                      ),
                      Align(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Padding(
                                padding: const EdgeInsets.only(left: 8.0, top: 5),
                                child: Text(leaderBoardEntries.keys.elementAt(index), style: TextStyle(color: Colors.white,
                                    fontWeight: FontWeight.bold,fontSize: 18
                                ),
                                ),
                              ),
                            ],
                          )
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Align(
              alignment: Alignment.centerRight,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(leaderBoardEntries.values.elementAt(index) , style: TextStyle(color: Colors.white,
                    fontWeight: FontWeight.bold,fontSize: 18
                ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void fetchData() async{
    final List<String> names =[];
    final List<String> marks = [];
    await Firestore.instance.collection("ScoreDetail").where("questionType",isEqualTo: "audio").getDocuments().then((QuerySnapshot snapshot) {
      snapshot.documents.forEach((f) {
        obj.name = f.data['Name'].toString();
        obj.marks = f.data['Score'].toString();
        names.add(obj.name);
        marks.add(obj.marks);
      });

      for (var i = 0; i < names.length; i++) {
        Map<String,String> lbi= {'${names[i]}': '${marks[i]}'};
        leaderBoardItems.addAll(lbi);
      }
    });

    var sortedEntries;
    // sort the marks in desending order
    sortedEntries = leaderBoardItems.entries.toList()..sort((e1, e2) {
      var diff = e2.value.compareTo(e1.value);
      if (diff == 0) diff = e2.key.compareTo(e1.key);
      return diff;
    });
    // add the sorted entries
    leaderBoardEntries = Map<String, String>.fromEntries(sortedEntries);

    setState(() {});
  }
}

class LeaderBoardItem {
  String name;
  String marks;
  LeaderBoardItem();
}