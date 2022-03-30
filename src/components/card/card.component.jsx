import React from "react";
import './card-style.css'



export const Card = (props)=>{

   return <div className="card-container"> 
            <img alt="monster" src={`https://robohash.org/${props.moonster.id}?set=set2&size=180x180`} />
            <h2>{props.moonster.name}</h2>
            <p>{props.moonster.email}</p>
          </div>
}