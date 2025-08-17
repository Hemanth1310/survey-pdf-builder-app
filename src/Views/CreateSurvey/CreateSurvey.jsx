import React from 'react'
import { useSelector } from 'react-redux'

const CreateSurvey = () => {
    const surveyData = useSelector(store=>store.survey)
  return (
    <div>Create Survey
        <h2>{surveyData.surveyName}</h2>
    </div>
    
  )
}

export default CreateSurvey