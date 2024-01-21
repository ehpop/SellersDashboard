import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from "chart.js";

Chart.register(CategoryScale)

const BarChart = ({data}: any) => {
    return (
        <Bar data={data}/>
    )
}

export default BarChart;
