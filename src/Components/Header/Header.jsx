import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import './HeaderAnim.css'

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navLinks = [
        {name: 'Home', path: '/'},
        {name: 'Portfolio', path: '/portfolio'},
        {name: 'Contact', path: '/contact'}
    ]

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
                <NavLink onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }} to='/' className='textLogo'><h2>Paulius</h2></NavLink>
            </div>
            <ul className={`linkBox ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link, index) => (
                    <li className='navText' key={index}>
                        <NavLink to={link.path} onClick={closeMenu} className={({ isActive }) => isActive ? 'menuLink active' : 'menuLink'}>
                            {link.name.split('').map((char, charIndex) => (
                        <span key={charIndex} style={{ animationDelay: `${charIndex * 0.05}s` }}>
                            {char === ' ' ? ' ' : char}
                        </span>
                    ))}</NavLink></li>
                ))}
            </ul>
            <div onClick={hamMenu} className={`hamMenu ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}