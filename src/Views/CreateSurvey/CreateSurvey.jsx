import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CreateSurvey.css'

import {addQuestions,updateName,updateDescription,updateSurvey} from '../../app/SurveySlice.js'
import { Navigate, useNavigate } from 'react-router'
const CreateSurvey = () => {
    const navigate = useNavigate()
    const initFormField = {
        id:'',
        question:'',
        answerType:'',
        options:{
            mcqOpt1:'',
            mcqOpt2:'',
            mcqOpt3:'',
            mcqOpt4:'',
        }
    }
    const surveyData = useSelector(store=>store.survey)
    const [formdata,setFormData] = useState({
        surveyName:surveyData.surveyName,
        surveyDescription:surveyData.surveyDescription,
        questions:[...surveyData.questions]
    })
    const ansTypes = ['short-answer','MCQ','true/false']

    const [formField,setFormFeild] = useState(initFormField)

    const dispatch = useDispatch()
    
    const handleQuestion = (e)=>{
        setFormFeild(prev=>({...prev,question:e.target.value}))
    }
    const handleAnswerType = (e)=>{
        setFormFeild(prev=>({...prev,answerType:e.target.value}))
    }


    const handleMCQOptions = (e)=>{
        const {name,value} = e.target
        setFormFeild(prev=>({...prev,options:{...prev.options,[name]:value}}))
    }


    const handleFormChange=(e)=>{
        const {name,value}= e.target;
         setFormData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmitQA=()=>{

        const questionWithID = {
            ...formField,
            id:Date.now()
        }
        setFormData(prev=>({...prev,questions:[...prev.questions,questionWithID]}))
        setFormFeild(initFormField)


    }

    const handleDelete=(id)=>{
            setFormData(prev=>({...prev,questions:prev.questions.filter((item)=>item.id!=id)}))

    }

    const handleCreate=()=>{
        dispatch(updateSurvey(formdata))
        navigate('/viewSurvey')
    }



    
    // useEffect(()=>console.log(formField),[formField])
    // useEffect(()=>console.log(formdata),[formdata])

  return (
    <>
    <div className='CreateSurvey-container'>
        <input name='surveyName' className='input-cs title' value={formdata.surveyName} onChange={handleFormChange} placeholder='Form Title'></input>
        <input name='surveyDescription' className='input-cs subhead' value={formdata.surveyDescription} onChange={handleFormChange} placeholder='Form Description'></input>
    </div>
     {formdata.questions.length!=0?<div className='CreateSurvey-container'>
      {formdata.questions.map((item,index)=>(
        <div className='Listing-survey' key={item.id}>
            <div className='Question-template'>{index+1}. {item.question}</div>
             {item.answerType==='short-answer'? 
             <div className='Answer-box'>  <div className='Short-answer-area'></div></div>
              :item.answerType==='MCQ'?
                <div className='Answer-box'>
                   <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt1}</span>
                    <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt2}</span> 
                     <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt3}</span> 
                      <span style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}> <div className="checkbox-blank"></div>{item.options.mcqOpt4}</span> 
                </div>:
                <div className='Answer-box'>
                    <div style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}><div className='tf-circle'></div>True</div>  
                    <div style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'20px'}}><div className='tf-circle'></div>False</div> 
                </div>
                }
            <button className='delete-btn' onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
      ))}
         <button className='submit-btn' onClick={handleCreate}>Create Form</button>
    </div>:null}
    
     <div className='CreateSurvey-container'>
        <div className='Question-Box'>
             <input name='question' className='input-cs content' value={formField.question} onChange={handleQuestion} placeholder='Question...'></input>
             <div>
                <label>Select Option: </label>
               
                <select value={formField.answerType} onChange={handleAnswerType}>
                    {ansTypes.map((val)=>(<option key={val} value={val}>{val}</option>))}
                </select>
             </div>

             <div>
                {formField.answerType==='MCQ'?
                <div>
                    <div className='mcd-div'> 
                       <div className="checkbox-blank"></div>
                        <input name='mcqOpt1' className='input-cs option' value={formField.options.mcqOpt1} onChange={handleMCQOptions} placeholder='Enter Option 1'></input>
                    </div>
                    <div className='mcd-div'> 
                       <div className="checkbox-blank"></div>
                         <input name='mcqOpt2' className='input-cs option' value={formField.options.mcqOpt2} onChange={handleMCQOptions} placeholder='Enter Option 2'></input>
                    </div>
                    <div className='mcd-div'> 
                       <div className="checkbox-blank"></div>
                         <input name='mcqOpt3' className='input-cs option' value={formField.options.mcqOpt3} onChange={handleMCQOptions} placeholder='Enter Option 3'></input>
                    </div>
                    <div className='mcd-div'> 
                       <div className="checkbox-blank"></div>
                        <input name='mcqOpt4' className='input-cs option' value={formField.options.mcqOpt4} onChange={handleMCQOptions} placeholder='Enter Option 4'></input>
                    </div>
                   
                   
                   
                    
                </div>
               :
                 null}
             </div>
             <button className='submit-btn' onClick={handleSubmitQA}>Add</button>

               {/* <div>
                {answerType==='short-answer'? 
                <textarea name='questions' className='shtans' value={formdata.surveyName} onChange={handleFormChange} placeholder='Short Answer...'></textarea>:answerType==='mcq'?
                 <input name='questions' className='input-cs content' value={formdata.surveyName} onChange={handleFormChange} placeholder='Short Answer...'></input>:
                  <input name='questions' className='input-cs content' value={formdata.surveyName} onChange={handleFormChange} placeholder='Short Answer...'></input>}
             </div> */}
             
        </div>
    </div>
    </>
    
    
  )
}

export default CreateSurvey