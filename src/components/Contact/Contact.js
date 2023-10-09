import React, {useState} from 'react';
import './index.css'

const Contact = () => {
    const [contactMethod, setContactMethod] = useState('email');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telegram: '',
        whatsapp: '',
        viber: '',
        message: '',
    });

    const handleContactMethodChange = (method) => {
        setContactMethod(method);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="contact-container">
            <h2>Contact us</h2>
            <div className="contact-methods">
                <div
                    className={`contact-method ${contactMethod === 'email' ? 'active' : ''}`}
                    onClick={() => handleContactMethodChange('email')}
                >
                    E-mail
                </div>
                <div
                    className={`contact-method ${contactMethod === 'telegram' ? 'active' : ''}`}
                    onClick={() => handleContactMethodChange('telegram')}
                >
                    Telegram
                </div>
                <div
                    className={`contact-method ${contactMethod === 'whatsapp' ? 'active' : ''}`}
                    onClick={() => handleContactMethodChange('whatsapp')}
                >
                    WhatsApp
                </div>
                <div
                    className={`contact-method ${contactMethod === 'viber' ? 'active' : ''}`}
                    onClick={() => handleContactMethodChange('viber')}
                >
                    Viber
                </div>
            </div>
            <form className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {contactMethod === 'telegram' && (
                    <input
                        type="text"
                        name="telegram"
                        placeholder="Telegram username"
                        value={formData.telegram}
                        onChange={handleInputChange}
                    />
                )}
                {contactMethod === 'whatsapp' && (
                    <input
                        type="text"
                        name="whatsapp"
                        placeholder="WhatsApp number"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                    />
                )}
                {contactMethod === 'viber' && (
                    <input
                        type="text"
                        name="viber"
                        placeholder="Viber number"
                        value={formData.viber}
                        onChange={handleInputChange}
                    />
                )}
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;