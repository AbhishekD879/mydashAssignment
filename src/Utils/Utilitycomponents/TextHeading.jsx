import React from 'react'

const TextHeading = ({children,additionalStyle}) => {
  const style={
      color:"#606877",
      ...additionalStyle
  }  
  return (
    <h3 style={style}>
      {children}  
    </h3>
  )
}

export default TextHeading