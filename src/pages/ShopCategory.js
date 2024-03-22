//shop -->item chane accordingly
import React from 'react'
import './ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
//import  item from '../pages/items/item'
import dropdown_img from '../pages/items/dropdown.png'

export const ShopCategory = (props) => {
   // const {ShopProducts} = useContext(ShopContext)
  return (
    <div className='shop-category'>
    <div className='shopcategory-indexSort'>
        <p>
            <span>Showing 1-12</span> out of 12 products
        </p>
        <div className='shopcategory-sort'>
            Sort by <img src={dropdown_img} alt=""/>
        </div>
    </div>
    {/*<div className='shopcategory-products'>
        {ShopProducts.map((item,i))=>{
            if(props.category===item.category){

            }

        }}
    </div>*/}
    </div>
  )
}
export default ShopCategory
