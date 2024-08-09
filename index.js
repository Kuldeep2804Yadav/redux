const redux = require('redux');

const reducerfunction = (state={counter:0}, action)=>{
     switch (action.type) {
        case 'increment':
            return {...state, counter:state.counter + 1}
        case 'decrement':
            return {...state,counter:state.counter -1}    

        case 'incrementBy':
            return {...state, counter:state.counter + action.payload}
        case 'decrementBy':
            return {...state, counter:state.counter - action.payload}    
           
        default:
            return state;
        
            
     }
      
}

const store= redux.createStore(reducerfunction);

const counterSubscriber= ()=>{
    const latestSate= store.getState();
    console.log(latestSate)
}
store.subscribe(counterSubscriber)

store.dispatch({type:"increment" });
store.dispatch({type:"decrement"})

store.dispatch({type:"incrementBy" ,payload:2});
store.dispatch({type:"decrementBy",payload:5})

