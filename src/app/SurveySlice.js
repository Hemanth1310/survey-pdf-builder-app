import { createSlice } from "@reduxjs/toolkit";



const surveySlice = createSlice({
    name:'survey',
    initialState:{
        surveyName:'',
        surveyDescription:'',
        questions:[{
                        id:'01',
                        question:'How Good are you',
                        answerType:'short-answer',
                        options:{
                            mcqOpt1:'',
                            mcqOpt2:'',
                            mcqOpt3:'',
                            mcqOpt4:'',
                        }
                },{
                        id:'02',
                        question:'Please choose the below option',
                        answerType:'MCQ',
                        options:{
                            mcqOpt1:'good',
                            mcqOpt2:'bad',
                            mcqOpt3:'ugly',
                            mcqOpt4:'worst',
                        }
                },{
                        id:'03',
                        question:'Germany is in europe',
                        answerType:'true/false',
                        options:{
                            mcqOpt1:'',
                            mcqOpt2:'',
                            mcqOpt3:'',
                            mcqOpt4:'',
                        }
                }],
        
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