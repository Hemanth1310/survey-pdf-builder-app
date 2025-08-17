import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from '../../app/SurveySlice'
import { useNavigate } from 'react-router'

const Home = () => {
    const [sname,setSname] = useState('')
    const navigate=useNavigate();
    const survey = useSelector(store=>store.survey)
    const dispatch = useDispatch()
    const handleNext=()=>{
        dispatch(updateName(sname))
        navigate('/createSurvey')
    }
  return (
    <div className='Home'>
        <h1>Create\Survey</h1>
        <div >
            <input value={sname} onChange={(e)=>{setSname(e.target.value)}} placeholder='Enter a name...'></input>
            <button onClick={handleNext}><span class="material-symbols-outlined">arrow_forward_ios</span></button>
        </div>   
    </div>
  )
}

export default Home