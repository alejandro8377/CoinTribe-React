import '../styles/index.css';

export function ItemCard({ title, author, genre, price, cover, description }) {
  return (
    <article className="item-card">
      <div className="card-image-wrapper">
        <img src={cover} alt={title} className="item-card-img" />
      </div>
      <div className="item-card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">Por <strong>{author}</strong></p>
        <div className="card-meta">
          <span className="card-badge">{genre}</span>
          <span className="card-price">${price.toFixed(2)}</span>
        </div>
        <p className="card-description">{description}</p>
        <button className="btn-primary card-action">Añadir al carrito</button>
      </div>
    </article>
  );
}
