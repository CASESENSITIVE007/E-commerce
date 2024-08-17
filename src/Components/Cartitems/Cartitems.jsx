import React, { useContext, useState } from 'react'
import './Cartitems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'react'
import { Link } from 'react-router-dom'

const Cartitems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [message, setMessage] = useState('');

    const handleCheckout = () => {
        const mes = []

        all_product.map(e => {
            if (cartItems[e.id] > 0) {
                mes.push(`Name : ${e.name}\n Price : ${e.new_price} \n Quantity : ${cartItems[e.id]} \n Total : ${e.new_price * cartItems[e.id]}`)
                // sendMessage
            }
        })
        mes.push(`TO Pay : ${getTotalCartAmount()}`)
        console.log(mes)
        
        console.log(message)
        // message.join(mes)
    }


  


    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div >
                        <div className="cartitems-format cartitems-format-main">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    {/* <button><Link to='/payment'> Proceed to Checkout </Link></button> */}
                    <button onClick={handleCheckout} >PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cartitems