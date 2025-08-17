import { createSlice } from "@reduxjs/toolkit";



const surveySlice = createSlice({
    name:'survey',
    initialState:{
        surveyName:'Sample Sureevey',
        questions:[]
    },
    reducers:{
        addQuestions:(state,action)=>{
            state.questions=[...state.questions,action.payload]
        },
        updateName:(state,action)=>{
            state.surveyName = action.payload
        }
    }
})


export const {addQuestions,updateName} = surveySlice.actions

export default surveySlice.reducer