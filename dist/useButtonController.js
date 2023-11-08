import { useState } from "react";
const useButtonController = () => {
  const [text, setText] = useState("Hi");
  return {
    text,
    setText
  };
};
export default useButtonController;