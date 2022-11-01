import axios from 'axios'
import React, {useState}  from 'react'
import { toast } from 'react-toastify'

const form = () => {
   const [stateRegis, setStateRegis] = useState({
    email: '', password: '',confirmPassword: '', firstName: '', lastName: '',
  })
  const [data, setData] = useState()
   const handleChange = (e) => {
    setStateRegis((state) => ({
      ...state,
      [e.target.name]: e.target.value
    })
    )
  }
  const handleValue = (e) => {
     setStateRegis((state) => ({
      ...state,
       email: '', password: '',confirmPassword: '', firstName: '', lastName: ''
    })
    )
  }
  const url = "http://localhost:5000"
  const sendData = async(data)=>{
   return await axios.post(`${url}/`, data)
  }
   const handleSubmit = async(e) => {
    if(validateUser() === true){
    const res = await sendData(stateRegis)
    if(res){
      setData(res)
      handleValue(e)
    }
    console.log('data', data)

    }
    
    e.preventDefault();

  }
   const validateUser = ()=> {
    const  {email, password,confirmPassword} = stateRegis
    if(email.length < 6 ){
      toast.error("Email needs at least 6 characters")
      return false
    }
    const partern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if(!email.match(partern)  ){
      toast.error("Email needs right form!")
      return false
    }
    if (password.length < 6){
      toast.error("Password must be at least 6 characters!");
      return false
    }
    if(password !== confirmPassword){
      toast.error("Password and confirm password must be the same!")
      return false;
    }
    return true
  }
  return (
    <>
        <form className="form-login" onSubmit={handleSubmit}>
              <h2 className="form-heading">Sign up</h2>
              <div className="form-group">
                <input 
                  type="text" 
                  name="firstName"
                  required="required"
                  value={stateRegis.firstName}
                  onChange={handleChange}
                  />
                  <span>Fist Name</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="lastName"
                  required="required"
                  value={stateRegis.lastName}
                  onChange={handleChange}
                  />
                  <span>Last Name</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="email"
                  required="required"
                  value={stateRegis.email}
                  onChange={handleChange}
                  />
                  <span>Email</span>
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type={"password"}
                  name="password"
                  required="required"
                  autoComplete="on"
                  value={stateRegis.password}
                  onChange={handleChange}
                  />
                  <span>Password</span>
                  {/* <div onClick={()=>setShowPass(!showPass)} className="show-password">
                    <ToggleShowEye show={showPass} 
                      width="36"
                      height="22"
                      color="#555353"
                    />
                  </div> */}
                  <i></i>
              </div>
              <div className="form-group">
                <input 
                  type={"password"}
                  name="confirmPassword"
                  required="required"
                  autoComplete="on"
                  value={stateRegis.confirmPassword}
                  onChange={handleChange}
                  />
                  <span>Confirm Password</span>
                  {/* <div onClick={()=>setShowConfirm(!showConfirm)} className="show-password">
                    <ToggleShowEye show={showConfirm} 
                      width="36"
                      height="22"
                      color="#555353"
                    />
                  </div> */}
                  <i></i>
              </div>
              <input type="submit" value="Register" className="form-submit" />
            </form>
            <ToastContainer />
    </>
  )
}

export default form       