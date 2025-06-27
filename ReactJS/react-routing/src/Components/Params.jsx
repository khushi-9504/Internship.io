import React from "react";
import { useParams } from "react-router-dom";

const Params = () => {
  let { id } = useParams();

  return (
    <div>
      <h4>URL paramters are: {id}</h4>
    </div>
  );
};

export default Params;
