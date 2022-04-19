import React from 'react'
import NavButtons from '../components/Navbar/NavButtons'
import NavSearchBar from '../components/Navbar/NavSearchBar'
import NavMenuButton from '../components/Navbar/NavMenuButton'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-wrapper">
            <NavMenuButton />
            <NavSearchBar />
            <NavButtons />
            <Link href="/login">
              <a className="LoginLink" >Login</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar