import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='header'>Contact Information</h1>
      <h3>HappyStore E-Commerce</h3>
      <h4>Address:</h4>
        <p>123 Happy Street, Happyville, HAP 1234, USA</p>

      <h4>Customer Service:</h4>
        <p>Feel free to reach our Customer Service Team 24/7.</p>

        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@happystore.com</p>
      <h4>Business Hours:</h4>
        <p>Monday - Friday: 09:00 AM - 06:00 PM
        Saturday - Sunday: Closed</p>

      <h4>Social Media:</h4>
        <p>Follow us on social media and stay updated!</p>
        <div className='social'>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitter />
        <FaLinkedin />
        </div>
        

      <h4>Return and Exchange Address:</h4>
        <p>HappyStore E-Commerce Returns Department
        456 Returns Lane, Returnsville, HAP 5678, USA</p>

      <h4>Partnerships and Wholesale Inquiries:</h4>
        <p>If you have inquiries regarding partnerships or wholesale, please contact us.</p>

        <h4>Email:</h4> <p>partnerships@happystore.com</p>
        <p>This is just an example and should be customized to reflect your actual contact details and business policies.</p>
    </div>
  );
}

export default Contact;
