import React, { useState } from 'react'

const Login = () => {

  const [value, setValues] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  // STATES FOR CHECKING ERRORS 
  const [submitted, setSubmitted] = useState(false)
  const [errors,setErrors] = useState(false);

  // HANDLING FORM SUBMISSION
  const SignUp = (e) =>{
   e.preventDefault()
   console.log(value)
   if(value.fullName === "" || value.email === "" || value.password === "") {
    setErrors(true)
    setSubmitted(false)

   }

   else {
    setSubmitted(true)
    setErrors(false)
    setValues({
      fullName: "",
      email: "",
      password: ""
    })
   }
   setValues({
    fullName: "",
    email: " ",
    password: " "
  })
  
 
  }
  const successMessage = () =>{
   if(submitted)
    return (
      <div>
        <h1>User {value.fullName}
        successfully Registered
        </h1>
      </div>
    )
  }
  
  const ErrorMessage = () =>{
    if(errors)
    return (
      <div>
        <h1>Please Enter All The Fields</h1>
      </div>
    )
  }
 // HANDLING VALUES CHANGE
  const handleChange = (event) =>{
    setValues ({
      ...value,[event.target.name] : event.target.value
    })
  
  }
  return (
    <>
    <section className='form-container'>
        <div>
       { ErrorMessage()}
       {successMessage()}
        </div>
        <div className='app-wrapper'>
          <h1>Create Account</h1>
          <form className='form-wrapper' onSubmit={SignUp}>
         <label className='label'> Full Name </label>
         <input type="text" name='fullName' value={value.fullName} onChange={handleChange}/>
         <label className='label' > Email </label>
         <input type="email" name = "email" value={value.email} onChange={handleChange}/>
         <label className='label'> Password</label>
         <input type="password" name = "password" value={value.password} onChange={handleChange}/>
         <button>Sign Up</button>
          </form>
          <h2>WILD BY ALLEN STORE</h2>
        </div>
      
    </section>
    </>
  )
}

export default Login