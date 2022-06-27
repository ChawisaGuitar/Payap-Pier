import React, { useState, useEffect, useRef } from 'react'
import './Header.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiMenu, FiRefreshCcw } from "react-icons/fi";
import { AiFillBell, AiFillDatabase, AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { GiExitDoor, GiPowerGenerator } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { Link, Redirect } from 'react-router-dom';
import { RiBaseStationLine } from "react-icons/ri";
let base64 = require('base-64');



function Header() {
    const PathAPI = "wss://klongphasicharoen.in-tech.co.th/api/station"
    const [FontSize, setFontSizeData] = useState("18px")
    const [LocalS, setLocalS] = useState(true)
    const [click, setClick] = useState(false)
    const handleClink = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const [data, updateData] = useState({
        alive: ""
    });
    const clientRef = useRef(null);
    const [waitingToReconnect, setWaitingToReconnect] = useState(null);


    function windowsScreen() {

        if (window.innerWidth < 1300) {
            setFontSizeData("16px")
        } else {
            setFontSizeData("18px")
        }
    }

    const RefreshPage = () => {

        window.location.reload(false);
    }

    const redirect = () => {
        var statuslogin
        statuslogin = JSON.parse(base64.decode(localStorage.getItem('myData')))
        if (statuslogin.message === true) {
            setLocalS(true)
        } else {
            setLocalS(false)
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
                updateData({ alive: response.alive });
                //console.log(dataLog)
                // ws.close();
            };

            redirect();
            windowsScreen();
            window.addEventListener("resize", windowsScreen);
            // windowsScreen();

            // return () => window.removeEventListener("resize", windowsScreen);

            return () => {


                window.removeEventListener("resize", windowsScreen);
                //console.log('Cleanup');
                // Dereference, so it will set up next time
                clientRef.current = null;

                client.close();
            }
        }

    }, [waitingToReconnect]);

    if (LocalS === false) {
        return <Redirect to='/' />;
    }

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="header-con" style={{ alignItems: "baseline" }}>
                    <div className="logo-container">
                        <spen>
                            <Link to="#"
                                style={{
                                    color: "#FFFFFF",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                                onClick={() => RefreshPage()}
                            >
                  
                                    <div style={{ marginRight: "10px" }}>
                                        Payap Pier
                                    </div>
                                    <div className={data.alive ? "status-connect" : "status-disconnect"} style={{marginBottom:"5px"}}>
                                        <RiBaseStationLine />
                                    </div>
                           

                            </Link>
                            {/* <div style={{
                                paddingLeft:""
                            }}><RiBaseStationLine /></div> */}

                        </spen>
                    </div>
                    <ul className={click ? "menu active" : "menu"} >
                        <li className="menu-link" onClick={closeMobileMenu} >
                            <Link to="/overview" >
                                <button type="button" className="btn-block btn btn-sm"
                                    style={{
                                        fontWeight: "bold",
                                        backgroundColor: "#314770",
                                        color: "#FFFFFF",
                                        border: "2px solid #FFFFFF",
                                        fontSize: FontSize,
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        width: "200px",
                                    }}><AiFillHome />
                                    <div className="ml-2">MAIN</div>
                                </button>
                            </Link>
                        </li>


                        <li className="menu-link" onClick={closeMobileMenu}>

                            <Link to="/alarmlog" className="">
                                <button type="button" className="btn-block btn  btn-sm " style={{
                                    fontWeight: "bold",
                                    backgroundColor: "#314770",
                                    color: "#FFFFFF",
                                    border: "2px solid #FFFFFF",
                                    fontSize: FontSize,
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "200px",

                                }}>
                                    <AiFillBell />
                                    <div className="ml-2"> ALARM LOGGING</div>

                                </button>
                            </Link>
                        </li>

                        <li className="menu-link" onClick={closeMobileMenu} >
                            <Link to="/eventlog">
                                <button type="button" className="btn-block btn  btn-sm" style={{
                                    fontWeight: "bold",
                                    backgroundColor: "#314770",
                                    color: "#FFFFFF",
                                    border: "2px solid #FFFFFF",
                                    fontSize: FontSize,
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "200px"
                                }}><AiFillDatabase />
                                    <div className="ml-2"> EVENT LOGGING</div>
                                </button>
                            </Link>
                        </li>

                        <li className="menu-link" onClick={closeMobileMenu} >
                            <Link to="/trend">
                                <button type="button" className="btn-block btn  btn-sm" style={{
                                    fontWeight: "bold",
                                    backgroundColor: "#314770",
                                    color: "#FFFFFF",
                                    border: "2px solid #FFFFFF",
                                    fontSize: FontSize,
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "200px"
                                }}><BsGraphUp />
                                    <div className="ml-2"> TREND</div>
                                </button>
                            </Link>
                        </li>

                        <li className="menu-link" onClick={closeMobileMenu} >
                            <Link to="/">
                                <button type="button" className="btn-block btn  btn-sm"
                                    style={{
                                        fontWeight: "bold",
                                        backgroundColor: "#314770",
                                        color: "#FFFFFF",
                                        border: "2px solid #FFFFFF",
                                        fontSize: FontSize,
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        width: "200px"

                                    }}>
                                    <GiExitDoor />
                                    <div className="ml-2"> LOGOUT</div>
                                </button>
                            </Link>
                        </li>

                    </ul>

                    <div className="mobile-menu" onClick={handleClink}>
                        {click ? <BsFillCaretDownFill /> : <FiMenu />}
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Header
