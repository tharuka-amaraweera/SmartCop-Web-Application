import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../services/api.dart';
import 'dashboard_screen.dart';

class Profile extends StatefulWidget {
  @override
  ProfileState createState() {
    return ProfileState();
  }
}

class ProfileState extends State<Profile> {
  double screenHeight;
  SharedPreferences loginData;
  String loggedUser , loggedUid , profilePic, loggedEmail;

  @override
  Future<void> initState(){
    super.initState();
    loggedUsername();
  }

  //method to get the logged user's details
  void loggedUsername() async {
    loginData = await SharedPreferences.getInstance();
    setState(() {
      loggedUser = loginData.getString('userName');
      loggedUid = loginData.getString('uid');
      profilePic = loginData.getString('url');
      loggedEmail = loginData.getString('email');
    });
  }

  @override
  Widget build(BuildContext context) {
    screenHeight = MediaQuery.of(context).size.height;
    return new Scaffold(
      appBar: AppBar(
        elevation: 20.0,
        backgroundColor: Colors.indigoAccent,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => Navigator.push(context, MaterialPageRoute(
              builder: (context) => DashBoardScreen())),
        ),
        title: Row(
          children: <Widget>[
            SizedBox(
              width: 15,
            ),
            Container(
              //margin: EdgeInsets.fromLTRB(0, 0, 130, 0),
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: <Widget>[
                        Text('Profile',
                            style: TextStyle(fontSize: 20.0,fontFamily: "Quando")
                        ),
                        IconButton(
                          padding: EdgeInsets.only(left: 160),
                          icon: Icon(
                            Icons.power_settings_new,
                            color: Colors.white,
                          ),
                          onPressed: () {signOut(context);},
                        ),
                      ],
                    ),
                  ]
              ),
            )
          ],
        ),

        actionsIconTheme:
        IconThemeData(size: 30.0, color: Colors.white, opacity: 100.0),
      ),
      body: ListView(
        children: <Widget>[
          SizedBox(height: 18.0),
          ClipOval(
            child: Image.network(
              profilePic,
              width: 200,
              height: 200,
              fit: BoxFit.contain,
            ),
          ),
          SizedBox(height: 18.0),

          ListTile(
            title: Text('Logged Name : '+loggedUser,style: TextStyle(fontSize: 18,fontFamily: "Alike")),
          ),
          ListTile(
            title: Text('Logged Email : '+loggedEmail,style: TextStyle(fontSize: 18,fontFamily: "Alike")),
          ),
          ListTile(
            title: Text('Logged ID : '+loggedUid,style: TextStyle(fontSize: 18,fontFamily: "Alike")),
          ),
        ],
      ),
    );
  }
}
