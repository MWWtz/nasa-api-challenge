import { CURIOSITYCAMS, OPPSPIRCAMS } from "./CONSTANTS";

export const getCams = (roverName) => {
  return roverName === "curiosity" ? CURIOSITYCAMS : OPPSPIRCAMS;
};

export const splitarray = (input, spacing) => {
  const output = [];

  for (let i = 0; i < input.length; i += spacing) {
    output[output.length] = input.slice(i, i + spacing);
  }

  return output;
};

export const fetchPhotos = async (
  roverName,
  page = 1,
  camera,
  dateType,
  date,
  solDate
) => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?&page=${page}`;
  url = camera === "all" ? url : url + "&camera=" + camera;
  url =
    dateType === "earth_date"
      ? url + "&earth_date=" + date
      : url + "&sol=" + solDate;
  url += "&api_key=f9ACcPh3C3hE1ksmF2uJdkLQMVI7zyX9CmO8SS94";
  const res = await fetch(url);
  return res.json();
};
