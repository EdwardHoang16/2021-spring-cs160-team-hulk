import React from "react";
import Farm from "./Farm";

export default function FarmsList({listOfFarms}) {
    let res = listOfFarms.map(farm => {
        return <Farm key={farm.id} details={farm} />
    })
    return res
}