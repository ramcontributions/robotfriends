import React from "react";

const Scroll = (props) => {
       return (
        <div style={{overflow:"scroll", border : "4px solid green", height :"800px" }}>
            {props.children}
        </div>
       )
}

export default Scroll