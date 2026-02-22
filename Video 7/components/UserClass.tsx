import React from "react"


type Props={
    name: string;
    location: string;
}

type State={
    userInfo:{
      name: string;
      location: string;
      avatar_url: string;
    } | null 
}



class UserClass extends React.Component<Props, State>{

  constructor(props: Props){
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
    if (this.state.userInfo===null){
      return <h2>Loading User Data...</h2>
    }


    const{name, location, avatar_url} = this.state.userInfo;

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


/*
* 
* -------------MOUNTING----------
* 
* Constructor(dummy data)
* Render (dummy)
*       <HTML: Dummy data is flashed on the screen thodi der>
* ComponentDidMount()
*        <API Call>
*        <this.setState>  --> state varibale is updated 
*
*-------------UPDATING-----------
* 
* Render(with API data)
*        <HTML (API data)>
* ComponentDidUpdate()
*
*
*------------UNMOUNTING----------
*
* ComponentWillUnmount()
*
*
*/