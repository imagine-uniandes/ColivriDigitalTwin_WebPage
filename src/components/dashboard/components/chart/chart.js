import Plot from '../../../../../node_modules/react-plotly.js/react-plotly';

const Chart = ({metric}) => {

    return <div>
        <Plot
            data={
                [
                    {
                        x: [...metric.values.x],
                        y: [...metric.values.y],
                        type: 'scatter',
                        fill: 'tozeroy',
                        marker: {color: metric.color},
                    }
                ]
            }
            layout={{
                title: metric.name,
                autosize: false,
                width: 400,
                height: 350,
                yaxis: {
                    title: "Percentage",
                    range: [0, 100], // Establece el rango del eje y de 0 a 100
                    autorange: false, // Desactiva el ajuste automático del rango
                },
                margin: {
                    l: 80,
                    r: 50,
                    b: 100,
                    t: 100,
                    pad: 4
                },
            }}
            useResizeHandler={true}
        />
    </div>
}

export default Chart;
