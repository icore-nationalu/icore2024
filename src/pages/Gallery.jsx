import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as GalleryImages from "../assets/images/gallery/gallery.js";

const Gallery = () => {
  const imgList = Object.values(GalleryImages);

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
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="12px">
                {imgList.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <a href={image} target="_blank">
                      <img
                        src={image}
                        style={{ width: "100%", display: "block" }}
                      />
                    </a>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
