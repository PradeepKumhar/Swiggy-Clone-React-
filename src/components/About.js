import React, { Component } from "react";
import User from "./User"; 
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="p-4 m-4">
      {/* <div>
        loggedInUser: <UserContext.Consumer>
          {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div> */}
        <h1 className="text-2xl font-bold pb-4">About</h1>
        <div>
        <h2 className="pb-4">This about page of this website </h2>
        <User/>
        </div>
       
      </div>
    );
  }
}

export default About;

