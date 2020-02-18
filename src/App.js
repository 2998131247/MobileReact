import React from 'react'
import './App.css';
import Homepages from "./pages/home/homepages"
import {BrowserRouter as Router } from 'react-router-dom';
import { setUserInfo} from './redux/actions/login'
import {connect} from 'react-redux'
 

//APP页面
function App(props) {

  const handclick =() =>{
    let y={
      name:'cn00',
      id:5,
      token:3
    }
    props.setUserInfo(y);
   }

  return (
    <>
        <Router>
          <Homepages routes={props.routes} />
        </Router>
      </>
  )
}
const mapState = (state) =>{

  return{
      login:state.login
  }
}

export default connect(mapState,{setUserInfo})(App);
