import React,{Component} from "react";
import Fire from './config/fire';
import Profile from './Profile';
import Login from './Login';


class App extends Component{
  constructor(props){
    super(props);
    this.authListener= this.authListener.bind(this);
    this.state = {
      user: {},
      }
    }


  componentDidMount(){
    authListener();
  }

  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ user });
      }
      else{
        this.setState({ user: null });
      }
    });
  }


render(){
  return(
    <div className="App">
    {this.state.user ? (<Profile/ >) : (<Login/ >)}
    </div>
  );
}
}

export default App;
