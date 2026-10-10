import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
    alert('Mensaje enviado exitosamente');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>Envíanos tus comentarios o dudas.</p>
      
      <form className="contacto-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo" 
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com" 
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows="4" 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn-submit">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
