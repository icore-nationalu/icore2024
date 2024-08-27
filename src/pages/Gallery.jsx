import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const loadImage = (imageName) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = `src/assets/images/gallery/${imageName}`; // Adjust the path as needed
      image.onload = () => resolve(image);
      image.onerror = () =>
        reject(new Error(`Failed to load image: ${imageName}`));
    });
  };

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageNames = [
    "001.jpg",
    "002.jpg",
    "003.jpg",
    "004.jpg",
    "005.jpg",
    "006.jpg",
    "007.jpg",
    "008.jpg",
    "009.jpg",
    "010.jpg",
    "011.jpg",
    "012.jpg",
    "013.jpg",
    "014.jpg",
    "015.jpg",
    "016.jpg",
    "017.jpg",
    "018.jpg",
    "019.jpg",
    "020.jpg",
    "021.jpg",
    "022.jpg",
    "023.jpg",
    "024.jpg",
    "025.jpg",
    "026.jpg",
    "027.jpg",
    "028.jpg",
  ]; // Replace with your image names

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await Promise.all(imageNames.map(loadImage));
        setImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <section id="gallery">
        <div className="header-wrapper">
          <h1 className="heading">Gallery</h1>
        </div>
      </section>
      <section className="gallery-container">
        <div className="wrapper">
          <div className="gallery-wrapper">
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>
            ) : (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="12px">
                  {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                      <a href={image.src} target="_blank">
                        <img
                          src={image.src}
                          style={{ width: "100%", display: "block" }}
                        />
                      </a>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
