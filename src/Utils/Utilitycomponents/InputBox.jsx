import React, { useRef } from 'react'
import TextPara from './TextPara'

const InputBox = ({lable,type,name,validator,value,formInputhandler,keyUpHandler}) => {
    const inputRef=useRef(null)

    const inputStyle={
        outline:"none",
        border:"1px solid grey",
        borderRadius:"5px",
        width:"100%",
        height:"2rem",
        padding: "0 10px",
        
    }
  return (
    <div style={{margin:".5rem 0"}}>
    <TextPara additionalStyle={{marginBottom:".5rem",color:"grey"}}>{lable}</TextPara>
    <input onKeyUp={keyUpHandler} onChange={formInputhandler} ref={inputRef}  className='inputBox__input' style={inputStyle} type={type} name={name} value={value}/>
    {value.length!==0||value===0?(validator?<TextPara additionalStyle={{color:"green",fontSize:".8rem"}}>{`Valid ${name}`}</TextPara>:<TextPara additionalStyle={{color:"red",fontSize:".8rem"}}>{`Invalid ${name}`}</TextPara>):null}
    </div>
  )
}

export default InputBox