import React from "react"
import FarmsList from "./FarmsList";

export default function HomePage({ listOfFarms }) {
    return (
        <>
            <FarmsList listOfFarms={listOfFarms} />
        </>
    )
}