import './Hero.css'

const Hero = () => {
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
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Authorized Appliance Repair Services</h1>
                <p>Expert technicians, genuine parts, and reliable service for all your home appliances. We're authorized service partners for leading brands.</p>
                <div className="cta-buttons">
                    <a 
                        href="#contact" 
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('contact')
                        }}
                    >
                        Book Service
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero