import { useState } from "react";

const Hello = () => {
  const [state, setState] = useState(0);

  return <p>Hello from Ilyass {state}</p>;
};

export default Hello;
