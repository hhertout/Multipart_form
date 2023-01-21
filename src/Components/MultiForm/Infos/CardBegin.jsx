import React from "react";
import "./Card.css";

export default function CardBegin({ modifyIndex }) {
    const handleClick = () => {
        modifyIndex(2);
    };

    return (
        <div className="card">
            <h1>Aide-nous à ravir tes papilles</h1>
            <button onClick={handleClick}>Commencer</button>
        </div>
    );
}
