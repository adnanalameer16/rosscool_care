import './Contact.css'

const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Information</h2>
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="contact-icon"></div>
                        <div className="contact-content">
                            <h4>Location:</h4>
                            <p>Ross Cool Care building, near new bus stand kattappana, idukki kerela. Pin: 685508</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="contact-icon"></div>
                        <div className="contact-content">
                            <h4>Phone & Email:</h4>
                            <p>📞 +91 9447082577<br />📞 +91 9446082577<br />📧 rosscoolcare@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="contact-icon"></div>
                        <div className="contact-content">
                            <h4>Working Hours:</h4>
                            <p>Monday - Saturday<br />8:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact