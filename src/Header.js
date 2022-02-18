import React from 'react'

const Header = ({name, title}) => {
  return (
    <nav class="nav nav-boxshadow">
        <a href="/" class="brand my-brand">
            <div class="logo">
                <img src="./images/nav/nav-logo.png" alt="logo"/>
            </div>
            <h1 class="brand-name">
                {name}
            </h1>
            <h1>{title}</h1>
        </a>
        <div class="nav-links">
            <a class="nav-link" href="">Categories</a>
        </div>
        <div class="nav-search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Type to search"/>
        </div>
        <div class="nav-icons">
            <a href="">
                <i class="fa fa-user"></i>
                <span class="nav-icon-text">Login</span>
            </a>
            <a href="">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span class="nav-icon-text">Wishlist</span>
            </a>
            <a href="">
                <i class="fa fa-shopping-cart"></i>
                <span class="nav-icon-text">cart</span>
            </a>
        </div>
    </nav>
  )
}

export default Header