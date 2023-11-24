import React, {useMemo} from 'react';
import "./Dashboard.style.css"
import Machine from './components/machine/machine'
import {useMachines} from "./service";
import Filter from "./components/filter/filter";
import {FormattedMessage} from "react-intl";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Dashboard() {
    const {machineA, machineB, machineC, setMachineA, setMachineB, setMachineC} = useMachines();

    return (
        <div className="container mb-4">
            <div className="row justify-content-center titlePanels text-center">
                <Box sx={{ my: 5 }} />
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                <FormattedMessage id="Paneles" />
            </Typography>
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
