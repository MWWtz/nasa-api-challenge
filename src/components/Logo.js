import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={require("../assets/nasalogo.png")}
        alt="Nasa logo"
        width={150}
      />
    </div>
  );
};

export default Logo;
