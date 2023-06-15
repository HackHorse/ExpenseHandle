import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(data => data.value);
    const totalMaximum = Math.max(...dataPointsValue);

return (
<div className="chart">
    {props.dataPoints.map((data, index)=>(
        <ChartBar key={index} value={data.value} maxValue={totalMaximum} label={data.label} />
    ))}
</div>
);
}

export default Chart;