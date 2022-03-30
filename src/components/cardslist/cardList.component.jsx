import React from "react";
import './cardlist-style.css'
import { Card } from "../card/card.component";

export const CardList = (props)=>{
    return (
    
           
           <div className="card-list"> 
            
            {props.monsters.map(moonster=>{
              return <Card key={moonster.id}  moonster={moonster}  />
            })}
           </div>);
}