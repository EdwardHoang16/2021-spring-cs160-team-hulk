import React from "react";
import Farm from "./Farm";

export default function FarmsList({listOfFarms}) {
    if (!listOfFarms) {
        return null;
    }
    let res = listOfFarms.map(farm => {
        return <Farm key={farm.id} details={farm} />
    })
    return res
}