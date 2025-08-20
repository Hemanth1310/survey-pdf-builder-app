import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <p>Create\<span>Survey</span></p>
       <nav>
                <div>
                    <NavLink style={({isActive})=>isActive?{textDecoration:'underline'}:{}} className='nav-link' to='/'>Home</NavLink>
                </div>
                 <div>
                    <NavLink style={({isActive})=>isActive?{textDecoration:'underline'}:{}} className='nav-link' to='/createSurvey'>Edit</NavLink>
                </div>
                <div>
                        <NavLink style={({isActive})=>isActive?{textDecoration:'underline'}:{}} className='nav-link' to='/viewSurvey'>View Survey</NavLink>
                </div>
           
           
       </nav>
    </div>
  )
}

export default Navbar