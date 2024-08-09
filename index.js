const redux = require('redux');

const reducerfunction = (state={counter:0}, action)=>{
     
       if(action.type === "increment"){
        return { ...state, counter: state.counter + action.payload}
       }
       else if (action.type === "decrement"){
        return { ...state, counter: state.counter - action.payload}
       }
}

const store= redux.createStore(reducerfunction);

const counterSubscriber= ()=>{
    const latestSate= store.getState();
    console.log(latestSate)
}
store.subscribe(counterSubscriber)

store.dispatch({type:"increment" ,payload:2});
store.dispatch({type:"decrement",payload:5})

