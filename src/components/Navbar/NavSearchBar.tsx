import React from 'react'
import Link from 'next/link'

function NavSearchBar() {
  return (
    <div className="NavSearchBar-container">
      <Link href="/">
        <a>
          <img className="nav-logo" src="/assets/Images/logo.png" alt="" />
        </a>
      </Link>

      <input
        className="search_input"
        type="text"
        placeholder="Busca nuestros tipos de café..."
      />
    </div>
  );
}

export default NavSearchBar