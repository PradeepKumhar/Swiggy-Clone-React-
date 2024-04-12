import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://via.placeholder.com/150",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PradeepKumhar");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    
    console.log(json);
  }

  render() {
  
    const { name, location,avatar_url} = this.state.userInfo;
    return (
      <div className="border border-black rounded-lg p-6 w-[300px]">
        <img className="rounded-full w-[250px]" src={avatar_url} alt={"Avatar of " + name} height="200px"/>
        
        <div className="pl-4 pt-6">
        <h1 className="font-bold text-lg">Name: {name}</h1>
        <h3>Location: {location}</h3>
        </div>
        
      </div>
    );
  }
}

export default User;
