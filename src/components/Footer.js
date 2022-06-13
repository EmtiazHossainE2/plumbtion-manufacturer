import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-center bg-[#eeeff0]'>
            <footer className="footer p-12   text-base-content container mx-auto">
                <div>
                    <div>
                        <img className='w-[200px] py-2' src="https://i.ibb.co/9GBLfHR/logo1.png" alt="" />
                    </div>
                    <p className='text-lg'>Plumbtion Company  Ltd.<br />Established since 2000</p>
                    <p className=''>378 Main Street London England. <br />info@themerex.net <br /> +1 (44) 123-45-67</p>
                </div>
                <div className='capitalize '>
                    <span className="footer-title text-xl">Company</span>
                    <Link to='/factories' className="link link-hover hover:text-primary text-lg">Our factories </Link>
                    <Link to='/mission' className="link link-hover hover:text-primary text-lg">Mission and strategy</Link>
                    <Link to='/brand' className="link link-hover hover:text-primary text-lg">Our brand</Link>
                    <Link to='/charitable' className="link link-hover hover:text-primary text-lg">Charitable actions</Link>
                </div>
                <div className='capitalize '>
                    <span className="footer-title text-xl">Production</span>
                    <Link to='/technology' className="link link-hover hover:text-primary text-lg">Technology </Link>
                    <Link to='/products' className="link link-hover hover:text-primary text-lg">products </Link>
                    <Link to='/quality' className="link link-hover hover:text-primary text-lg">quality </Link>
                    <Link to='/sales' className="link link-hover hover:text-primary text-lg">Sales geography </Link>
                </div>
                <div className='capitalize '>
                    <span className="footer-title text-xl">For Businesses</span>
                    <Link to='/terms' className="link link-hover hover:text-primary text-lg">Terms of use</Link>
                    <Link to='/policy' className="link link-hover hover:text-primary text-lg">Privacy policy</Link>
                    <Link to='/cookie' className="link link-hover hover:text-primary text-lg">Cookie policy</Link>
                    <Link to='/contact' className="link link-hover hover:text-primary text-lg">Contact us </Link>
                    <div className="grid grid-flow-col gap-4 py-5">
                        <Link to='/' className='hover:text-success cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to='/' className='hover:text-error cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to='/' className='hover:text-[#13bc13] cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#e0e0e1] text-base-content py-5">
                <div>
                    <p>Copyright © {currentYear} - All right reserved by <Link to='/' className='text-primary'>Plumbtion</Link></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;