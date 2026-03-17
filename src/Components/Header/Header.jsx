import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
           const position = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(position > 50);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const hamMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className={`headerMenu ${isScrolled ? 'scrolled' : ''}`}>
            <div className='mainLogo'>
                <h2>Paulius</h2>
            </div>
            <ul className={`linkBox ${isMenuOpen ? 'active' : ''}`}>
                <li><NavLink to="/" onClick={closeMenu} className="menuLink" end>Home</NavLink></li>
                <li><NavLink to="/portfolio" onClick={closeMenu} className="menuLink">Portfolio</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu} className="menuLink">Contact</NavLink></li>
            </ul>
            <div onClick={hamMenu} className={`hamMenu ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}