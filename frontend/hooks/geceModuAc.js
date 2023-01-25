import React, { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const geceModuAc = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleGeceModu = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleGeceModu];
};
