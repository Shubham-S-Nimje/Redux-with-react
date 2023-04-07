import { createStore } from "redux";

const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'increment'){
    return {
        counter: state.counter + 2
    };
}
if(action.type === 'decrement'){
    return {
        counter: state.counter - 2
    };
}

return state;
};

const store = createStore(counterReducer);

const countersubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(countersubscriber);

store.dispatch({type: 'incrementby2' });
store.dispatch({type: 'decrementby2' });


export default store;
