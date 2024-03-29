import React, {useContext, useEffect, useState} from "react";
import {FormattedMessage, useIntl} from "react-intl";
import Form from "react-bootstrap/Form";
import {mockSalesForAllUsers, sale} from "../../data/mockSales";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import {getCurrentWeekNumber, getWeekDay, getWeekNumber} from "../../utils/dateUtils";
import {MONTHS, WEEK_DAYS} from "../../utils/constants";
import AuthContext from "../../context/AuthContext";

type chartType = "bar" | "line";
type timePeriod = "day" | "week" | "month";
type chartDataType = "soldUnits" | "revenue";
export type chartDataObject = {
    [time: string]: number
}

function transformData(inputArray: Array<sale>, interval: timePeriod, dataType: chartDataType, getPrevPeriod: boolean): chartDataObject {
    const initializeResult = () => {
        let result: chartDataObject = {};
        switch (interval) {
            case 'day':
                for (let i = 0; i < 24; i++) {
                    result[i] = 0;
                }
                break;
            case 'week':
                for (let i = 0; i < WEEK_DAYS.length; i++) {
                    result[i] = 0;
                }
                break;
            case 'month':
                for (let i = 0; i < MONTHS.length; i++) {
                    result[i] = 0;
                }
                break;
            default:
                throw new Error('Invalid interval');
        }

        return result;
    }

    const getYesterday = (): Date => {
        let currentDate = new Date()
        let yesterday = new Date(currentDate)
        yesterday.setDate(yesterday.getDate() - 1)

        return yesterday;
    }

    const isItemInInterval = (date: Date, interval: timePeriod, getPrevPeriod: boolean): boolean => {
        const isDateInTheSameDay = (date: Date) => {
            return date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
        }

        const isDateInPrevDay = (date: Date) => {
            return date.getDate() === getYesterday().getDate() && date.getMonth() === getYesterday().getMonth() && date.getFullYear() === getYesterday().getFullYear();
        }

        const isDateInTheSameWeek = (date: Date) => {
            return getWeekNumber(date) === getCurrentWeekNumber() && date.getFullYear() === new Date().getFullYear();
        }

        const isDateInThePrevWeek = (date: Date) => {
            return getWeekNumber(date) === getCurrentWeekNumber() - 1 && date.getFullYear() === new Date().getFullYear();
        }

        const isDateInTheSameYear = (date: Date) => {
            return date.getFullYear() === new Date().getFullYear();
        }

        const isDateInPrevYear = (date: Date) => {
            return date.getFullYear() === new Date().getFullYear() - 1;
        }

        switch (interval) {
            case "day":
                if (getPrevPeriod) {
                    return isDateInPrevDay(date);
                }
                return isDateInTheSameDay(date);
            case "week":
                if (getPrevPeriod) {
                    return isDateInThePrevWeek(date);
                }
                return isDateInTheSameWeek(date);
            case "month":
                if (getPrevPeriod) {
                    return isDateInPrevYear(date);
                }
                return isDateInTheSameYear(date);
            default:
                throw new Error('Invalid interval');
        }
    }

    const formatDateByInterval = (date: Date, interval: timePeriod): string => {
        switch (interval) {
            case 'day':
                return date.getHours().toString();
            case 'week':
                return getWeekDay(date).toString();
            case 'month':
                return date.getMonth().toString();
            default:
                throw new Error('Invalid interval');
        }
    };

    let result: chartDataObject = initializeResult();

    inputArray
        .filter(item => isItemInInterval(item.date, interval, getPrevPeriod))
        .forEach(item => {
            const formattedDate: string = formatDateByInterval(item.date, interval);

            if (!result[formattedDate]) {
                result[formattedDate] = 0;
            }
            if (dataType === "soldUnits") {
                result[formattedDate]++;
            } else {
                result[formattedDate] += item.price;
            }
        });

    return result;
}

