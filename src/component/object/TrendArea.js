import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'

function TrendArea(props) {

    const Series_Data = (pram1, pram2) => {

        switch (pram1) {
            /*case 'Voltage (V)':

                return [{
                    name: 'L1_N_VOLTAGE',
                    data: pram2[0]
                }, {
                    name: 'L2_N_VOLTAGE',
                    data: pram2[1]
                }, {
                    name: 'L3_N_VOLTAGE',
                    data: pram2[2]
                }, {
                    name: 'L1_L2_VOLTAGE',
                    data: pram2[3]
                }, {
                    name: 'L2_L3_VOLTAGE',
                    data: pram2[4]
                }, {
                    name: 'L3_L1_VOLTAGE',
                    data: pram2[5]
                }]

            case 'Current (A)':

                return [{
                    name: 'L1_CURRENT',
                    data: pram2[0]
                }, {
                    name: 'L2_CURRENT',
                    data: pram2[1]
                }, {
                    name: 'L3_CURRENT',
                    data: pram2[2]
                }, {
                    name: 'EARTH_CURRENT',
                    data: pram2[3]
                }]


            case 'Total_kW':

                return [{
                    name: 'TOTAL_kW',
                    data: pram2[0]
                }]

            case 'Total_kVA':

                return [{
                    name: 'TOTAL_kVA',
                    data: pram2[0]
                }]

            case 'Total_kVAr':

                return [{
                    name: 'TOTAL_kVAr',
                    data: pram2[0]
                }]

            case 'Coolant_Temp (°C)':

                return [{
                    name: 'COOLANT_TEMP',
                    data: pram2[0]
                }]
                

            case 'Plant_Battery (V)':

                return [{
                    name: 'PLANT_BATTERY',
                    data: pram2[0]
                }]

            case 'Oil_Pressure (bar)':

                return [{
                    name: 'OIL_PRESSURE',
                    data: pram2[0]
                }]

            case 'Charge_Altenator (-)':

                return [{
                    name: 'CHARGE_ALTENATOR',
                    data: pram2[0]
                }]

            case 'Speed (m/s)':

                return [{
                    name: 'SPEED',
                    data: pram2[0]
                }]*/

            case 'Level_Transmitter (m)':

                return [{
                    name: 'LEVEL_TRANSMITTER',
                    data: pram2[0]
                }]

            /*case 'Frequency (Hz)':

                return [{
                    name: 'Frequency',
                    data: pram2[0]
                }]*/


            default:
                return []
        }

    }

    const seriesUpdate = (pram1, pram2) => {

        return {

            series: Series_Data(pram1, pram2)

        }

    }

    const optionsUpdate = (pram1) => {

        return {

            options: {
                title: {
                    text: "",
                    align: 'center',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238'
                    },
                },
                chart: {
                    height: 350,
                    type: 'area',
                    foreColor: '#000',
                    toolbar: {
                        show: true
                    },

                },

                theme: {
                    mode: 'light',
                    palette: 'palette2',
                    monochrome: {
                        enabled: false,
                        color: '#255aee',
                        shadeTo: 'light',
                        shadeIntensity: 1
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                xaxis: {
                    type: 'datetime',
                    categories: pram1,


                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                    y: {
                        formatter: function (val) {
                            return (val).toFixed(2)
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: props.topic,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Roboto',
                        },
                    },
                    // min: 'this.props.MIN',
                    // max: 'this.props.MAX',
                    labels: {
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Roboto',
                        },
                        formatter: function (val) {
                            return (val).toFixed(0)
                        }
                    },
                },
                colors: ['#154360', '#186A3B', '#cc0000', '#cc9900'],
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial',
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        colors: undefined,
                        useSeriesColors: ['#154360', '#186A3B', '#cc0000', '#cc9900','#8C45FF','#3D3E16']
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0
                    },
                    onItemClick: {
                        toggleDataSeries: true
                    },
                    onItemHover: {
                        highlightDataSeries: false
                    },
                }
            }

        }

    }

    return (
        <div id="chart"
            style={{
                marginLeft: "30px",
                marginRight: "30px",
                border: "4px solid #000000",
                borderRadius: "5px"
            }}>

            <ReactApexChart
                options={optionsUpdate(props.dateTimeArr).options}
                series={seriesUpdate(props.topic, props.dataArr).series}
                type="area"
                height={500} />
        </div>
    )


}

export default TrendArea
