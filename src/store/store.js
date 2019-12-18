import {createStore} from 'redux'
const defaultState={
   type:1,
   right:0,
   wrong:0
}
const reducer=(state=defaultState,action)=>{
   switch(action.type){
       case 'SET_STATE' :
           let newdata=JSON.parse(JSON.stringify(state))
           newdata[action.key]=action.value
           return newdata
           default :
           return state
   }
}
const store=createStore(reducer)
export default store