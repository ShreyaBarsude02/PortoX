import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <>
      <div className="card-body">
        <div className="face face1">
          <div className="heading">
          <span className='Tagbadge'>{props.data.tag}</span>
            <div className="card-heading">
              <h2>{props.data.name}</h2>
              <h4>Eduction: {props.data.education}</h4>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{props.data.description}</p>
            <Link to={`/ViewPortfolioPdf/${props.data._id}`}>
            <button type="button" className="viewButton">View</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
