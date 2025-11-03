import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <a href="#home" className="logo" onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                }}>
                    RossCool Care
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#home" onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('home')
                            }}>Home</a>
                        </li>
                        <li>
                            <a href="#services" onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('services')
                            }}>Services</a>
                        </li>
                        <li>
                            <a href="#brands" onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('brands')
                            }}>Brands</a>
                        </li>
                        <li>
                            <a href="#about" onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('about')
                            }}>About</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('contact')
                            }}>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="contact-info">
                    <a href="tel:+917012659028" className="phone">📞 +91 9447082577</a>
                </div>
            </div>
        </header>
    )
}

export default Header