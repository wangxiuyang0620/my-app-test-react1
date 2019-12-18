import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Home extends Component{
    render(){
        return (
            <div className='wrap'>
                <p onClick={()=>{
                    this.changtab(1)
                }}>add</p>
                <p onClick={()=>{
                    this.changtab(2)
                }}>remove</p>
                 <p onClick={()=>{
                    this.changtab(3)
                }}>multiply</p>
            </div>
        )
    }
    changtab(type){
        this.props.history.push('/item')
        this.props.setState('type',type)
    }
}
const mapStateToProps=(state)=>{
    return{
        type:state.type
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        setState(key,value){
            dispatch({type:"SET_STATE",key,value})
        }
    }
}
let List= connect(mapStateToProps,mapDispatchToProps)(Home)
export default withRouter(List)