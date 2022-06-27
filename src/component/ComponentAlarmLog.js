import React, { useEffect, useState } from 'react'
import Header from "./Header"
import Table from "./object/Table"
import axios from 'axios'

function ComponentAlarmLog() {

    const [data, updateData] = useState({ log: [{}] });
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())
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


        //Datevalue = new Date(dt.getFullYear + "/" + (dt.getMonth() + 1) + "/" + dt.getDate()).toUTCString()
        Datevalue = new Date(dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate()).toISOString()


        return Datevalue

    }

    const onChangeDateFrom = (Datevalue) => {

        setDateFrom(formatdate(Datevalue))

    }

    const onChangeDateTo = (Datevalue) => {

        setDateTo(formatdate(Datevalue))

    }

    const onSenddata = (parm1, parm2) => {



        const dataAPI = {
            "fromdate": formatdateToAPI(parm1),
            // "todate": formatdateToAPI(parm2)
        };



        axios.post('https://klongphasicharoen.in-tech.co.th/api/alarmlog', dataAPI)
            .then(function (response) {
                updateData({ log: response.data })
            })
            .catch(function (error) {
                //console.log(error);
            });
    }

    // const eventSource = (url) => {

    //     const subscribe = {
    //         event: 'onopen',
    //         time: new Date()
    //     };

    //     const ws = new WebSocket(url);

    //     ws.onopen = () => {
    //         ws.send(JSON.stringify(subscribe));
    //     };

    //     ws.onmessage = (event) => {

    //         const response = JSON.parse(event.data);
    //         updateData({ log: response.log });


    //     };

    //     ws.onclose = () => {
    //         ws.close();
    //     };


    //     return () => {
    //         ws.close();
    //     };

    // };

    useEffect(() => {

        // eventSource(PathAPI);
        //onSenddata(new Date(),new Date())
        onChangeDateFrom(new Date());
        // onChangeDateTo(new Date());
        windowsScreen();
        onSenddata(new Date(), new Date());
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
                    <span>ALARM LOGGING</span>
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
                        {/* <span class="label font-weight-bold ">
                            FROM
                        </span> */}


                        <div style={{
                            width: "200px",
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
                                style={{ textAlign: "center" }}
                                type="date"
                                class="form-control"
                                value={dateFrom.DateFormat}
                                onChange={Event => onChangeDateFrom(Event.target.value)}

                            />
                        </div>
                    </div>
                    {/* <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        margin: "5px",
                        alignItems: "center",
                        width: WindowsSize.col2
                    }}> */}
                    {/* <span class="label font-weight-bold">
                            TO
                        </span> */}


                    {/* <div style={{
                            width: "200px",
                            textAlign: "center",
                            fontWeight: "bold",
                            backgroundColor: "#3D4490",
                            borderRadius: "6px",
                            color: "#FFFFFF"
                        }}>

                            <span class="label">
                                END DATE
                            </span>

                            <input
                                style={{ textAlign: "center" }}
                                type="date"
                                class="form-control"
                                value={dateTo.DateFormat}
                                onChange={Event => onChangeDateTo(Event.target.value)}

                            />
                        </div>


                    </div> */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        margin: "5px",
                        alignItems: "center",
                        width: WindowsSize.col3
                    }}>



                        <button onClick={() => onSenddata(dateFrom.Datetime)}
                            style={{
                                width: "200px",
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

                <Table log={data.log} />

            </div>
        </div>
    )
}
export default ComponentAlarmLog
