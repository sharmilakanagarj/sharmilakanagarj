import React from 'react'
import Navabaritem from './Navabaritem';



function Navbar({items}) {
  

  return (
    <div>
        {items.map(e =>{
            return(
                <Navabaritem item = {e}/>
            )
        })}
        </div>
  );
}

export default Navbar