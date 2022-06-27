import React, { useEffect } from 'react'
import { GiAndromedaChain } from 'react-icons/gi';
import "./BoxStatus.css"
import Popupcommand from './Popupcommand'
let base64 = require('base-64');

function BoxStatus(props) {

    function lvState(myData2) {


        switch (myData2) {
            case 1:

                return "#B2DA5D"

            default:

                return "#3D4490"
        }


    }

    return (
        <div class="container-fluid" style={{ fontSize: "18px"}}>

            <div style={{
                backgroundColor: '#83C3FF',
                padding: '6px',
                height: "100%",
                width: "100%",
                borderRadius: "5px",
                marginBottom: "10px",
                border: "4px solid #135D9C"

            }}>
                <div style={{
                    textAlign: 'center',
                    color: "#FFFFFF",
                    fontSize: "1.4em",
                    fontWeight: "bold",
                    backgroundColor: "#135D9C",
                    borderRadius: "5px",
                    border: "2px solid #FFFFFF",
                    padding: "5px",

                }}>{props.PUMP}</div>

                <div class="row">

                    <div className="data-col1">STATUS</div>
                    <div className={props.Status_Pump}>{props.Status_Pump}</div>

                    <div className="data-col1">MODE</div>
                    <div className={props.Status_Remote_Mode}>{props.Status_Remote_Mode}</div>

                </div>

                <div class="row mt-2">

                    <button className="button-col1" style={{ backgroundColor: lvState(props.ManualBKColor) }}>
                        <Popupcommand
                            Header={props.PUMP}
                            TITEL={"MANUAL"}
                            commandToPLC={{
                                device: props.PUMP,
                                cmd: "Request_Manual_Mode",
                            }}

                        />
                    </button>
                    <button className="button-col2" style={{ backgroundColor: lvState(props.AutoBKColor) }}>
                        <Popupcommand
                            Header={props.PUMP}
                            TITEL={"AUTO"}
                            commandToPLC={{
                                device: props.PUMP,
                                cmd: "Request_Auto_Mode",
                            }}

                        />
                    </button>

                    <button className="button-col1" style={{ backgroundColor: lvState(props.StartBKColor) }}>
                        <Popupcommand
                            Header={props.PUMP}
                            TITEL={"START"}
                            commandToPLC={{
                                device: props.PUMP,
                                cmd: "Manual_Start"
                            }}


                        />
                    </button>


                    <button className="button-col2" style={{ backgroundColor: lvState(props.StopBKColor) }}>
                        <Popupcommand
                            Header={props.PUMP}
                            TITEL={"STOP"}
                            commandToPLC={{
                                device: props.PUMP,
                                cmd: "Manual_Stop"
                            }}

                        />
                    </button>

                </div>

                <div class="row mt-2">
                    <div className="data-col1" style={{ width: "44%" }}>RUN HOUR</div>
                    <div className="data-col2" style={{ width: "44%" }}>{props.Status_Pump_R_H}</div>
                    {/* <div className="data-col3" style={{ width: "20%", backgroundColor:"#FFFFFF" }}>Hrs</div> */}
                </div>

                <div class="row mt-2">
                    <button className="button-reset" style={{ backgroundColor: lvState(0) }}>
                        <Popupcommand
                            Header={props.PUMP}
                            TITEL={"RESET"}
                            commandToPLC={{
                                device: props.PUMP,
                                cmd: "Reset_R_H"
                            }}

                        />
                    </button>
                </div>


            </div>

        </div >
    )
}


export default BoxStatus

