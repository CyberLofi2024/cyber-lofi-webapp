import { getRandomInt } from "@/utils/random";
import { useEffect, useState } from "react";

export default function useRandom(data: any[]) {
  const [value, setValue] = useState(data[0]);

  useEffect(() => {
    console.log(value);
    const random = getRandomInt(0, data.length - 1);
    console.log(random);
    setValue(data[random]);
    console.log(value);
  }, []);

  return { value };
}
