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
                <h1>Authorized Home Appliance Service Center</h1>
                <p>Expert service and repair for all home appliances including washing machines, refrigerators, ACs, and more. We are authorized partners for leading brands and provide specialized care for all major makes and models in Idukki & Kattappana.</p>
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