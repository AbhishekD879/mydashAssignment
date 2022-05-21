import React,{useState} from 'react'
import { passwordValidator,emailValidator,phonevalidation,fullNamevalidator} from '../../Utils/utlityFunction/validator'
import InputBox from '../../Utils/Utilitycomponents/InputBox'
import TextHeading from '../../Utils/Utilitycomponents/TextHeading'
import Form from './Form'
import { useNavigate } from 'react-router-dom'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import ButtonPrimary from '../../Utils/Utilitycomponents/ButtonPrimary';
const HomePageRight = () => {
 const navigate=useNavigate()
 const [checkedTerms,setCheckedTerms]=useState(false)
 const [userDetails,setUserDetails]=useState({
   email:"",
   password:"",
   confirmPassword:"",
   fullName:"",
   phone:""
 })
 const [validation,setValidation]=useState({
  email:false,
  password:false,
  confirmPassword:false,
  fullName:false,
  phone:false
 })
  const style={
    homePageRight:{
      
      display:"grid",
      placeItems:"center",
      height:"100%",
      width:"50%",
      
    },
    homePageRight__contents:{
      // display:"flex",
      // flexDirection:"column",
      // alignItems: 'center',
      padding:"10% 20%",
      height:"100%",
      width:"100%",
      justifyContent: 'center',
      // backgroundColor:"red"
    }
  }
  const validationHandler=(name)=>{
    let validatingFunction;
    if(name==="email"){
      validatingFunction=emailValidator(userDetails.email)
    }else if(name==="password" || name==="confirmPassword"){
      validatingFunction=passwordValidator(userDetails.password,userDetails.confirmPassword)
    }else if(name==="phone"){
      validatingFunction=phonevalidation(userDetails.phone)
    }else if(name="fullName"){
      validatingFunction=fullNamevalidator(userDetails.fullName)
    }
    setValidation({
      ...validation,
      [name]:validatingFunction
    })
  }
  const formInputhandler=(e)=>{
    const {name,value}=e.target;
    
    setUserDetails({
      ...userDetails,
      [name]:value,
   })
   
  }
  const keyUpHandler=(e)=>{
    const {name}=e.target;
    validationHandler(name)
  }

  const createAccountbtn=()=>{
    let shouldNaviagte=true;
    for(let i in validation){
      if(!validation[i]){
        shouldNaviagte=false
      }
    }
    if(checkedTerms&&shouldNaviagte){
      navigate("/chart")
    }else{
      alert("Please Check all the fields")
    }
  }
  
  return (
    <div className='homePageRight' style={style.homePageRight}>
        <div className='homePageRight__contents' style={style.homePageRight__contents}>
          <TextHeading additionalStyle={{fontSize:"1.2rem",marginBottom:"1rem"}}>Create an account</TextHeading>
          <Form>
            <InputBox formInputhandler={formInputhandler} value={userDetails.email} name="email" type="email" lable="Your email address" validator={validation.email} keyUpHandler={keyUpHandler} />
            <InputBox formInputhandler={formInputhandler} value={userDetails.password} name="password" type="password" lable="Password" validator={validation.password} keyUpHandler={keyUpHandler} />
            <InputBox formInputhandler={formInputhandler} value={userDetails.confirmPassword} name="confirmPassword" type="text" lable="Confirm Your Password" validator={validation.confirmPassword} keyUpHandler={keyUpHandler} />
            <InputBox formInputhandler={formInputhandler} value={userDetails.fullName} name="fullName" type="text" lable="Your full Name" validator={validation.fullName} keyUpHandler={keyUpHandler} />
            <InputBox formInputhandler={formInputhandler} value={userDetails.phone} name="phone" type="text" lable="Your Phone No." validator={validation.phone} keyUpHandler={keyUpHandler} />
          </Form>
          <Checkbox
            icon={<Icon.FiCheck color="#59aee1" size={14} />}
            name="my-input"
            checked={checkedTerms}
            onChange={(value) => {
              setCheckedTerms(value)
            }}
            borderColor="#59aee1"
            style={{ cursor: "pointer"}}
            labelStyle={{ marginLeft: 5, userSelect: "none" }}
            label="I read and agree terms and conditions"
         />
        <ButtonPrimary onClick={createAccountbtn}>
          Create An Account
        </ButtonPrimary>
        </div>
    </div>
  )
}

export default HomePageRight