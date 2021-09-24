import React from "react";
import FoodItem from "./FoodItem.js"

export default function Farm({details}) {
    const foodList = details.inventory.map(foodItem => {
        return <FoodItem key={foodItem.title} foodItem={foodItem} />
    })

    return (
        <>
            <h2>{details.title}</h2>
            <h4>{details.location}</h4>
            <img src={details.img} />
            <p>{details.description}</p>
            <h2>Featured Produce:</h2>
            {foodList}
        </>
    );
}