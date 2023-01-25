import React, { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const geceModuAc = (key, initialValue) => {
  const [value, setValue] = localStorageKullan(key, initialValue);
  const handleGeceModu = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleGeceModu];
};
