import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-log0">
                <Link to="/" ><img src={footer_logo} alt="" /></Link>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                   <Link to="https://www.instagram.com/"  target='_blank'> <img src={instagram_icon} alt="" /></Link>
                </div>
                <div className="footer-icons-container">
                    <Link to="https://in.pinterest.com/" target='_blank' ><img src={pintester_icon} alt="" /></Link>
                </div>
                <div className="footer-icons-container">
                    <Link to="https://web.whatsapp.com/" target='_blank'  ><img src={whatsapp_icon} alt="" /></Link>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer