import { useState, useEffect } from "react";

const useSetSessionStorage = (name, param) => {
  useEffect(() => {
    sessionStorage.setItem(name, param);
  }, []);

  return true;
};

export default useSetSessionStorage;
