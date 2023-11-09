import { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types";




export const MyContext = createContext()

export const MyProvider = ({ children }) => {
    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState("nature")

const getPhotos = async() => {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        headers: {
          Authorization:
            import.meta.env.VITE_PEXELS_API_KEY,
        },
      }
    );
    const data = await response.json();
    setPhotos(data.photos);
    }
    
    useEffect(() => {
     getPhotos()   
    }, [])

    return (
        <MyContext.Provider value={{photos, setPhotos}}>
            {children}
        </MyContext.Provider>
    )
}

MyProvider.propTypes = {
    children: PropTypes.node
}