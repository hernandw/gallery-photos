import { useContext } from "react";
import { MyContext } from "../context/MyContext";


const Favourites = () => {

  const { photos, setPhotos } = useContext(MyContext);
  const favoritoFiltrado = photos.filter((photo) => photo.liked === true);
  const favorito = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Favourites</h1>

      <div className="d-flex flex-wrap gap-3">
        {favoritoFiltrado.map((photo) => (
          <div
            onClick={() => favorito(photo.id)}
            className="image"
            key={photo.id}
            style={{ backgroundImage: `url(${photo.src.landscape})` }}
          >
            <p>{photo.photographer}</p>
            <p>{photo.liked ? "❤️" : "🤍"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites
