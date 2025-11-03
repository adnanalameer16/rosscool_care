import './Features.css'

const Features = () => {
    const features = [
        {
            icon: '✓',
            title: 'Authorized Service',
            description: 'Official service partner for major appliance brands with genuine parts warranty'
        },
        {
            icon: '🛠️',
            title: 'Expert Technicians',
            description: 'Certified and experienced technicians with extensive training in appliance repair'
        },
        {
            icon: '⚡',
            title: 'Quick Service',
            description: 'Same-day service available with 24/7 customer support for urgent repairs'
        },
        {
            icon: '🔒',
            title: 'Genuine Parts',
            description: 'Only original manufacturer parts used with warranty on all repairs'
        }
    ]

    return (
        <section className="features" id="about">
            <div className="container">
                <h2 className="section-title">Why Choose RossCool Care?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features