import React from 'react'

const TextPara = ({children,additionalStyle}) => {
  const styles={
        color:"#cdd4dd",
        ...additionalStyle
    }
  return (
    <p style={styles}>
        {children}
    </p>
  )
}

export default TextPara