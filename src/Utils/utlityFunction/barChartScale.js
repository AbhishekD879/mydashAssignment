import * as d3Scale from "d3-scale"

export const barChartScale=(ele,max,min,cryptodata)=>{
    const {clientWidth,clientHeight}=ele;
    console.log(clientWidth,clientHeight)
    const xScale=d3Scale.scaleBand().domain(cryptodata.map((el)=>el.symbol)).rangeRound([0,parseFloat(clientWidth+40)]).padding(0.1)
    const yScale=d3Scale.scaleLinear().domain([0,max+200]).range([parseFloat(clientHeight-20-30),0])

    return [xScale,yScale,clientHeight]
}