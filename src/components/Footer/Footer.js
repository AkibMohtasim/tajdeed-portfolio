import React from 'react';
import './Footer.css';
import { FaInstagram, FaEnvelope, FaFacebookF, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer flex flex-col align-items-center'>
      <div className='flex justify-center align-items-center py-2'>
        <a href="mailto:cee.omorseebtaien.ms@gmail.com" target='_blank' rel="noreferrer"><FaEnvelope style={{ height: '2rem', width: '2rem' }} /></a>

        <a href="https://www.instagram.com/taj_deed_bnw" target='_blank' rel="noreferrer"><FaInstagram style={{ height: '2rem', width: '2rem' }} /></a>

        <a href="https://www.facebook.com/fatir.mohammad.1" target='_blank' rel="noreferrer"><FaFacebookSquare style={{ height: '2rem', width: '2rem' }} /></a>
      </div>
      <div className='text-center'>
        <p className='text-decoration-underline'>cee.omorseebtaien.ms@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;