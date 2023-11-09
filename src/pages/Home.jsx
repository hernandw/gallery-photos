import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Gallery from "../components/Gallery";



const Home = () => {

const { photos } = useContext(MyContext);
  return (
    <div className="d-flex flex-wrap container gap-3 mt-5">
      {photos.map((photo) => (
        <Gallery key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default Home
