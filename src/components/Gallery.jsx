import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Gallery = () => {
  const { photos, setPhotos } = useContext(MyContext);

  const favorito = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    })
    setPhotos(newPhotos);
  };
  return (
    <div className="d-flex flex-wrap gap-3">
      {photos.map((photo) => (
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
  );
};

Gallery.propTypes = {
  photo: PropTypes.object,
  setPhotos: PropTypes.func,
};

export default Gallery;
