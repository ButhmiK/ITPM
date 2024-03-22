/*import React, { useContext } from 'react'
import './Home.css'
import { ShopContent } from '../content/ShopContent'

//import { ShopContent } from '../content/ShopContent'


export default function Home(props) {
  const {ShopProducts}= useContext(ShopContent)
  return (
    <div>
      <div className='Clothing'></div>
      <div className='Clothing-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='clothing-sort'>
          Sort by <img src ='' alt=''/>
        </div>
      </div>
    </div> 
  )
}*/
//<img src={Cover_Photo} alt=''/>
import React from 'react' 
import './Home.css'

import CoverPage from './items/coverp.gif'

export default function Home() {
  return (

    <div className='home'>
  
    <div className='home-coverpage'>
    <p> The Fashion Store try & buy with exclusive discounts .Purchase lot be fashionable .Try and try new trendy styles. Latest new products avilable in this season be hurry and grab yours now. Terms and conditions apply.</p>
       <img src ={CoverPage} alt=''/>
    </div>
    </div>
  )
}
