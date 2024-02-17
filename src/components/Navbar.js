import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-button-wrapper">
                <a className="nav-button" href="#about">
                    About
                </a>

                <a className="nav-button" href="#work">
                    Work
                </a>

                <a className="nav-button" href="#projects">
                    Projects
                </a>

                <a className="nav-button" href="#contact">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Navbar