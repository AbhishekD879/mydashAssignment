import React from 'react'

const Form = ({children}) => {
  const style={
      homePageRight__Form:{
          display:"flex",
          flexDirection: 'column',
          justifyContent: "space-between",
          margin: '.3rem 0',
      }
  }  
  return (
    <div style={style.homePageRight__Form}>
    {children}
    </div>
  )
}

export default Form