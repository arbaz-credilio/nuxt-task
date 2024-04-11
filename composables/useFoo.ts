import { useState } from "nuxt/app";

export const useFoo = () => {
  const val = useState("val", () => "hello from useFoo");
  return {
    val,
  };
};
