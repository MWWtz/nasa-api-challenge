import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import moment from "moment";
import { fetchPhotos, splitarray } from "../helpers/utilFuctions";
import Form from "./Form";
import Pagination from "./Pagination";
import PhotoItem from "./PhotoItem";

const initialState = {
  roverName: "curiosity",
  camera: "all",
  dateType: "earth_date",
  date: moment(new Date()).subtract(10, "days").format("YYYY-MM-DD"),
  solDate: 1000,
};

const ContainerGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [values, setValues] = useState(initialState);
  const [page, setPage] = useState(1);
  const { roverName, camera, dateType, date, solDate } = values;

  const { data, isLoading, isPreviousData, isError } = useQuery(
    ["photos", roverName, page, camera, dateType, date, solDate],
    () => fetchPhotos(roverName, page, camera, dateType, date, solDate),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (!isLoading) {
      const result = splitarray(data?.photos, 6);
      setPhotos(result);
    }
  }, [data, isLoading, page]);

  const Gallery = () => {
    if (isError) return <h1> error!, something happend</h1>;
    if (isLoading) return <h1>Is loading</h1>;
    if (photos.length === 0)
      return <h1>There is no photo for this configuration</h1>;
    if (!isLoading)
      return (
        <div className="gallery row">
          {photos?.map((list, index) => (
            <div className="column" key={index}>
              {list.map(({ id, img_src }) => (
                <PhotoItem src={img_src} key={id} />
              ))}
            </div>
          ))}
        </div>
      );
  };

  return (
    <div>
      <Form
        setValues={setValues}
        initialValues={initialState}
        setPage={setPage}
      />
      <Pagination
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
        photos={photos}
      />
      <Gallery />
    </div>
  );
};

export default ContainerGallery;
