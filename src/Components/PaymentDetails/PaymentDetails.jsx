import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


export default function Payment() {
  
  const {getTotalCartAmount} = useContext(ShopContext)
  
  return (
    <div> Hello
    <p>${getTotalCartAmount()}</p>
    
    
    </div>
  )
}


