import React, { useRef } from "react";
import "./SubForm.css";

export default function FoodStyle({ modifyIndex }) {
    const handleSubmit = e => {
        e.preventDefault();

        const styleData = {
            foodStyle: [],
        };
        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.foodStyle.push(checkbox.value);
            }
        });
        modifyIndex(4, styleData);
    };
    const allCheckboxes = useRef([]);
    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    };
    const handleReturn = () => {
        modifyIndex(2);
    };

    return (
        <form className="checkbox-form" onSubmit={handleSubmit}>
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiple</span>

            <label htmlFor="italian">Italienne</label>
            <input ref={addCheck} type="checkbox" id="italian" value="italian" />

            <label htmlFor="japanese">Italienne</label>
            <input ref={addCheck} type="checkbox" id="japanese" value="japanese" />

            <label htmlFor="french">Italienne</label>
            <input ref={addCheck} type="checkbox" id="french" value="french" />

            <label htmlFor="taï">Italienne</label>
            <input ref={addCheck} type="checkbox" id="taï" value="taï" />

            <label htmlFor="chinese">Italienne</label>
            <input ref={addCheck} type="checkbox" id="chinese" value="chinese" />

            <div className="container-nav-btns">
                <button onClick={handleReturn} type="button" className="prev">
                    Précédent
                </button>
                <button>Suivant</button>
            </div>
        </form>
    );
}
