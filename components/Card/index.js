import React from 'react'
import './style.css'
function Card(props) {
    return (
    
  
<div className="column">  
     <div className="row">
        <div className="card">      
             <img  className="card-img" src={props.imgURl} />
             <h4>{props.title} </h4>
            <p>{props.text}</p>   
            <button className="btn readMore">Daha Fazlası</button>
        </div>
    </div>
 </div> 
  
    )
}

export default Card
