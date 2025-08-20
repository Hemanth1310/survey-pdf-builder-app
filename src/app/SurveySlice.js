import { createSlice } from "@reduxjs/toolkit";

import {sampleDEscription,sampleName,sampleData} from "../utils/SampleData.js";

const surveySlice = createSlice({
    name:'survey',
    initialState:{
        surveyName:sampleName,
        surveyDescription:sampleDEscription,
        questions:[...sampleData],
        
    },
    reducers:{
        addQuestions:(state,action)=>{
            state.questions=[...state.questions,action.payload]
        },
        updateName:(state,action)=>{
            state.surveyName = action.payload
        },
        updateDescription:(state,action)=>{
            state.surveyDescription=action.payload
        },
        updateSurvey:(state,action)=>{
             state.questions=[...action.payload.questions]
               state.surveyName = action.payload.surveyName
               state.surveyDescription=action.payload.surveyDescription
        }
    }
})


export const {addQuestions,updateName,updateDescription,updateSurvey} = surveySlice.actions

export default surveySlice.reducer