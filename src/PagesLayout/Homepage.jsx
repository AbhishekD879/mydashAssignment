import React from 'react'
import "./Homepage.css"
const Homepage = ({homepageRight,homepageLeft}) => {
  
  const style={
      homepage:{
          backgroundColor: "#fafbff",
          display:"grid",
          placeItems:"center",
          padding: "20px",
          width:"100vw",
          height:"100vh",
          
      },
      homepage__box:{
          display:"flex",
          alignItems: 'center',
          width:"100%",
          height:"100%",
          backgroundColor:"#f2f3f8 ",
          borderRadius: "5px",
          padding:"2px",
          boxShadow:"0 0 10px lightgrey",
          flexWrap:"wrap"
      }
  }
  return (
    <div style={style.homepage}>
      <div className='homepage__box' style={style.homepage__box}>
        {homepageRight}
        {homepageLeft}
      </div>
    </div>
  )
}

export default Homepage