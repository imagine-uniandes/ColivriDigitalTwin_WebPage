import React from 'react';
import {FormattedMessage} from "react-intl";
import "./menu.style.css"

const VerticalMenu = ({onSelect, selectedContent}) => {

    const options = ["Inicio","Acerca de", "Empezar", "Desarrollo", "Paneles"]

    return (
        <div className="Menu container-fluid justify-content-center p-5">
            {options.map((o, i)=>{
                return <div key={i+1} className={"row mb-5 MenuRow " + (selectedContent === i+1 ? "activeMenu": "")} onClick={() => onSelect(i+1)}>
                    <span><FormattedMessage id={o}/></span>
                </div>
            })}
        </div>
    );
};


export default VerticalMenu;
