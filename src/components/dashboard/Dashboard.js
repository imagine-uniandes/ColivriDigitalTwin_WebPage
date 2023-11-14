import React, {useMemo} from 'react';
import "./Dashboard.style.css"
import Machine from './components/machine/machine'
import {useMachines} from "./service";
import Filter from "./components/filter/filter";
import {FormattedMessage} from "react-intl";

function Dashboard() {
    const {machineA, machineB, machineC, setMachineA, setMachineB, setMachineC} = useMachines();

    return (
        <div className="container mb-4">
            <div className="row justify-content-center titlePanels text-center">
                <h2 className="display-4"><FormattedMessage id="Paneles"/></h2>
            </div>
            <div className="row FilterBox">
                <Filter
                    machineA={machineA}
                    machineB={machineB}
                    machineC={machineC}
                    setMachineA={setMachineA}
                    setMachineB={setMachineB}
                    setMachineC={setMachineC}
                />
            </div>
            <div className="row MachinesBox">
                {useMemo(() => <Machine machine={machineA}/>, [machineA])}
                {useMemo(() => <Machine machine={machineB}/>, [machineB])}
                {useMemo(() => <Machine machine={machineC}/>, [machineC])}
            </div>
        </div>
    );
}

export default Dashboard;
