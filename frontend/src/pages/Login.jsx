import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore.js'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {login, isLoggedIn} = useAuthStore()
  return (
    <div>Login</div>
  )
}

export default Login