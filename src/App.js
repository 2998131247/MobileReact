import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Homepages from "./pages/home/homepages"
import {BrowserRouter as Router } from 'react-router-dom';
import { setUserInfo} from './redux/actions/login'
import {connect} from 'react-redux'
 

 class App extends Component {
   constructor(props){
     super(props)
   }

   componentWillMount(){
     console.log(this.props.login)
     
   }
   handclick(){
    let y={
      name:'cn00099',
      id:5,
      token:3
    }
    this.props.setUserInfo(y);
    
   }
  render() {
    return (
      <>
        <Router>
          <button onClick={this.handclick.bind(this)}>  {this.props.login.name}</button>
          <Homepages routes={this.props.routes} />
        </Router>
      
      </>
    )
  }
}

const mapState = (state) =>{

  return{
      login:state.login
  }
}

export default connect(mapState,{setUserInfo})(App);
