import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className = "pa2 ba b--green bg-lightest-blue"
                type="search"
                onChange={searchChange}
                placeholder="Search Robots">
            </input>
        </div>
    )
}

export default SearchBox;
