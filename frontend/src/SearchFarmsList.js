import React from "react";
import Farm from "./Farm";

export default function SearchFarmsList({listOfFarms, searchTerm}) {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    const list = listOfFarms.map(farm => {
        const lowercasedFarmName = farm.farmName.toLowerCase();

        if (lowercasedFarmName.includes(lowercasedSearchTerm)) {
            return <Farm key={farm.id} details={farm} />;
        }
        return null;
    })

    return (
        <>
            {list}
        </>
    );
}