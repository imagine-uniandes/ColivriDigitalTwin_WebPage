import "./filter.style.css"
import {useMemo} from "react";

const Filter = ({setMachineA, setMachineB, setMachineC, machineA, machineB, machineC}) => {
    const options = [...Array(26).keys()]

    const changeData = (machine, setMachine, newVal) => {
        machine.cpu.values = {x: [], y: []}
        machine.memory.values = {x: [], y: []}
        machine.disk.values = {x: [], y: []}
        if (newVal.target.value === 'Choose...') {
            setMachine({
                ...machine, id: -1
            })
            return
        }
        setMachine({...machine, id: newVal.target.value})
    }

    const getOptions = () => {
        return options.map((o, i) => {
            const val = o + 1
            return <option key={i} value={`${val}`}>{val}</option>
        })
    }

    return <div className="Filter">
        <div className="row">
            <div className="col-auto p-4">
                <label className="row"><h6>Máquina A</h6></label>
                {useMemo(() => {
                        return <select
                            className="custom-select row"
                            id="inlineFormCustomSelect"
                            onChange={(e) => {changeData(machineA, setMachineA, e)}
                        } value={machineA.id}>
                            <option selected>Choose...</option>
                            {getOptions()}
                        </select>
                    }, [machineA]
                )
                }
            </div>
            <div className="col-auto p-4">
                <label className="row"><h6>Máquina B</h6></label>
                {useMemo(() => {
                    return <select
                        className="custom-select row"
                        id="inlineFormCustomSelect"
                        onChange={(e) => {changeData(machineB, setMachineB, e)}
                        } value={machineB.id}>
                        <option selected>Choose...</option>
                        {getOptions()}
                    </select>
                }, [machineB])}
            </div>
            <div className="col-auto p-4">
                <label className="row"><h6>Máquina C</h6></label>
                {useMemo(() => {
                    return <select
                        className="custom-select row"
                        onChange={(e) => {changeData(machineC, setMachineC, e)}
                        } value={machineC.id}>
                        <option selected>Choose...</option>
                        {getOptions()}
                    </select>
                }, [machineC])}
            </div>
        </div>
    </div>
}

export default Filter
