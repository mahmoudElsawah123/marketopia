import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import logo from '/public/image/logo2.svg'
const Footer = () => {
  return (
   <div className="bg-secondary">
     <div className="container">
      <div className="footer text-white p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/branding" className="link link-hover">Branding</Link>
          <Link href="/design" className="link link-hover">Design</Link>
          <Link href="/marketing" className="link link-hover">Marketing</Link>
          <Link href="/advertisement" className="link link-hover">Advertisement</Link>
        </nav>
        
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">About us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
          <Link href="/jobs" className="link link-hover">Jobs</Link>
          <Link href="/press-kit" className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms-of-use" className="link link-hover">Terms of use</Link>
          <Link href="/privacy-policy" className="link link-hover">Privacy policy</Link>
          <Link href="/cookie-policy" className="link link-hover">Cookie policy</Link>
        </nav>
      </div>
      <div className="footer bg-secondary text-white border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <Image src={logo} alt="logo" width={200} height={200}/>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href="https://twitter.com">
              <FaTwitter className="fill-current" size={24} />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebook className="fill-current" size={24} />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="fill-current" size={24} />
            </Link>
          </div>
        </nav>
      </div>
    </div>
   </div>
  );
};

export default Footer;
