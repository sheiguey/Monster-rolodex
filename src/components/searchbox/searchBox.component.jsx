import React from 'react';
import './searchbox.style.css'
export const SearchBox =  (props) => {
    return (
        <div >
           <input className='search' type="search"  placeholder='search monsters' onChange={props.handleSubmit}/>  
        </div>
    );
}

