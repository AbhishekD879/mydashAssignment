import React from 'react'
import TextHeading from '../../Utils/Utilitycomponents/TextHeading'
import TextPara from '../../Utils/Utilitycomponents/TextPara'
import background from "./background.png"
export const HomePageLeft = () => {
    const style={
      homepageLeft:{
            height:"100%",
            width:"50%",
            backgroundColor: "#f7f7f7",
            backgroundImage:`url(${background})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"85%",
            display:"flex",
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        homepageLeft__contents:{
          marginBottom: "10%",
          display:"flex",
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }
    }
  return (
    <div className='homepageLeft' style={style.homepageLeft}>
            <div style={style.homepageLeft__contents}>
            <TextHeading additionalStyle={{marginBottom:".5rem"}}>
              Choose a date range
            </TextHeading>
            <TextPara additionalStyle={{width:"50%",textAlign:"center"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet odio eget magna lacinia.
            </TextPara>
            </div>
    </div>
  )
}
