function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav__links">
                <li>
                    <img className="nav__logo" src="./images/logo.svg" alt="logo urlShortening" />
                </li>
                <li>
                    <a href="#"  className="btn nav__link-btn">Features</a>
                </li>
                <li>
                    <a href="#" className="btn nav__link-btn">Pricing</a>
                </li>
                <li>
                    <a href="#" className="btn nav__link-btn">Resources</a>
                </li>
            </ul>
            <div className="nav__right-side">
                <a href="#" className="btn nav__login-btn">Login</a>
                <a href="#" className="btn nav__signup-btn">Sign Up</a>
            </div>
        </nav>
    )
}

export default NavBar
