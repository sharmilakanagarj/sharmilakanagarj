import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

function Homepage({name,itemtonav}) {
  return (
    <div>
        {name}
    <Banner/>
    <Navbar items = {itemtonav}/>
    </div>
  )
}

export default Homepage