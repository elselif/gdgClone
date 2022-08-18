import React from 'react'
import { BillIcons } from '../images/Icons/icons';



export default function Navbar() {
    return (
        <nav className={navStyle}>
            <div className={div1Style}>
                <div className="flex">
                    <a className="text-xl" href="#pablo">
                        HSD Club
                    </a>
                </div >

            </div>
            <div className='flex'>
                <div className='flex items-center '>
                    <div className="" id="example-navbar-warning">
                        <ul className={ulStyle}>
                            <li className="nav-item ">
                                <a className={aStyle} href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Speakers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={aStyle} href="#pablo">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='flex mr-5 mx-3 '>
                    <BillIcons />
                </div>
            </div>
        </nav>
    )
}

const navStyle = `
flex
p-0
m-0
py-3
shadow-md
shadow-gray-400
items-center
bg-white-500
mb-3
font-sans
font-medium
tracking-widest
text-sm	
`;
const div1Style = `
container 
flex 
ml-4 
font-medium  
`
const ulStyle = `
flex 
flex-col 
lg:flex-row 
list-none 
text-xgray-dark 
text-md 
mx-1
`

const aStyle = `
focus:bg-xgray-light 
focus:rounded 
hover:bg-xgray-extralight 
hover:rounded 
transparent 
hover:bg-transparent 
duration-300 
px-4 
py-2 
mx-1    
flex items-center  
antialiased	 
font-normal 
leading-snug 
hover:opacity-75"
`