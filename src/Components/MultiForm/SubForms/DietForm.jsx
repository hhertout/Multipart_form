import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm({modifyIndex}) {
    const [formData, setFormData] = useState({
        dietForm: "nodiet"
    })
    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleRadio = e => {
        setFormData({dietForm : e.target.value})
    };
    
    const handleClick = () => {
        return modifyIndex(3, formData)
    }

    return (
        <form onSubmit={handleSubmit} className="diet-form">
            <p>Quel est ton régime alimentaire ?</p>
            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input onChange={handleRadio} type="radio" name="diet" id="nodiet" value="nodiet" />

            <label htmlFor="homnivorus">Homnivore</label>
            <input onChange={handleRadio} type="radio" name="diet" id="homnivorus" value="homnivorus" />

            <label htmlFor="vegetarian">Végétarien</label>
            <input onChange={handleRadio} type="radio" name="diet" id="vegetarian" value="vegetarian" />

            <label htmlFor="vegan">Végan</label>
            <input onChange={handleRadio} type="radio" name="diet" id="vegan" value="vegan" />

            <button onClick={handleClick}>Suivant</button>
        </form>
    );
}
