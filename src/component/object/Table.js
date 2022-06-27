import React, { useState, useEffect } from 'react'

function Table(props) {

    const [dataLog, updateData] = useState([{}]);
    const [margintop, setMarginTop] = useState("0px")
    const [maxHeight, setMaxHeight] = useState("0px")
    const [FontSizeHeader, setFontSizeHeader] = useState("16px")
    const [FontSizeData, setFontSizeData] = useState("12px")

    function resize(params1, params2) {

        return (((params1 / 1920) * params2)) + "px"

    }



    const windowsScreen = () => {

        if (window.innerWidth > 1920) {
            setMaxHeight("545px")
            setMarginTop("25px")
        } else if (window.innerWidth > 1500) {
            setMaxHeight(resize(545, window.innerWidth))
            setMarginTop(resize(25, window.innerWidth))
        }
        else {
            setMaxHeight("300px")
            setMarginTop("0px")
        }

        if (window.innerWidth < 900) {
            setFontSizeHeader("10px")
            setFontSizeData("10px")
        } else {
            setFontSizeHeader("16px")
            setFontSizeData("16px")
        }
    }

    const formadate = (parm1) => {

        if (parm1 !== undefined) {
            var dt = new Date(Date.parse(parm1))
            var Datevalue

            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dt);
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);
            Datevalue = `${da}-${mo}-${ye}`
        }


        return Datevalue

    }

    // const formatime = (parm1) => {

    //     if (parm1 !== undefined) {
    //     var dt = new Date(Date.parse(parm1))
    //     var Datevalue
    //         const hour = new Intl.DateTimeFormat('en-GB', { timeStyle: 'medium' }).format(dt);
    //         Datevalue = `${hour}`
    //     }

    //     return Datevalue

    // }

    var formatTime = function (time, format) {
        time = new Date(Date.parse(time))
        time = typeof time == 'number' ? new Date(time) : time;
        format = format || 'yyyy-mm-dd hh:MM:ss';
        var add0 = function (t) { return t < 10 ? '0' + t : t; };
        var year = time.getFullYear();
        var month = time.getMonth() + 1; // 0 indexed
        var date = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var replaceMent = {
            'yyyy': year,
            'mm': add0(month),
            'm': month,
            'dd': add0(date),
            'd': date,
            'hh': add0(hours),
            'h': hours,
            'MM': add0(minutes),
            'M': minutes,
            'ss': add0(seconds),
            's': seconds
        }
        for (var key in replaceMent) {
            format = format.replace(key, replaceMent[key]);
        }
        return format;
    }

    useEffect(() => {

        // formadate(new Date())
        // formatime(new Date())

        const getContent = () => {
            //console.log(props.log)
            updateData(props.log)
        }
        getContent();

        windowsScreen();
        window.addEventListener("resize", windowsScreen);

        return () => {
            updateData([{}])
        }

    });

    return (
        <table className="table table-responsive"
            style={{
                marginTop: margintop,
                border: "2px solid #000000",
                borderRadius: "5px"
            }}>
            <thead
                style={{
                    backgroundColor: "#3D4490",
                    color: "white",
                    display: "table",
                    width: "100%",
                    textAlign: "center",
                    borderRadius: "5px"
                }}>

                <tr style={{
                    fontSize: FontSizeHeader,
                    display: "table",
                    width: "100%",
                }}>
                    <th style={{ width: "20%" }}>
                        <tr >
                            DATE
                        </tr>
                    </th>
                    <th style={{ width: "20%" }}>
                        <tr  >
                            TIME
                        </tr>
                    </th>
                    <th style={{ width: "20%" }}>
                        <tr  >
                            GROUP
                        </tr>
                    </th>
                    <th style={{ width: "20%" }}>
                        <tr >
                            DESCRIPTION
                        </tr>
                    </th>
                    <th style={{ width: "18%" }}>
                        <tr >
                            ACTION
                        </tr>
                    </th>
                </tr>


            </thead>

            <tbody
                style={{
                    fontSize: FontSizeData,
                    display: "block",
                    maxHeight: maxHeight,
                    overflowY: "scroll",
                    textAlign: "center",
                    border: "2px solid #000000",
                    width: "100%",
                }} >

                {dataLog.map(data => (


                    < tr style={{
                        fontWeight: "bold",
                        display: "table",
                        width: "100%",
                        textAlign: "left"
                    }
                    }>

                        <td style={{ width: "20%" }}>

                            <tr style={{}}>{formadate(data.datetime)}</tr>


                        </td>

                        <td style={{ width: "20%" }}>

                            <tr style={{}}>{formatTime(data.datetime, "hh:MM:ss")}</tr>

                        </td>

                        < td style={{ width: "20%" }}>

                            <tr style={{}}>{data.group}</tr>


                        </td>


                        < td style={{ width: "20%" }}>

                            <tr style={{}}>{data.text}</tr>


                        </td>

                        <td style={{ width: "18%" }}>

                            <tr>{data.state}</tr>
                        </td>

                    </tr>


                ))}


            </tbody>
        </table>
    )
}

export default Table
