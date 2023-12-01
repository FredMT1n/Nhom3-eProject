import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="maps">
                <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.5840387149456!2d-78.429304688371!3d42.073534571100915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2710327acbdf1%3A0xb53c9545e94a498c!2s401%20E%20Greene%20St%2C%20Olean%2C%20NY%2014760%2C%20USA!5e0!3m2!1sen!2s!4v1701072773994!5m2!1sen!2s" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-container">
                <div className="headquarter">
                    <span><h3>Headquarter</h3></span>
                    <ul>
                        <li>Address: 401 E Greene St, New York, NY</li>
                        <li>Email: contact@eyeonic.com</li>
                        <li>Phone: (575) 885-3117</li>
                        <li>Postal Code: 88220</li>
                    </ul>
                </div>
                <div className="branch">
                    <span><h3>Branch</h3></span>
                    <ul>
                        <li>Address: 1702 Kettner Blvd, California, CA</li>
                        <li>Email: contact@eyeonic.com</li>
                        <li>Phone: (619) 230-0889</li>
                        <li>Postal Code: 92101</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;