function mapChartDataToChartJsData(chartData: chartDataObject, chartDataPrev: chartDataObject | undefined, salesLabel: string, prevSalesLabel: string, dataLabels: Array<string>): any {
    const chartDataTransformed = {
        labels: dataLabels,
        datasets: [
            {
                label: salesLabel,
                data: Object.values(chartData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            }
        ],
    };

    if (chartDataPrev) {
        chartDataTransformed.datasets.push({
            label: prevSalesLabel,
            data: Object.values(chartDataPrev),
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        });
    }

    return chartDataTransformed;
}

const SalesChartWidget = () => {
    const {account} = useContext(AuthContext);

    const [chartType, setChartType] = useState<chartType>("bar");
    const [timePeriod, setTimePeriod] = useState<timePeriod>("day");
    const [chartDataDisplayed, setChartDataDisplayed] = useState<chartDataType>("soldUnits");
    const [displayAdditionalData, setDisplayAdditionalData] = useState<boolean>(false);

    const [salesArray, setSalesArray] = useState<Array<sale>>([]);
    const [chartData, setChartDataArray] = useState<chartDataObject>(transformData(salesArray, timePeriod, chartDataDisplayed, false));
    const [chartDataPrev, setChartDataPrev] = useState<chartDataObject | undefined>(undefined);

    const intl = useIntl();

    useEffect(() => {
        if (account) {
            setSalesArray(mockSalesForAllUsers[account])
        }
    }, [account]);

    useEffect(() => {
        setChartDataArray(transformData(salesArray, timePeriod, chartDataDisplayed, false));
        if (displayAdditionalData) {
            setChartDataPrev(transformData(salesArray, timePeriod, chartDataDisplayed, true));
        } else {
            setChartDataPrev(undefined);
        }
    }, [salesArray, timePeriod, chartDataDisplayed, displayAdditionalData]);

    const chartTypeSelect = (
        <Form className="m-1">
            <Form.Label className="me-1">
                <h6>
                    <FormattedMessage id={"sales.chart.widget.label.chart.type"} defaultMessage={"Chart type:"}/>
                </h6>
            </Form.Label>
            <Form.Select aria-label="Chart type" size="sm" onChange={(event) => {
                setChartType(event.target.value as chartType);
            }}>
                <option value="bar">
                    <FormattedMessage id={"sales.chart.widget.label.bar"} defaultMessage={"Bar"}/>
                </option>
                <option value="line">
                    <FormattedMessage id={"sales.chart.widget.label.line"} defaultMessage={"Line"}/>
                </option>
            </Form.Select>
        </Form>
    );

    const timePeriodSelect = (
        <Form className="m-1">
            <Form.Label className="me-1">
                <h6>
                    <FormattedMessage id={"sales.chart.widget.label.time.period"} defaultMessage={"Time period:"}/>
                </h6>
            </Form.Label>
            <Form.Select aria-label="Time period" size="sm" onChange={(event) => {
                setTimePeriod(event.target.value as timePeriod);
            }}>
                <option value="day">
                    <FormattedMessage id={"sales.chart.widget.label.day"} defaultMessage={"Day"}/>
                </option>
                <option value="week">
                    <FormattedMessage id={"sales.chart.widget.label.week"} defaultMessage={"Week"}/>
                </option>
                <option value="month">
                    <FormattedMessage id={"sales.chart.widget.label.month"} defaultMessage={"Month"}/>
                </option>
            </Form.Select>
        </Form>
    );

    const chartDataSelect = (
        <Form className="m-1">
            <Form.Label className="me-1">
                <h6>
                    <FormattedMessage id={"sales.chart.widget.label.chart.data"} defaultMessage={"Chart data:"}/>
                </h6>
            </Form.Label>
            <Form.Select aria-label="Chart data" size="sm" onChange={(event) => {
                setChartDataDisplayed(event.target.value as chartDataType);
            }}>
                <option value="soldUnits">
                    <FormattedMessage id={"sales.chart.widget.label.sold.units"} defaultMessage={"Sold units"}/>
                </option>
                <option value="revenue">
                    <FormattedMessage id={"sales.chart.widget.label.revenue"} defaultMessage={"Revenue"}/>
                </option>
            </Form.Select>
        </Form>
    );

    const displayAdditionalDataSelect = (
        <Form className="m-1">
            <Form.Label className="me-1">
                <h6>
                    <FormattedMessage
                        id={"sales.chart.widget.label.display.additional"}
                        defaultMessage={"Display additional data:"}
                    />
                </h6>
            </Form.Label>
            <Form.Select aria-label="Display additional data" size="sm" onChange={(event) => {
                setDisplayAdditionalData(event.target.value === "YES");
            }}>
                <option value="NO">
                    <FormattedMessage id={"sales.chart.widget.label.no"} defaultMessage={"No"}/>
                </option>
                <option value="YES">
                    <FormattedMessage id={"sales.chart.widget.label.yes"} defaultMessage={"Yes"}/>
                </option>
            </Form.Select>
        </Form>
    );


    const selectOptionsContainer = (
        <div className="d-flex flex-row align-items-center justify-content-center">
            {chartTypeSelect}
            {timePeriodSelect}
            {chartDataSelect}
            {displayAdditionalDataSelect}
        </div>
    );


    const salesLabel = chartDataDisplayed === "soldUnits"
        ? intl.formatMessage({
            id: "sales.chart.widget.label.sold.units",
            defaultMessage: "Sold units"
        })
        : intl.formatMessage({
            id: "sales.chart.widget.label.revenue",
            defaultMessage: "Revenue"
        });

    const prevSalesLabel = chartDataDisplayed === "soldUnits"
        ? intl.formatMessage({
            id: "sales.chart.widget.label.sold.units.prev",
            defaultMessage: "Sold units (prev)"
        })
        : intl.formatMessage({
            id: "sales.chart.widget.label.revenue.prev",
            defaultMessage: "Revenue (prev)"
        });

    function getLabelsBasedOnInterval(interval: timePeriod): Array<string> {
        switch (interval) {
            case 'day':
                return Array.from(Array(24).keys()).map(item => item.toString());
            case 'week':
                return WEEK_DAYS.map(item => intl.formatMessage(item));
            case 'month':
                return MONTHS.map(item => intl.formatMessage(item));
            default:
                throw new Error('Invalid interval');
        }
    }

    const dataLabels = getLabelsBasedOnInterval(timePeriod);

    return (
        <>
            {selectOptionsContainer}
            {
                chartType === "bar"
                    ? <BarChart
                        data={mapChartDataToChartJsData(chartData, chartDataPrev, salesLabel, prevSalesLabel, dataLabels)}/>
                    : <LineChart
                        data={mapChartDataToChartJsData(chartData, chartDataPrev, salesLabel, prevSalesLabel, dataLabels)}/>
            }
        </>
    );
};

export default SalesChartWidget;
