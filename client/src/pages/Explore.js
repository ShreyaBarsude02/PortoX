import { React, useContext, useEffect } from 'react'
import Card from '../components/Card'
import portfolioContext from '../context/portfolioContext'
import HeaderBar from '../components/HeaderBar'
import './Explore.css'

const Explore = () => {
  const context = useContext(portfolioContext)
  const { portfo, getPortfolios } = context

  useEffect(() => {
    getPortfolios()
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
    <HeaderBar heading={"Explore"} string1={"Showcasing Talent,"} string2={"Elevating Futures:"} string3={"<b>Our Journey, Our Portfolio, Our Success!</b>"} img={"/assets/portoExplorepage.png"}/>
    <div className="explorecontainer">
    <div className="explore">
      {portfo.map((portfolio) => {
        return <Card key={portfolio._id} data={portfolio}/>
      })}
    </div>
    </div>
    </>
  )
}

export default Explore
