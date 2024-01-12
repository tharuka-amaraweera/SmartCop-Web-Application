import React, { Component } from "react";
//import { render } from "@testing-library/react";
import DashboardContent1 from "../dashboardContent1";
import DashboardContent2 from "../dashboardContent2";
import Cover from "../cover";
import Header from "../Header";
import axios from "axios";

class ParentOne extends Component {
    constructor(){
        super();
        this.state={
            officername: "",
            officeremail: "",
            officerpost: "",
            officerid: ""
            
        }
    }
   
    submitDetails = e => {
        e.preventDefault();
        console.log("submited");
        var title = this.title.value;
        console.log(title);
        const data={
            body: title,
            reviever: this.state.officeremail,
        }
        axios.post("/send_email",data).then(response=>(
              console.log(response)
          ));
          alert("Notification Sent Successfully!");
      };
    
    componentWillMount(){
      console.log("props "+this.props.match.params.textval);
        let name="officer"
        let email=""
        let post=""
        let id=""
        const offcer_id = "officer_296";
        axios.get("/get_officers_details").then((response)=>{

            
            
            for(let i=0; i<response.data.length; i++){
                
                if(offcer_id == response.data[i]._id){
                    
                    name=response.data[i].name
                    email=response.data[i].email
                    post=response.data[i].post
                    id=response.data[i]._id

                    this.setState({
                        officername:name,
                        officeremail:email,
                        officerpost:post,
                        officerid:response.data[i]._id
                    });

                }
                
            }
            
        });

        
        
    }

    
  render() {
    let name = this.state.officername;
    let email = this.state.officeremail;
    let post = this.state.officerpost;
    let _id = this.state.officerid;
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Cover />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <br/>
                <h1 className="rec">Notify officers</h1>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <tbody>
                <tr>
                  <td className="tbdata"><h3 className="offnamehead">Officer ID</h3></td>
                  <td className="tbdata"><h3 className="offnamehead">{_id}</h3></td>
                  </tr>
                  <tr>
                  <td className="tbdata"><h3 className="offnamehead">Officer Name</h3></td>
                  <td className="tbdata"><h3 className="offnamehead">{name}</h3></td>
                  </tr>
                  <tr>
                  <td className="tbdata"><h3 className="offnamehead">Officer Email</h3></td>
                  <td className="tbdata"><h3 className="offnamehead">{email}</h3></td>
                  </tr>
                  <tr>
                  <td className="tbdata"><h3 className="offnamehead">Officer Post</h3></td>
                  <td className="tbdata"><h3 className="offnamehead">{post}</h3></td>
                  </tr>
                </tbody>
                </table>
                
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
        <div className="col-lg-1"></div>
            <div className="col-lg-6">
                
            <textarea class="form-control" id="exampleTextarea" rows="2" value="duty on Monday at Checkpoint 01 from 12.00 a.m to 6.00 a.m" ref={(c) => this.title = c} name="title"></textarea>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
            <br/>
            <button
           
              type="submit"
              className="btn btn-success"
              onClick={this.submitDetails.bind(this)}
            >
              Notify Officers
            </button>
            </div>
            </div>
            <br/><br/><br/>
        </div>
      );
  }
}

export default ParentOne;
