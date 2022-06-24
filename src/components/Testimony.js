import React from "react"
import '../stylesheets/Testimony.css'

function Testimnony(props) {
  return(
    <div className="container-testimony">
      <img 
        className="image-testimony"
        src={require(`../images/testimony-${props.image}.png`)}
        alt={props.image} />
      <div className="container-testimony-text">
        <p className="testimony-name">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="testimony-job">
          {props.job} en <strong>{props.company}</strong>
        </p>
        <p className="testimony-text">
          "{props.testimony}"
        </p>
      </div>
    </div>
  )
}

export default Testimnony