import React from "react";
import { Dna } from "react-loader-spinner";


interface Props{
    color?:string
}
const Loader = ({color}:Props) => {
  return (
    <div>
      <Dna
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
