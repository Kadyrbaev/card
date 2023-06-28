import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState={
    text: "Hello"
}
console.log(initialState);
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers:{
        plusNum(state=initialState, action){
            console.log(action);
            console.log(state);
            console.log("TEST");
            state.text = 20
        },
        minus(){

        }
    }
})
console.log(testSlice);

const rootReducer = combineReducers({
    test: testSlice.reducer,
})


export const store = createStore(rootReducer)



// const obj = {
//     age: 29
// }
// obj.age = 49
// const obj2 = {
//     ...obj,
//     age:49
// }