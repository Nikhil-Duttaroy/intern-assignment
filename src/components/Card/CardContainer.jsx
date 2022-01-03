import React from 'react'
import { Card } from './Card.component';

import finance from '../../assets/images/finance.svg'
import health from '../../assets/images/health.svg'
import construction from '../../assets/images/construction.svg'
import wholesale from '../../assets/images/Wholesale.svg'
import education from '../../assets/images/education.svg'
import Energy from '../../assets/images/Energy.svg'
import entertainment from '../../assets/images/entertainment.svg'
import transport from '../../assets/images/transport.svg'

const CardContainer = () => {
const mystyle = {
  display:"grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  justifyItems:"center",
  alignItems:"center",
//   flexDirection:"column",
  rowGap:"1.5rem",
    padding:"1rem",
  marginBottom:"3rem"
};


    return (
      <div className='card-container' style={mystyle}>
        <Card heading={"Finance and Insurance"} img={finance}></Card>
        <Card heading={"Healthcare"} img={health}></Card>
        <Card heading={"Construction"} img={construction}></Card>
        <Card heading={"Wholesale and retail"} img={wholesale}></Card>
        <Card heading={"Education"} img={education}></Card>
        <Card heading={"Energy and resources"} img={Energy}></Card>
        <Card heading={"Entertainment"} img={entertainment}></Card>
        <Card heading={"Transportation"} img={transport}></Card>
      </div>
    );
}

export default CardContainer
