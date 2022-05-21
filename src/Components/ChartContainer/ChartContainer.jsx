import React from 'react'

const ChartContainer = ({children}) => {
  const style={
      chartContainer:{
       
        width:"100%",
        height:"100%",
        boxShadow: 'lightgrey 0px 0px 10px',
        borderRadius: "5px",
        display:"grid",
        placeItems:"center",
        padding: "20px",
      }
  }
  return (
    <div style={style.chartContainer}>
    {children}
    </div>
  )
}

export default ChartContainer