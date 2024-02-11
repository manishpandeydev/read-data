import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';

 const Features = () => {

  const navigate = useNavigate();

  const handleclick =()=>{
navigate('/home')
  }
  return(<>
    <div>

      <h1  >Adding New features Soon...</h1>

      <button className='btn btn-primary' onClick={handleclick}>Back</button>
    </div></>)



}
export default Features;
