import React from "react";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from "chart.js";

Chart.register(CategoryScale)

const LineChart = ({data}: any) => {
    return (
        <Line data={data}/>
    )
}

export default LineChart;
