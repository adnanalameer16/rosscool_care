import './Brands.css'

const Brands = () => {
    const brands = [
        { name: 'GODREJ', status: 'Authorized Partner' },
        { name: 'HAIER', status: 'Authorized Partner' },
        { name: 'SAMSUNG', status: 'Authorized Partner' },
        { name: 'AND MORE', status: 'Service for All Major Brands' }
    ]

    return (
        <section className="brands" id="brands">
            <div className="container">
                <h2 className="section-title">Authorized Service Partner</h2>
                <div className="brands-grid">
                    {brands.map((brand, index) => (
                        <div key={index} className="brand-card">
                            <div className="brand-logo">{brand.name}</div>
                            <p>{brand.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brands