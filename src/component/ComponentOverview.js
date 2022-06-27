import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import MainPump from './object/MainPump'
import CoollingPump from './object/CoollingPump'
import MainWater from './object/MainWater'
import CoollingWater from './object/CoollingWater'
import FlowSensor from './object/FlowSensor'
import BoxStatus from './object/BoxStatus'
import TableOverview from './object/TableOverview'
import LevelSW from './object/LevelSW'
import Popupcommand from './object/Popupcommand'
import { RiBaseStationLine } from "react-icons/ri";

// import axios from 'axios' RiBaseStationLine

//const pathAPITable = 'http://192.168.1.3:1880/sse/test'

// let base64 = require('base-64');


function ComponentOverview() {

    const PathAPI = "wss://klongphasicharoen.in-tech.co.th/api/overview"
    const [data, updateData] = useState({
        status: {
            Pump: ["", ""],
            Group_Pump_In_Auto: '',
            WEB_Control: '',
            Level: {}
        },
        log: [{}]
    });
    const [WindowsSize, setWindowsSize] = useState({ col1: "", col2: "" })
    const clientRef = useRef(null);
    const [waitingToReconnect, setWaitingToReconnect] = useState(null);


    function windowsScreen() {


        if (window.innerWidth > 1920) {
            setWindowsSize({ col1: "60%", col2: "40%", col3: "50%", col4: "1920px", col5: "38%" })
        } else if (window.innerWidth > 1900) {
            setWindowsSize({ col1: "60%", col2: "40%", col3: "50%", col4: "100%", col5: "38%" })
        } else if (window.innerWidth > 1000) {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "25%", col4: "100%", col5: "100%" })
        }
        else {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "100%", col4: "100%", col5: "100%" })
        }



    }


    useEffect(() => {


        const subscribe = {
            event: 'onopen',
            time: new Date()
        };

        if (waitingToReconnect) {
            return;
        }

        // Only set up the websocket once
        if (!clientRef.current) {
            const client = new WebSocket(PathAPI);
            clientRef.current = client;

            window.client = client;

            client.onerror = (e) => console.error(e);

            client.onopen = () => {
                // setIsOpen(true);
                //console.log('ws opened');
                client.send(JSON.stringify(subscribe));
            };

            client.onclose = () => {

                if (clientRef.current) {
                    // Connection failed
                    // console.log('ws closed by server');
                } else {
                    // Cleanup initiated from app side, can return here, to not attempt a reconnect
                    // console.log('ws closed by app component unmount');
                    return;
                }

                if (waitingToReconnect) {
                    return;
                };

                // Parse event code and log
                // setIsOpen(false);
                // console.log('ws closed');

                // Setting this will trigger a re-run of the effect,
                // cleaning up the current websocket, but not setting
                // up a new one right away
                setWaitingToReconnect(true);

                // This will trigger another re-run, and because it is false,
                // the socket will be set up again
                setTimeout(() => setWaitingToReconnect(null), 5000);
            };

            client.onmessage = message => {
                // console.log('received message', message);
                // addMessage(`received '${message.data}'`);
                const response = JSON.parse(message.data);
                //console.log(response)
                updateData({ status: response.status, log: response.log });
                //console.log(dataLog)
                // ws.close();
            };

            windowsScreen();
            window.addEventListener("resize", windowsScreen);
            return () => {


                window.removeEventListener("resize", windowsScreen);
                //console.log('Cleanup');
                // Dereference, so it will set up next time
                clientRef.current = null;

                client.close();
            }
        }

    }, [waitingToReconnect]);

    // const eventSource = (url) => {

    //     //const [dataLog, updateData] = useState({ status: {}, log: [{}] });

    //     const subscribe = {
    //         event: currencyPair,
    //         time: new Date()
    //     };

    //     const ws = new WebSocket(url);

    //     ws.onopen = () => {
    //         ws.send(JSON.stringify(subscribe));
    //     };

    //     ws.onmessage = (event) => {

    //         const response = JSON.parse(event.data);
    //         //console.log(response)
    //         updateData({ status: response.status, log: response.log });
    //         //console.log(dataLog)


    //     };

    //     ws.onclose = function (e) {
    //         console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
    //         setTimeout(function () {
    //             eventSource(PathAPI);
    //         }, 100);

    //     };


    //     // ws.onclose = () => {
    //     //     console.log("close")
    //     //      ws.close();
    //     //     // setTimeout(eventSource(PathAPI), 1000);

    //     // };

    //     return () => {
    //         ws.close();
    //     };
    // }

    // useEffect(() => {

    //     eventSource(PathAPI)
    //     windowsScreen();
    //     window.addEventListener("resize", windowsScreen);
    //     // return () => {
    //     //     window.removeEventListener("close", () => {})
    //     //   }
    //     return () => window.removeEventListener("resize", windowsScreen,);

    // }, [])

    // if (!data) {
    //     return <div />;
    // }


    return (

        <>

            <Header />
            {/* <h1> {window.innerWidth}</h1> */}
            <div className="container-fluid " style={{ width: WindowsSize.col4 }}>

                <div className="row d-flex justify-content-center">

                    <div className="" style={{ width: WindowsSize.col1 }}>

                        <div style={{ margin: "15px" }}>
                            <TableOverview log={data.log} />
                        </div>
                        <div style={{ margin: "10px" }} >
                            <div style={{
                                padding: '2px',
                                width: "100%",
                                borderRadius: "5px",
                                backgroundColor: "#FFFFFF",
                                border: "4px solid #135D9C",
                            }}>
                                <div style={{
                                    textAlign: 'center',
                                    fontWeight: "bold",
                                    borderRadius: "5px",
                                    width: "100%",
                                }}>
                                    <div class="row d-flex justify-content-around" style={{ marginLeft: "5px", marginRight: "5px" }} >

                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-2 "
                                            style={{
                                                backgroundColor: '#83C3FF',
                                                borderRadius: "5px",
                                                border: "4px solid #135D9C",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                width: "100%"

                                            }}>


                                            <div className="data-col4">RADAR LEVEL</div>
                                            <div className="data-col5">{data.status.Level.Value}</div>
                                            <div className="data-col6" style={{ backgroundColor: "#FFFFFF" }}>m</div>

                                        </div>


                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-2 "
                                            style={{
                                                backgroundColor: '#83C3FF',
                                                borderRadius: "5px",
                                                border: "4px solid #135D9C",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                width: "100%"
                                            }}>

                                            <div className="data-col4">AUTO MODE STATUS</div>
                                            <div className="data-col7">{data.status.Group_Pump_In_Auto}</div>

                                        </div>
                                        {/* <div className=""
                                            style={{
                                                fontSize: "18px",
                                                fontWeight:"bold",
                                                // color: "#000000",
                                                // borderRadius: "100%",
                                                // background: "#73AD21",
                                                // padding: "20px",
                                                }}>
                                            <RiBaseStationLine />
                                        </div> */}
                                    </div>
                                </div>

                                <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" className="img-fluid">

                                    <g id="Desktop - 6">
                                        <MainWater
                                            LevelMainWater={data.status.Level.Status}
                                        />
                                        <g id="Structure">
                                            <rect id="Rectangle 25" x="1843.3" y="41.7165" width="28.6959" height="991.423" fill="#594205" stroke="black" stroke-width="4" />
                                            <rect id="Rectangle 28" x="48" y="41.7165" width="28.6959" height="988.851" fill="#594205" stroke="black" stroke-width="4" />
                                            <rect id="Rectangle 26" x="48" y="57.08" width="23.08" height="1824" rx="7" transform="rotate(-90 48 57.08)" fill="#594205" stroke="black" stroke-width="4" />
                                            <rect id="Rectangle 23" x="48" y="1046" width="28.0948" height="1824" rx="6" transform="rotate(-90 48 1046)" fill="#594205" stroke="black" stroke-width="4" />
                                            <rect id="Rectangle 89" x="49.8525" y="49.2366" width="25.0411" height="31.6004" fill="#594205" />
                                            <rect id="Rectangle 92" x="49.8525" y="1000.12" width="25.0411" height="31.6004" fill="#594205" />
                                            <rect id="Rectangle 94" x="1845.11" y="1012.57" width="25.0411" height="20.1093" fill="#594205" />
                                            <rect id="Rectangle 95" x="1845.11" y="46.3638" width="25.0411" height="31.6004" fill="#594205" />
                                        </g>
                                        <g id="Group 106">
                                            <rect id="Rectangle 76" x="102.824" y="59.9545" width="14.4468" height="957.199" fill="black" />
                                            <g id="Group 70">
                                                <rect id="Rectangle 81" x="102.475" y="705.839" width="6.01787" height="95.1155" transform="rotate(-90 102.475 705.839)" fill="black" />
                                                <path id="C1" d="M226.653 707.782C226.231 711.391 224.895 714.18 222.645 716.149C220.411 718.102 217.434 719.079 213.716 719.079C209.684 719.079 206.45 717.634 204.012 714.743C201.591 711.852 200.38 707.985 200.38 703.141V699.86C200.38 696.688 200.942 693.899 202.067 691.493C203.208 689.087 204.817 687.243 206.895 685.962C208.973 684.665 211.38 684.016 214.114 684.016C217.739 684.016 220.645 685.032 222.833 687.063C225.02 689.079 226.294 691.876 226.653 695.454H222.13C221.739 692.735 220.887 690.766 219.575 689.548C218.278 688.329 216.458 687.719 214.114 687.719C211.239 687.719 208.981 688.782 207.341 690.907C205.716 693.032 204.903 696.055 204.903 699.977V703.282C204.903 706.985 205.677 709.93 207.223 712.118C208.77 714.305 210.934 715.399 213.716 715.399C216.216 715.399 218.13 714.837 219.458 713.712C220.802 712.571 221.692 710.594 222.13 707.782H226.653ZM245.942 718.61H241.583V689.712L232.841 692.923V688.985L245.262 684.321H245.942V718.61Z" fill="black" />
                                            </g>
                                            <g id="Group 69">
                                                <rect id="Rectangle 82" x="102.475" y="830.872" width="6.01787" height="95.1155" transform="rotate(-90 102.475 830.872)" fill="black" />
                                                <path id="LL" d="M206.075 840.966H222.247V844.646H201.552V810.521H206.075V840.966ZM231.903 840.966H248.075V844.646H227.38V810.521H231.903V840.966Z" fill="black" />
                                            </g>
                                            <g id="Group 71">
                                                <rect id="Rectangle 80" x="102.475" y="578.234" width="6.01787" height="95.1155" transform="rotate(-90 102.475 578.234)" fill="black" />
                                                <path id="C2" d="M226.653 581.747C226.231 585.356 224.895 588.145 222.645 590.114C220.411 592.067 217.434 593.043 213.716 593.043C209.684 593.043 206.45 591.598 204.012 588.708C201.591 585.817 200.38 581.95 200.38 577.106V573.825C200.38 570.653 200.942 567.864 202.067 565.458C203.208 563.051 204.817 561.208 206.895 559.926C208.973 558.629 211.38 557.981 214.114 557.981C217.739 557.981 220.645 558.997 222.833 561.028C225.02 563.043 226.294 565.84 226.653 569.418H222.13C221.739 566.7 220.887 564.731 219.575 563.512C218.278 562.293 216.458 561.684 214.114 561.684C211.239 561.684 208.981 562.747 207.341 564.872C205.716 566.997 204.903 570.02 204.903 573.942V577.247C204.903 580.95 205.677 583.895 207.223 586.083C208.77 588.27 210.934 589.364 213.716 589.364C216.216 589.364 218.13 588.801 219.458 587.676C220.802 586.536 221.692 584.559 222.13 581.747H226.653ZM254.052 592.575H231.692V589.458L243.505 576.333C245.255 574.348 246.458 572.739 247.114 571.504C247.786 570.254 248.122 568.965 248.122 567.637C248.122 565.856 247.583 564.395 246.505 563.254C245.427 562.114 243.989 561.543 242.192 561.543C240.036 561.543 238.356 562.161 237.153 563.395C235.966 564.614 235.372 566.317 235.372 568.504H231.036C231.036 565.364 232.044 562.825 234.059 560.887C236.091 558.95 238.802 557.981 242.192 557.981C245.364 557.981 247.872 558.817 249.716 560.489C251.559 562.145 252.481 564.356 252.481 567.122C252.481 570.481 250.341 574.481 246.059 579.122L236.919 589.036H254.052V592.575Z" fill="black" />
                                            </g>
                                            <g id="Group 72">
                                                <rect id="Rectangle 78" x="105.447" y="453.202" width="6.01787" height="92.1431" transform="rotate(-90 105.447 453.202)" fill="black" />
                                                <path id="C3" d="M226.653 455.711C226.231 459.321 224.895 462.11 222.645 464.078C220.411 466.031 217.434 467.008 213.716 467.008C209.684 467.008 206.45 465.563 204.012 462.672C201.591 459.781 200.38 455.914 200.38 451.071V447.789C200.38 444.617 200.942 441.828 202.067 439.422C203.208 437.016 204.817 435.172 206.895 433.891C208.973 432.594 211.38 431.946 214.114 431.946C217.739 431.946 220.645 432.961 222.833 434.992C225.02 437.008 226.294 439.805 226.653 443.383H222.13C221.739 440.664 220.887 438.696 219.575 437.477C218.278 436.258 216.458 435.649 214.114 435.649C211.239 435.649 208.981 436.711 207.341 438.836C205.716 440.961 204.903 443.985 204.903 447.906V451.211C204.903 454.914 205.677 457.86 207.223 460.047C208.77 462.235 210.934 463.328 213.716 463.328C216.216 463.328 218.13 462.766 219.458 461.641C220.802 460.5 221.692 458.524 222.13 455.711H226.653ZM237.997 447.367H241.255C243.302 447.336 244.911 446.797 246.083 445.75C247.255 444.703 247.841 443.289 247.841 441.508C247.841 437.508 245.848 435.508 241.864 435.508C239.989 435.508 238.489 436.047 237.364 437.125C236.255 438.188 235.7 439.602 235.7 441.367H231.364C231.364 438.664 232.348 436.422 234.317 434.641C236.302 432.844 238.817 431.946 241.864 431.946C245.083 431.946 247.606 432.797 249.434 434.5C251.262 436.203 252.177 438.571 252.177 441.602C252.177 443.086 251.692 444.524 250.723 445.914C249.77 447.305 248.466 448.344 246.809 449.031C248.684 449.625 250.13 450.61 251.145 451.985C252.177 453.36 252.692 455.039 252.692 457.024C252.692 460.086 251.692 462.516 249.692 464.313C247.692 466.11 245.091 467.008 241.887 467.008C238.684 467.008 236.075 466.141 234.059 464.406C232.059 462.672 231.059 460.383 231.059 457.539H235.419C235.419 459.336 236.005 460.774 237.177 461.852C238.348 462.93 239.919 463.469 241.887 463.469C243.981 463.469 245.583 462.922 246.692 461.828C247.802 460.735 248.356 459.164 248.356 457.117C248.356 455.133 247.747 453.61 246.528 452.547C245.309 451.485 243.552 450.938 241.255 450.906H237.997V447.367Z" fill="black" />
                                            </g>
                                            <g id="Group 73">
                                                <rect id="Rectangle 79" x="105.447" y="328.17" width="6.01787" height="92.1431" transform="rotate(-90 105.447 328.17)" fill="black" />
                                                <path id="C4" d="M226.653 331.248C226.231 334.857 224.895 337.646 222.645 339.615C220.411 341.568 217.434 342.545 213.716 342.545C209.684 342.545 206.45 341.099 204.012 338.209C201.591 335.318 200.38 331.451 200.38 326.607V323.326C200.38 320.154 200.942 317.365 202.067 314.959C203.208 312.553 204.817 310.709 206.895 309.428C208.973 308.131 211.38 307.482 214.114 307.482C217.739 307.482 220.645 308.498 222.833 310.529C225.02 312.545 226.294 315.342 226.653 318.92H222.13C221.739 316.201 220.887 314.232 219.575 313.014C218.278 311.795 216.458 311.185 214.114 311.185C211.239 311.185 208.981 312.248 207.341 314.373C205.716 316.498 204.903 319.521 204.903 323.443V326.748C204.903 330.451 205.677 333.396 207.223 335.584C208.77 337.771 210.934 338.865 213.716 338.865C216.216 338.865 218.13 338.303 219.458 337.178C220.802 336.037 221.692 334.06 222.13 331.248H226.653ZM249.997 330.615H254.731V334.154H249.997V342.076H245.637V334.154H230.098V331.599L245.38 307.951H249.997V330.615ZM235.02 330.615H245.637V313.881L245.122 314.818L235.02 330.615Z" fill="black" />
                                            </g>
                                            <g id="Group 74">
                                                <rect id="Rectangle 77" x="105.447" y="203.137" width="6.01787" height="92.1431" transform="rotate(-90 105.447 203.137)" fill="black" />
                                                <path id="HH" d="M227.778 217.041H223.255V201.267H206.052V217.041H201.552V182.916H206.052V197.587H223.255V182.916H227.778V217.041ZM261.997 217.041H257.473V201.267H240.27V217.041H235.77V182.916H240.27V197.587H257.473V182.916H261.997V217.041Z" fill="black" />
                                            </g>
                                        </g>
                                        <g id="NAME PUMP">
                                            <path id="P1" d="M446.843 138.684V152.044H442.343V117.919H454.928C458.663 117.919 461.585 118.872 463.694 120.778C465.819 122.684 466.882 125.208 466.882 128.348C466.882 131.661 465.843 134.216 463.764 136.012C461.702 137.794 458.741 138.684 454.882 138.684H446.843ZM446.843 135.005H454.928C457.335 135.005 459.178 134.442 460.46 133.317C461.741 132.176 462.382 130.536 462.382 128.395C462.382 126.364 461.741 124.739 460.46 123.52C459.178 122.301 457.421 121.669 455.186 121.622H446.843V135.005ZM485.749 152.044H481.389V123.145L472.647 126.356V122.419L485.069 117.755H485.749V152.044Z" fill="black" />
                                            <path id="P2" d="M828.238 138.684V152.044H823.738V117.919H836.324C840.058 117.919 842.98 118.872 845.089 120.778C847.214 122.684 848.277 125.208 848.277 128.348C848.277 131.661 847.238 134.216 845.16 136.012C843.097 137.794 840.136 138.684 836.277 138.684H828.238ZM828.238 135.005H836.324C838.73 135.005 840.574 134.442 841.855 133.317C843.136 132.176 843.777 130.536 843.777 128.395C843.777 126.364 843.136 124.739 841.855 123.52C840.574 122.301 838.816 121.669 836.582 121.622H828.238V135.005ZM875.253 152.044H852.894V148.926L864.707 135.801C866.457 133.817 867.66 132.208 868.316 130.973C868.988 129.723 869.324 128.434 869.324 127.106C869.324 125.325 868.785 123.864 867.707 122.723C866.628 121.583 865.191 121.012 863.394 121.012C861.238 121.012 859.558 121.63 858.355 122.864C857.168 124.083 856.574 125.786 856.574 127.973H852.238C852.238 124.833 853.246 122.294 855.261 120.356C857.293 118.419 860.003 117.45 863.394 117.45C866.566 117.45 869.074 118.286 870.918 119.958C872.761 121.614 873.683 123.825 873.683 126.591C873.683 129.95 871.543 133.95 867.261 138.591L858.121 148.505H875.253V152.044Z" fill="black" />
                                        </g>
                                        <g id="BODY PUMP">
                                            <g id="Group 85_2">
                                                <rect id="Rectangle 143_2" x="335.938" y="322.178" width="39.5854" height="694.625" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 144_2" x="567.783" y="322.178" width="39.5854" height="694.625" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 152_2" x="380.524" y="162.705" width="182.259" height="15.5772" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 147_2" x="356.698" y="283.44" width="35.451" height="36.4497" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <path id="Rectangle 150_5" d="M366.821 264.703L366.843 264.682L366.865 264.66L381.689 249.702H392.149V281.332H356.698V274.431L366.821 264.703Z" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <path id="Rectangle 151_3" d="M586.591 276.326L586.59 282.678L551.266 282.31L551.21 252.355L565.163 252.509L573.529 261.046L586.591 276.326Z" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 148_2" x="551.248" y="283.44" width="35.451" height="36.4497" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 146_2" x="375.96" y="324.89" width="16.1886" height="579.152" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 153_2" x="551.248" y="324.89" width="16.1886" height="579.152" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                            </g>
                                            <g id="Group 85_3">
                                                <rect id="Rectangle 143_3" x="717.868" y="322.178" width="39.5139" height="694.625" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 144_3" x="949.34" y="322.178" width="39.5139" height="694.625" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 152_3" x="762.382" y="162.705" width="181.958" height="15.5772" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 147_3" x="738.594" y="283.44" width="35.3861" height="36.4497" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <path id="Rectangle 150_6" d="M748.701 264.702L748.723 264.68L748.744 264.659L763.544 249.702H773.98V281.332H738.594V274.43L748.701 264.702Z" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <path id="Rectangle 151_4" d="M968.111 276.325L968.11 282.678L932.851 282.311L932.795 252.355L946.718 252.509L955.069 261.045L968.111 276.325Z" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 148_3" x="932.832" y="283.44" width="35.3861" height="36.4497" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 146_3" x="757.826" y="324.89" width="16.1546" height="579.152" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                                <rect id="Rectangle 153_3" x="932.832" y="324.89" width="16.1546" height="579.152" fill="#C4C4C4" stroke="black" stroke-width="5" />
                                            </g>
                                        </g>
                                        <g id="Group 108">
                                            <g id="Group 100">
                                                <path id="Vector 1" d="M391.76 178.761V248.21" stroke="black" stroke-width="6" />
                                                <path id="Vector 2" d="M551.637 178.761V248.21" stroke="black" stroke-width="6" />
                                            </g>
                                            <g id="Group 100_2">
                                                <path id="Vector 1_2" d="M773.595 178.761V248.21" stroke="black" stroke-width="6" />
                                                <path id="Vector 2_2" d="M933.217 178.761V248.21" stroke="black" stroke-width="6" />
                                            </g>
                                        </g>
                                        <MainPump
                                            stateMPump1={data.status.Pump[0].Status}
                                            stateMPump2={data.status.Pump[1].Status}
                                            //stateMPump3={data.status.Pump[2].Status}
                                            //stateMPump4={data.status.Pump[3].Status}
                                        />
                                        <LevelSW
                                            HH_Level_SW_Alarm={data.status.Level.HH}
                                            Control_Level_SW_4={data.status.Level.C4}
                                            Control_Level_SW_3={data.status.Level.C3}
                                            Control_Level_SW_2={data.status.Level.C2}
                                            Control_Level_SW_1={data.status.Level.C1}
                                            LL_Level_SW={data.status.Level.LL}
                                        />
                                    </g>

                                </svg>


                            </div>
                        </div>

                    </div>


                    <div style={{ width: WindowsSize.col5, marginTop: "10px" }}>

                        <div class="row d-flex justify-content-around" style={{ marginLeft: "5px", marginRight: "5px" }}>


                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="mt-2" style={{
                                    backgroundColor: '#83C3FF',
                                    borderRadius: "5px",
                                    border: "4px solid #135D9C",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    width: "100%",
                                }}>

                                    <div className="data-col4">WEB CONTROL</div>
                                    <div className={data.status.WEB_Control}>{data.status.WEB_Control}</div>

                                </div>
                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="mt-2"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        width: "100%"
                                    }}>

                                    <button className="button-resetAM">
                                        <Popupcommand
                                            Header={"RESET ALARM"}
                                            TITEL={"RESET ALARM"}
                                            commandToPLC={{
                                                device: "RESET ALARM",
                                                cmd: "Reset_PB_WEB"
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>



                        </div>


                        <div class="row d-flex justify-content-around" style={{ marginLeft: "5px", marginRight: "5px" }}>
                            <div className="mt-2" style={{ width: WindowsSize.col3 }} >

                                <BoxStatus
                                    PUMP={"PUMP 1"}
                                    ManualBKColor={data.status.Pump[0].Manual}
                                    AutoBKColor={data.status.Pump[0].Auto}
                                    StartBKColor={data.status.P1_Start_Pump}
                                    StopBKColor={data.status.P1_Stop_Pump}
                                    Status_Pump={data.status.Pump[0].Status}
                                    Status_Remote_Mode={data.status.Pump[0].Remote}
                                    Status_Pump_R_H={data.status.Pump[0].RH}
                                />

                            </div>

                            <div className="mt-2" style={{ width: WindowsSize.col3 }}>

                                <BoxStatus
                                    PUMP={"PUMP 2"}
                                    ManualBKColor={data.status.Pump[1].Manual}
                                    AutoBKColor={data.status.Pump[1].Auto}
                                    StartBKColor={data.status.P1_Start_Pump}
                                    StopBKColor={data.status.P1_Stop_Pump}
                                    Status_Pump={data.status.Pump[1].Status}
                                    Status_Remote_Mode={data.status.Pump[1].Remote}
                                    Status_Pump_R_H={data.status.Pump[1].RH}
                                />

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default ComponentOverview


