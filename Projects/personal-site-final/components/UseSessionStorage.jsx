import { useState, useEffect } from "react";

const useSessionStorage = (name) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const mainValue = sessionStorage.getItem(name);
    console.log("current value: ", mainValue);

    if (
      sessionStorage.getItem(name) === null ||
      sessionStorage.getItem(name) === "undefined" ||
      sessionStorage.getItem(name) === ""
    ) {
      console.log("setting sessionStorage");
      sessionStorage.setItem(name, "true");
      setValue("true");
    } else {
      console.log("getting sessionStorage: ", sessionStorage.getItem(name));
      setValue(sessionStorage.getItem(name));
    }
  }, [name]);

  return value;
};

export default useSessionStorage;
