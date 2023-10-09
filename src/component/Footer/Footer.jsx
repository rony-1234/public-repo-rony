import React from 'react';

const Footer = () => {
    return (
      
        <footer className="footer p-10 bg-[#2ecc71] text-xs font-medium text-base-content">
  <aside>
    <img className='w-36 bg-none' src='https://i.ibb.co/wsKtzTk/mceclip0.png'/>
  </aside> 
  <nav>
    <header className="footer-title font-bold ">Services</header> 
    <a className="link link-hover">Education news</a> 
    <a className="link link-hover">Education Event</a> 
    <a className="link link-hover">Education Enternmaint</a> 
    <a className="link link-hover">Education Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title font-bold">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title font-bold">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;