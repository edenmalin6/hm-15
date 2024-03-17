import React, { useEffect } from 'react'
import { useUser } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate

  useEffect(()=>{
    if(!user) {
      navigate("/login")
    }
  },[])
  return (
    <div>HomePage</div>
  )
}
