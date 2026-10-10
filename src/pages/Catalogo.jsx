import { useState } from 'react';
import { ItemCard } from '../components/ItemCard';
import { mockData } from '../data/mockData';
import '../styles/index.css';

export function Catalogo() {
  const [filtro, setFiltro] = useState('');

  const datosFiltrados = mockData.filter(item => 
    item.title.toLowerCase().includes(filtro.toLowerCase()) || 
    item.author.toLowerCase().includes(filtro.toLowerCase()) ||
    item.genre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="page-catalogo">
      <div className="catalogo-header">
        <h2 className="section-title">Nuestro Catálogo</h2>
        <p className="section-subtitle">Explora nuestra vasta colección de libros y encuentra tu próxima aventura.</p>
      </div>
      
      <div className="filtros-container">
        <input 
          type="text" 
          placeholder="Buscar por título, autor o género..." 
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="search-input premium-input"
        />
      </div>

      <div className="catalogo-grid">
        {datosFiltrados.length > 0 ? (
          datosFiltrados.map((item) => (
            <ItemCard 
              key={item.id}
              title={item.title}
              author={item.author}
              genre={item.genre}
              price={item.price}
              cover={item.cover}
              description={item.description}
            />
          ))
        ) : (
          <div className="no-results-box">
            <span className="icon">🔍</span>
            <p className="no-results-text">No se encontraron libros que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
}
