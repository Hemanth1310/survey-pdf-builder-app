import { configureStore } from "@reduxjs/toolkit";
import SurveySlice from './SurveySlice'

const store = configureStore({
    reducer:{
        survey: SurveySlice
    }
    
})

export default store