import GalleryItem from './GalleryItem.jsx';
import { galeriaItens } from '../../data/galeria.js';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

function Gallery() {
  const [favoritos, setFavoritos] = useLocalStorage('galeria-favoritos', []);

  function alternarFavorito(id) {
    setFavoritos((atual) => (
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    ));
  }

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <header className="gallery__header">
          <h2 className="gallery__title">Galeria de Capturas</h2>
          <p className="gallery__subtitle">
            Veja fotos reais tiradas com os modos automáticos e inteligência artificial da nossa câmera.
          </p>
        </header>

        <div className="gallery__grid">
          {galeriaItens.map((item) => (
            <GalleryItem
              key={item.id}
              imagem={item.imagem}
              alt={item.alt}
              tag={item.tag}
              favorito={favoritos.includes(item.id)}
              aoAlternarFavorito={() => alternarFavorito(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
