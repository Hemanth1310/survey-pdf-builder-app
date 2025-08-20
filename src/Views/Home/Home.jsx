import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from '../../app/SurveySlice'
import { useNavigate } from 'react-router'

const Home = () => {
    const [sname,setSname] = useState('')
    const navigate=useNavigate();
    const devRef= useRef()
    const survey = useSelector(store=>store.survey)
    const dispatch = useDispatch()
    const handleNext=()=>{
        dispatch(updateName(sname))
        navigate('/createSurvey')
    }
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            handleNext()
        }
    }

    useEffect(()=>{
        devRef.current.focus()
    })
  return (
    <div className='Home'>
        <h1>Create\Survey</h1>
        <h3>Create and Download Your Own questionnaire</h3>
        <div >
            <input ref={devRef} value={sname} onChange={(e)=>{setSname(e.target.value)}} onKeyDown={handleKeyDown} placeholder='Enter a name...'></input>
            <button onClick={handleNext}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
        </div>   
    </div>
  )
}

export default Home