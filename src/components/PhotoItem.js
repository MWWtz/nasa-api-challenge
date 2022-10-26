import React from "react";

const PhotoItem = ({ src }) => {
  return (
    <div className="photo">
      <span className="fa fa-star fav"></span>
      <img src={src} alt="rover-img" />
    </div>
  );
};

export default PhotoItem;
