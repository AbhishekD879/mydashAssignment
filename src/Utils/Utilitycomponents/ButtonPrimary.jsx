import React from 'react'

const ButtonPrimary = ({additionalStyles,children,onClick}) => {
    const style={
        width:"10rem",
        minWidth:"50%",
        height:"2rem",
        backgroundColor:"#33adff",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        color:"white",
        borderRadius: "5px",
        userSelect:"none",
        marginTop: "1.5rem",
        cursor:"pointer",
        // boxShadow:"0 0 10px 10px #33adff",
        ...additionalStyles
    }
  return (
    <div onClick={onClick} className='btn_primary' style={style}>
    {children}
    </div>
  )
}

export default ButtonPrimary