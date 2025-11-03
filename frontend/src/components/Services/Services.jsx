import './Services.css'

const Services = () => {
    const services = [
        {
            icon: '🔧',
            title: 'Refrigerator Repair',
            description: 'Complete refrigerator repair and maintenance services including cooling issues, compressor problems, and electrical faults.'
        },
        {
            icon: '👕',
            title: 'Washing Machine Repair',
            description: 'Expert washing machine repair for all types - front load, top load, semi-automatic, and fully automatic machines.'
        },
        {
            icon: '❄️',
            title: 'AC Installation & Repair',
            description: 'Professional air conditioning installation, repair, and maintenance services for all AC types and brands.'
        },
        {
            icon: '🔥',
            title: 'Microwave Repair',
            description: 'Specialized microwave oven repair services including heating issues, door problems, and electronic controls.'
        },
        {
            icon: '💡',
            title: 'Water Heater Service',
            description: 'Complete water heater and geyser repair services including heating element replacement and thermostat issues.'
        },
        {
            icon: '🏠',
            title: 'Home Appliance Care',
            description: 'Comprehensive home appliance maintenance and repair services with genuine parts and expert technicians.'
        }
    ]

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Our Expert Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services