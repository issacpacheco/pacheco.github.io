import { useState } from 'react';
import './Contact.css'; // We will create this local css file or put styles inline/global

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Contáctame</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="¿En qué puedo ayudarte?"
                rows="5"
              ></textarea>
            </div>
            
            <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status === 'success' && (
              <div className="success-message">
                ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
