import React, {useState} from 'react';
import VerticalMenu from "./Menu";
import Dashboard from "../dashboard/Dashboard";
import Home from '../Home';


function ControlMenu() {
    const [selectedContent, setSelectedContent] = useState(null);

    const handleSelect = (contentNumber) => {
        setSelectedContent(contentNumber);
    };

    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-2">
                        <VerticalMenu onSelect={handleSelect} selectedContent={selectedContent}/>
                    </div>
                    <div className="col-10">
                        {selectedContent === 1 && <Home/>}
                        {selectedContent === 5 && <Dashboard/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlMenu;
