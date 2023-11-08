import Chart from "../chart/chart";
import "./machine.style.css"


const Machine = ({machine}) => {
    const cpu = <div className="col-4">
        <Chart metric={machine.cpu}/>
    </div>
    const memory = <div className="col-4">
        <Chart metric={machine.memory}/>
    </div>
    const disk = <div className="col-4">
        <Chart metric={machine.disk}/>
    </div>

    return <div className="Machine mt-3">
        {
            machine.id === -1 ?
                <div className="DefaultMachine"><h3>Escoge una Máquina...</h3></div>
                :
                <>
                    <h2 className="mt-3">Máquina {machine.id}</h2>
                    <div className="row">{cpu}{memory}{disk}</div>
                </>
        }
    </div>
}

export default Machine
