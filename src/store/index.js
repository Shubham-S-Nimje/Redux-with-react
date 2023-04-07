import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter:true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers : {
        increment(state) {
            state.counter++ ;
        },
        decrement(state) {
            state.counter-- ;
        },
        incrementby5(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const initialAuthState = { isAuthenticated: false }

const AuthSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers : {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

// const counterReducer = (state = initialstate, action) => {
//     if(action.type === 'increment'){
//     return {
//         counter: state.counter + 1,
//         showCounter : state.showCounter
//     };
// }
// if(action.type === 'incrementby5'){
//     return {
//         counter: state.counter + action.amount,
//         showCounter : state.showCounter
//     };
// }
// if(action.type === 'decrement'){
//     return {
//         counter: state.counter - 1,
//         showCounter : state.showCounter
//     };
// }
// if(action.type === 'toggle'){
//     return {
//         showCounter: !state.showCounter,
//         counter : state.counter
//     };
// }

// return state;
// };

const store = configureStore({
    reducer : { counter : counterSlice.reducer, auth : AuthSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;


export default store;
