
import PropTypes from 'prop-types'

const Gallery = ({ photo }) => {
  return (
    <div className='image' style={{ backgroundImage: `url(${photo.src.landscape})` }}>
          
          <p>{photo.photographer}</p>
          <p>{photo.liked ? "❤️" : "🤍"}</p>
    </div>
  );
}

Gallery.propTypes = {
    photo: PropTypes.object
    
}

export default Gallery
