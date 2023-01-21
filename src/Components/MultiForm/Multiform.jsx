import React, { useState } from "react";
import Indicator from "./Indicator/Indicator";
import "./SubForms/SubForm.css";
import "./MultiForm.css";
import CardEnd from "./Infos/CardEnd";
import CardBegin from "./Infos/CardBegin";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";
import HateLove from "./SubForms/HateLove";

export default function Multiform() {
    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {},
    });

    const modifyIndex = (index, data) => {
        setFormIndex(index);
        if (data) {
            const newData = { ...allFormData };
            const firstPropNewData = Object.keys(data)[0];

            newData[firstPropNewData] = data[firstPropNewData];

            setAllFormData(newData);
        }
    };

    const elements = [
        <CardBegin key="1" modifyIndex={modifyIndex} />,
        <DietForm key="2" modifyIndex={modifyIndex} />,
        <FoodStyle key="3" modifyIndex={modifyIndex} />,
        <Allergies key="4" modifyIndex={modifyIndex} />,
        <HateLove key="5" modifyIndex={modifyIndex} />,
        <CardEnd key="6" />,
    ];
    return (
        <div className="container-multiform">
            <Indicator formIndex={formIndex} />

            {elements.map((item, index) => {
                if (index + 1 === formIndex) {
                    return elements[index];
                }
            })}

            {/* {formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
            : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} /> 
            : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} />
            : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} />
            : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} />
            : formIndex === 6 ? <CardEnd />
            : ""} */}
        </div>
    );
}
