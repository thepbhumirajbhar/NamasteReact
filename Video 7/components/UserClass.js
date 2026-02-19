import React from "react"


class UserClass extends React.Component{

  constructor(props){
    super(props)

    //way to create state variables in class based component(no hooks are called)
    this.state={
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "none",
      },
    };
  }

  //API CALL
  async componentDidMount() {
    const data = await fetch ("https://api.github.com/users/thepbhumirajbhar")
    const json = await data.json()

    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    //it gets called when you move to another component(contactUs for eg)
  }


  render(){
    
    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">

        <img src={avatar_url} />

        <h2>Name: {name}</h2>
        <h3>Location: {location || "Delhi" }</h3>
        
        <h3>Contact info: @bhumirajbhar</h3>
        
      </div>
      

    )
  }
}

export default UserClass;