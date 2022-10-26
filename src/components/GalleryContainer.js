import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PhotoItem from "./PhotoItem";
import "./styles.scss";

function splitarray(input, spacing) {
  var output = [];

  for (var i = 0; i < input.length; i += spacing) {
    output[output.length] = input.slice(i, i + spacing);
  }

  return output;
}

const GalleryContainer = () => {
  const [roverName, setRoverName] = useState("curiosity");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async (roverName, page = 1) => {
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&page=${page}&api_key=f9ACcPh3C3hE1ksmF2uJdkLQMVI7zyX9CmO8SS94`
    );
    return res.json();
  };
  const { data, isLoading } = useQuery(["photos", roverName, page], () =>
    fetchPhotos(roverName)
  );

  useEffect(() => {
    if (!isLoading) {
      const result = splitarray(data?.photos, 5);
      setPhotos(result);
    }
  }, [data, isLoading]);

  return (
    <div className="gallery row">
      {!isLoading ? (
        photos?.map((list, index) => (
          <div className="column" key={index}>
            {list.map(({ id, img_src }) => (
              <PhotoItem src={img_src} key={id} />
            ))}
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default GalleryContainer;
