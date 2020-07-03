import React from "react";

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className="tr bg-light-blue dib br2 pa3 ma2 grow bw2 shadow-5">
            <img alt="robos" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card