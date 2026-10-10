import React from 'react';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>Envíanos tus comentarios o dudas.</p>
      
      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Tu nombre completo" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="tu@correo.com" 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows="4" 
            placeholder="Escribe tu mensaje aquí..."
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
