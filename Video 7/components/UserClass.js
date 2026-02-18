import React from "react"


class UserClass extends React.Component{

  constructor(props){
    super(props)

    //way to create state variables in class based component(no hooks are called)
    this.state={
      count:0,
    };
  }


  render(){
    const{name, location} =this.props


    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact info: @bhumirajbhar</h3>
        <h2>Count:{this.state.count }</h2>
      </div>
      

    )
  }
}

export default UserClass;