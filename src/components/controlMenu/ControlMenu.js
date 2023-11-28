import React, {useState} from 'react';
import VerticalMenu from "./Menu";
import Home from '../Home';
import About from '../About';
import Started from '../Started';
import Development from '../Development';
import Dashboard from "../dashboard/Dashboard";
import Glasses from '../Glasses';

function ControlMenu() {
    const [selectedContent, setSelectedContent] = useState(1);

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
                        {selectedContent === 2 && <About/>}
                        {selectedContent === 3 && <Started/>}
                        {selectedContent === 4 && <Development/>}
                        {selectedContent === 5 && <Dashboard/>}
                        {selectedContent === 6 && <Glasses/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlMenu;
