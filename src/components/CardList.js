import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const eachCard = robots.map((user, i) => {
        return <Card key = {i} id = {robots[i].id} name = {robots[i].name} userName = {robots[i].userName} email = {robots[i].email}  /> 
    })
    return (
        <div>
                {eachCard}
        </div>
    )
}
export default CardList;