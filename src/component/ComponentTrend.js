import React, { useState, useEffect } from 'react'
import Header from './Header'
import Trend from "./object/TrendArea"
import axios from 'axios'
import Select from 'react-select';

function ComponentTrend() {
    const [data, updateData] = useState({ dataArr: [], dateTimeArr: [] });
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())
    const [dataDP, setDataDP] = useState({
        options: [
            /*{ value: 'Voltage', label: 'Voltage (V)' },
            { value: 'Current', label: 'Current (A)' },
            { value: 'Total_kW', label: 'Total_kW' },
            { value: 'Total_kVA', label: 'Total_kVA' },
            { value: 'Total_kVAr', label: 'Total_kVAr' },
            { value: 'Coolant_Temp', label: 'Coolant_Temp (°C)' },
            { value: 'Plant_Battery', label: 'Plant_Battery (V)' },
            { value: 'Oil_Pressure', label: 'Oil_Pressure (bar)' },
            { value: 'Charge_Altenator', label: 'Charge_Altenator (-)' },
            { value: 'Speed', label: 'Speed (m/s)' },*/
            { value: 'Level_Transmitter', label: 'Level_Transmitter (m)' }/*,
            { value: 'Frequency', label: 'Frequency (Hz)' },*/
        ]
    })
    const [isSearchable, setIsSearchable] = useState(false)
    const [selectoption, setSelectoption] = useState("Level_Transmitter (m)")
    const [selected, setSelected] = useState("Level_Transmitter (m)")
    const [WindowsSize, setWindowsSize] = useState({ col1: "", col2: "", col3: "", col4: "" })


    function windowsScreen() {

        if (window.innerWidth > 1920) {
            setWindowsSize({ col1: "40%", col2: "40%", col3: "40%", col4: "1920px" })
        } else if (window.innerWidth > 1500) {
            setWindowsSize({ col1: "40%", col2: "40%", col3: "15%", col4: "100%" })
        } else if (window.innerWidth > 1000) {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "100%", col4: "100%" })
        }
        else {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "100%", col4: "100%" })
        }

    }

    const formatdate = (parm1) => {
        var dt = new Date(Date.parse(parm1))
        var Datevalue

        if ((dt.getMonth() + 1).toString().length === 2 && (dt.getDate()).toString().length === 1) {

            Datevalue = { DateFormat: dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-0" + dt.getDate(), Datetime: dt }

        } else if ((dt.getMonth() + 1).toString().length === 1 && (dt.getDate()).toString().length === 2) {

            Datevalue = { DateFormat: dt.getFullYear() + "-0" + (dt.getMonth() + 1) + "-" + dt.getDate(), Datetime: dt }

        } else if ((dt.getMonth() + 1).toString().length === 1 && (dt.getDate()).toString().length === 1) {

            Datevalue = { DateFormat: dt.getFullYear() + "-0" + (dt.getMonth() + 1) + "-0" + dt.getDate(), Datetime: dt }

        } else {
            Datevalue = { DateFormat: dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate(), Datetime: dt }
        }

        return Datevalue

    }



    const formatdateToAPI = (parm1) => {
        var dt = new Date(Date.parse(parm1))
        var Datevalue

        Datevalue = new Date(dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate()).toISOString()

        return Datevalue

    }

    const Conv = (cat) => {   //Shift UTC to local time
        let i = []

        cat.forEach(element => {
            let df = new Date(Date.parse(element))
            //let df = new Date(element)
            // console.log(element)
            i.push(df - (df.getTimezoneOffset() * 60000))
        });
        //console.log(i)
        return i

    }

    const onChangeDateFrom = (Datevalue) => {

        setDateFrom(formatdate(Datevalue))

    }

    // const onChangeDateTo = (Datevalue) => {

    //     setDateTo(formatdate(Datevalue))

    // }

    const handleChange = (parm1) => {

        setSelectoption(parm1.label);

        return selectoption

    };

    const onSenddata = (parm1, parm2) => {



        const dataAPI = {
            "fromdate": formatdateToAPI(parm1),
            "data": parm2
        };

        //console.log(dataAPI)

        axios.post('https://klongphasicharoen.in-tech.co.th/api/trend', dataAPI)
            .then(function (response) {
                updateData({ dataArr: response.data.dataArr, dateTimeArr: Conv(response.data.dateTimeArr) })
                setSelected(parm2)
            })
            .catch(function (error) {
               // console.log(error);
            });
    }


    useEffect(() => {
        
        handleChange('Level_Transmitter (m)');
        onSenddata(new Date(), 'Level_Transmitter (m)');
        onChangeDateFrom(new Date());
        windowsScreen();
        window.addEventListener("resize", windowsScreen);
        return () => window.removeEventListener("resize", windowsScreen,);
    }, [])

    return (
        <div>
            <Header />

            <div class="container">

                <div className="container"
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        backgroundColor: "#3D4490",
                        marginTop: "30px",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "10px",
                        border: "3px solid black",
                        padding: "10px"
                    }}>
                    <span>TREND LOGGING</span>
                </div>

                <div class="row"
                    style={{
                        margin: "5px",
                        paddingTop: "10px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly"

                    }}>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        margin: "5px",
                        alignItems: "center",
                        width: WindowsSize.col1

                    }}>
                        <div style={{
                            width: "250px",
                            textAlign: "center",
                            fontWeight: "bold",
                            backgroundColor: "#3D4490",
                            borderRadius: "6px",
                            color: "#FFFFFF"
                        }}>

                            <span class="label">
                                SELECT DATE
                            </span>

                            <input
                                style={{ textAlign: "left" }}
                                type="date"
                                class="form-control"
                                value={dateFrom.DateFormat}
                                onChange={Event => onChangeDateFrom(Event.target.value)}

                            />
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        margin: "5px",
                        alignItems: "center",
                        width: WindowsSize.col3
                    }}>



                        <button onClick={() => onSenddata(dateFrom.Datetime, (selectoption == undefined) ? "Level_Transmitter (m)" : selectoption)}
                            style={{
                                width: "250px",
                                textAlign: "center",
                                fontWeight: "bold",
                                backgroundColor: "#135D9C",
                                borderRadius: "6px",
                                color: "#FFFFFF",
                                padding: "20px"

                            }}>

                            <span class="label">
                                SEARCH
                            </span>


                        </button>


                    </div>
                </div>
            </div>

            <div className="mt-2 mb-5">

                <Trend
                    topic={selected}
                    dataArr={data.dataArr}
                    dateTimeArr={data.dateTimeArr} />
            </div>

        </div>
    )
}

export default ComponentTrend
