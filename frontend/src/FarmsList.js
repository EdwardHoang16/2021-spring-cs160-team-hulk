import React from "react";
import Farm from "./Farm";

export default function FarmsList({ listOfFarms }) {
  if (!listOfFarms) {
    return null;
  }
  let i = 0;
  let res = listOfFarms.map((farm) => {
      // display 3 farm on homepage only
    if (i == 3) {
      return;
    }
    i++;
    return <Farm key={farm.id} details={farm} />;
  });

  return res;
}
