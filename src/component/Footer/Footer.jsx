import React from 'react';

const Footer = () => {
    return (
      
        <footer className="footer p-10 bg-[#2ecc71] text-xs font-medium text-base-content">
  <aside>
  <a className="text-xl flex items-center">
            <img className='w-36' src='https://i.ibb.co/wsKtzTk/mceclip0.png'/>
            <h4 className='text-4xl font-bold'>Edu<span className='text-orange-700'>Care</span></h4>
        </a>
  </aside> 
  <nav>
    <header className="footer-title font-bold text-xl ">Services</header> 
    <a className="link link-hover text-sm">Education news</a> 
    <a className="link link-hover text-md">Education Event</a> 
    <a className="link link-hover text-md">Education Enternmaint</a> 
    <a className="link link-hover text-md">Education Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title font-bold">Company</header> 
    <a className="link link-hover text-sm">About us</a> 
    <a className="link link-hover text-md">Contact</a> 
    <a className="link link-hover text-md">Jobs</a> 
    <a className="link link-hover text-md">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title font-bold">Legal</header> 
    <a className="link link-hover text-md">Terms of use</a> 
    <a className="link link-hover text-md">Privacy policy</a> 
    <a className="link link-hover text-md">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;