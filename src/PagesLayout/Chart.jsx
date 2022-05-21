import React,{useRef, useState} from 'react'
import { barChartScale } from '../Utils/utlityFunction/barChartScale'
import ButtonPrimary from "./../Utils/Utilitycomponents/ButtonPrimary"
import { maxCrypto,minCrypto } from '../Utils/utlityFunction/cryptoValue'
import getRandom from '../Utils/utlityFunction/getRandom'
import TextHeading from "./../Utils/Utilitycomponents/TextHeading"
import * as d3 from "d3"
const Chart = () => {
  const [crypto,setCrypto]=useState([])
  const dataFetcher=async()=>{
    const {data}=await (await fetch("https://api.coincap.io/v2/rates")).json()
    setCrypto(data)
  }
  
  const svgref=useRef()
  const style={
    chart:{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: "20px",
      backgroundColor:"#f2f3f8 "
    },
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
const chartDrawer= async()=>{
  
  const svg = d3.select(".container__svg")
  // svg.selectAll("*").remove()
  const padding={top:10,right:30,bottom:30,left:50}
  svg.text("")
 await dataFetcher()

   let dta=crypto.sort((a,b)=>d3.descending(a.rateUsd,b.rateUsd))
   dta=getRandom(crypto,20)
   const [xScale,yScale,clientHeight]=barChartScale(svgref.current,maxCrypto(dta),minCrypto(dta),dta)
   const xAxis=svg.append("g").classed("xAxis",true).attr("transform",`translate(${padding.left},${clientHeight-padding.top-30})`).call(d3.axisBottom(xScale))
   const yAxis=svg.append("g").classed("yAxis",true).attr("transform",`translate(${padding.left},${padding.top})`).call(d3.axisLeft(yScale))
  
   const bars=svg
   .selectAll(".bar")
   .data(dta.sort((a,b)=>d3.descending(+a.rateUsd,+b.rateUsd)))
   .enter()
   .append("rect")
   .classed("bar",true)
   .attr("width",xScale.bandwidth())
   .attr("height",(data)=>Math.round(clientHeight-yScale(+data.rateUsd)))
   .attr("x",data=>Math.round(xScale(data.symbol)+50))
   .attr("y",(data)=>Math.round(yScale(+data.rateUsd)-40))
}


  return (
    <div style={style.chart}>
        <TextHeading additionalStyle={{marginBottom:".5rem"}}>
          Crypto Chart
        </TextHeading>
        <div style={style.chartContainer}>
        <svg id='svg_id' ref={svgref} className='container__svg'>

        </svg>
        </div>
    
      <ButtonPrimary onClick={chartDrawer} additionalStyles={{width:"1%"}}>
        Click to genrate chart
      </ButtonPrimary>
    </div>
  )
}

export default Chart