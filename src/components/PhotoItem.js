import React from "react";

const PhotoItem = ({ id, src }) => {
  return (
    <div className="photo">
      <img src={src} alt="rover-img" />
    </div>
  );
};

export default PhotoItem;
