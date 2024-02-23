import React from 'react'

export default function Footer() {
    return (
        <footer className="h-full w-screen flex flex-col justify-center items-center pt-5 bg-base-200 text-base-content">
            <div className='h-full w-full flex justify-center ps-5 pe-5 gap-10 max-sm:gap-14 md:gap-[10em] lg:gap-[15em] xl:gap-[20em]'>
                <div className='h-full flex flex-col text-[10px] lg:text-[16px] xl:text-[18px]'>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='h-full flex flex-col text-[10px] lg:text-[16px] xl:text-[18px]'>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='h-full flex flex-col text-[10px] lg:text-[16px] xl:text-[18px]'>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='h-full w-full'>
                <div className='h-full w-[100%] flex justify-center items-center'>
                    <aside>
                        <p className='text-[84px] font-ahlan'>EL NABIL</p>
                    </aside> 
                </div>
            </div>
        </footer>
    )
}
