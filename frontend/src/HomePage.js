import React from "react"
import Navbar from "./components/Navbar/Navbar";
import FarmsList from "./FarmsList";

export default function HomePage({listOfFarms}) {
    return (
        <>
            <Navbar />
            <FarmsList listOfFarms = { listOfFarms } />
        </>
    )
}