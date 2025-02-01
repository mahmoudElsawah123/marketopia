import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import logo from '/public/image/logo2.svg'

const Footer = () => {
  return (
   <div className="bg-secondary dark:bg-black dark:border-t border-white">
     <div className="container">
      <div className="footer text-white p-10 dark:text-white">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/branding" className="link link-hover dark:text-white">Branding</Link>
          <Link href="/design" className="link link-hover dark:text-white">Design</Link>
          <Link href="/marketing" className="link link-hover dark:text-white">Marketing</Link>
          <Link href="/advertisement" className="link link-hover dark:text-white">Advertisement</Link>
        </nav>
        
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover dark:text-white">About us</Link>
          <Link href="/contact" className="link link-hover dark:text-white">Contact</Link>
          <Link href="/jobs" className="link link-hover dark:text-white">Jobs</Link>
          <Link href="/press-kit" className="link link-hover dark:text-white">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms-of-use" className="link link-hover dark:text-white">Terms of use</Link>
          <Link href="/privacy-policy" className="link link-hover dark:text-white">Privacy policy</Link>
          <Link href="/cookie-policy" className="link link-hover dark:text-white">Cookie policy</Link>
        </nav>
      </div>
      <div className="footer bg-secondary dark:bg-black text-white border-base-300 border-t px-10 py-4 dark:text-white">
        <aside className="grid-flow-col items-center">
          <Image src={logo} alt="logo" width={200} height={200}/>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href="https://twitter.com">
              <FaTwitter className="fill-current dark:text-white" size={24} />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebook className="fill-current dark:text-white" size={24} />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin className="fill-current dark:text-white" size={24} />
            </Link>
          </div>
        </nav>
      </div>
    </div>
   </div>
  );
};

export default Footer;
