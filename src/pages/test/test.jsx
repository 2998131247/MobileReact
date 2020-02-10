import React, { Component } from 'react'
import { setUserInfo} from '../../redux/actions/login'
import {connect} from 'react-redux'

class test extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        var data = this.props.location.query;
        console.log(data)
    }
    handclick(){
        let y={
          name:'cn000988888',
          id:5,
          token:3
        }
        this.props.setUserInfo(y);
        console.log(this.props)
        
       }
    render() {
        //相当于vue 的过滤器的作用
        const date_format = date => {  return date}
        return (
            <div>
                <button onClick={this.handclick.bind(this)}>  33333</button>
                test1  {date_format(777)}
            </div>
        )
    }
}
const mapState = (state) =>{

    return{
        login:state.login
    }
  }
  
  export default connect(mapState,{setUserInfo})(test);
