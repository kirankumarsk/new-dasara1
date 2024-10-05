import React from "react";
import { Circles } from "react-loader-spinner";


interface Props{
    color?:string
}
const Loader = ({color}:Props) => {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color={color ? color : "#fff"}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
