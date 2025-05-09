import { useEffect } from "react";
import PokeballThrow from "../animations/PokeballThrow";

function cssWrapper({ className }) {
  useEffect(() => {
    if (className) {
      document.body.className = className;
    }
    return () => {
      if (className) {
        document.body.className = "";
      }
    };
  }, [className]);

  return (
    <>

    </>
  );
      
}

export default cssWrapper;