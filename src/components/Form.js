import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ROVERS, DATES } from "../helpers/CONSTANTS";
import { getCams } from "../helpers/utilFuctions";
import Logo from "./Logo";

const Form = ({ setValues, initialValues, setPage }) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const dateType = watch("dateType");
  const roverName = watch("roverName");
  const onSubmit = (data) => {
    setPage(1);
    setValues({ ...data, page: 1 });
  };
  useEffect(() => {
    reset(initialValues);
  }, []);

  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="d-flex align-items-center justify-content-around w-100">
        <Logo />
        <form className="d-flex " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group m-2">
            <label>Select a Rover </label>
            <select
              className="form-control mr-sm-2 ml-2 mb-2"
              {...register("roverName")}
            >
              {ROVERS.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
            <label>Select a camera </label>
            <select
              className="form-control mr-sm-2  mb-2"
              {...register("camera")}
            >
              {getCams(roverName).map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group m-2">
            <label>Choose type of Date </label>
            <select
              className="form-control mr-sm-2  mb-2"
              {...register("dateType")}
            >
              {DATES.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
            <label>Date </label>
            {dateType === "earth_date" ? (
              <input
                className="form-control mb-2 mr-sm-2"
                type="date"
                placeholder="date"
                {...register("date", { required: true })}
              />
            ) : (
              <input
                className="form-control  mr-sm-2"
                type="number"
                placeholder="solDate"
                {...register("solDate", {
                  required: true,
                  max: 1000,
                  min: 0,
                  maxLength: 4,
                  pattern: /^[1-9]\d*$/i,
                })}
              />
            )}
            <input
              className="btn btn-primary mt-2"
              value="Search"
              type="submit"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Form;
