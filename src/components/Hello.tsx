import { useState } from "react";
import { useQuery } from "react-query";
import { getHello } from "../lib/api";

const Hello = () => {
  const { isSuccess, data } = useQuery("hello", getHello);
  return (
    <p className="text-3xl text-center">
      {isSuccess ? data.message : "Loading ..."}
    </p>
  );
};

export default Hello;
