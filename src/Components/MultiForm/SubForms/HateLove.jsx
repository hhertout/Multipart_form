import React, { useState } from "react";
import "./SubForm.css";

export default function HateLove({ modifyIndex }) {
    const [formData, setFormData] = useState({
        prefs: {
            love: "",
            hate: "",
        },
    });
    const handleSubmit = e => {
        e.preventDefault();
        modifyIndex(6, formData);
    };
    const handleReturn = () => {
        modifyIndex(4);
    };
    const handleTextArea = (e, pref) => {
        if (pref === "love") {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    love: e.target.value,
                },
            });
        } else if (pref === "hate") {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    hate: e.target.value,
                },
            });
        }
    };

    return (
        <form className="preferences-form" onSubmit={handleSubmit}>
            <p>Parle nous des aliments que tu préfères et que tu détestes !</p>

            <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule</label>
            <textarea
                onChange={e => handleTextArea(e, "love")}
                id="prefered"
                placeholder="Un ou plusieurs, si tu en a"
            ></textarea>

            <label htmlFor="hated">Les aliments que tu n'aimes pas, séparés par une virgule</label>
            <textarea
                onChange={e => handleTextArea(e, "hate")}
                id="hated"
                placeholder="Un ou plusieurs, si tu en a"
            ></textarea>

            <div className="container-nav-btns">
                <button type="button" onClick={handleReturn} className="prev">
                    Précédent
                </button>
                <button>Suivant</button>
            </div>
        </form>
    );
}
