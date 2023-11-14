import {useEffect, useState} from "react";


const metric = {values: {x: [], y: []}}
const cpu = {...metric, name: "CPU", color: "#18b8c7"}
const memory = {...metric, name: "MEMORY", color: "6F25C9FF"}
const disk = {...metric, name: "DISK", color: "499D1EFF"}

export const useMachines = () => {
    const [machineA, setMachineA] = useState({
        cpu: {...cpu}, memory: {...memory}, disk: {...disk}, id: 1
    });
    const [machineB, setMachineB] = useState({
        cpu: {...cpu}, memory: {...memory}, disk: {...disk}, id: 2
    });
    const [machineC, setMachineC] = useState({
        cpu: {...cpu}, memory: {...memory}, disk: {...disk}, id: 3
    });

    //Implementar GET - hacer await 
    const getMachine = async (id) => {
        try {
            const response = await fetch(`http://172.24.100.110:8080/data/${id}`);
            console.log(response)
            const data = await response.json();
            console.log(data)

            
            return data;
        } catch (error) {
            console.error('Error fetching machine data:', error);
            console.log("ERROR")
            throw error;
        }
    };
    

    const CleanPercentage = (percentage) => {
        return parseInt(percentage.replace("%", ""), 10)
    }

    //Efecto de deslice en gráficas
    const cleanData = (values) => {
        if (values.x.length > 50) {
            values.x = values.x.slice(1, -1)
            values.y = values.y.slice(1, -1)
        }
    }

    const updateMachine = (machine, setMachine) => { 
        return setTimeout(() => { 
            getMachine(machine.id).then((response) => { //Le pega al endpoint
                const now = new Date();
                now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
                const gmt = now.toISOString();
                machine.cpu.values.x.push(gmt) //push porque ya se inicializo la grafica en el filter
                machine.memory.values.x.push(gmt)
                machine.disk.values.x.push(gmt)

                machine.cpu.values.y.push(CleanPercentage(response.CPUUsage))
                machine.memory.values.y.push(CleanPercentage(response.RAMUsage))
                machine.disk.values.y.push(CleanPercentage(response.DiskUsage))

                cleanData(machine.cpu.values)
                cleanData(machine.memory.values)
                cleanData(machine.disk.values)

                setMachine({...machine})//para que react detecte el cambio
            }).catch((e) => {
                const now = new Date();
                now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
                const gmt = now.toISOString();
                machine.cpu.values.x.push(gmt)
                machine.cpu.values.y.push(0)
                machine.memory.values.x.push(gmt)
                machine.memory.values.y.push(0) //grafica en 0s
                machine.disk.values.x.push(gmt)
                machine.disk.values.y.push(0)

                cleanData(machine.cpu.values)
                cleanData(machine.memory.values)
                cleanData(machine.disk.values)

                setMachine({...machine})
                console.error(e)
            })
        }, 1000)// cada segundo se ejecuta
    }

    useEffect(() => {
        const t = updateMachine(machineA, setMachineA)
        return ()=> {
            clearTimeout(t) //esta función la ejecuta cuando se va a destruir (cambio de vista) -> borre petición anterior
        }
    }, [machineA])

    useEffect(() => {
        const t =  updateMachine(machineB, setMachineB)
        return ()=> {
            clearTimeout(t)
        }
    }, [machineB])

    useEffect(() => {
        const t =  updateMachine(machineC, setMachineC)
        return ()=> {
            clearTimeout(t)
        }
    }, [machineC])

    useEffect(() => {
        machineA.cpu.values = {x: [], y: []}
        machineB.cpu.values = {x: [], y: []}
        machineC.cpu.values = {x: [], y: []}

        machineA.memory.values = {x: [], y: []}
        machineB.memory.values = {x: [], y: []}
        machineC.memory.values = {x: [], y: []}

        machineA.disk.values = {x: [], y: []}
        machineB.disk.values = {x: [], y: []}
        machineC.disk.values = {x: [], y: []}
    }, [])

    return {
        machineA, machineB, machineC, setMachineA, setMachineB, setMachineC
    }

}
