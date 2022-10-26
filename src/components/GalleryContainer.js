import React from "react";
import { useQuery } from "react-query";

const GalleryContainer = () => {
  const fetchPhotos = async () => {
    const res = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=f9ACcPh3C3hE1ksmF2uJdkLQMVI7zyX9CmO8SS94"
    );
    return res.json();
  };
  const { data } = useQuery("photos", fetchPhotos);
  console.log(data.photos.length);
  return <div>GalleryContainer</div>;
};

export default GalleryContainer;
