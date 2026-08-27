function GalleryItem({ imagem, alt, tag, favorito, aoAlternarFavorito }) {
  return (
    <div className="gallery__item">
      <img src={imagem} alt={alt} className="gallery__img" />
      <span className="gallery__tag">{tag}</span>
      <button
        type="button"
        className={`gallery__favorite${favorito ? ' gallery__favorite--active' : ''}`}
        onClick={aoAlternarFavorito}
        aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {favorito ? '★' : '☆'}
      </button>
    </div>
  );
}

export default GalleryItem;
