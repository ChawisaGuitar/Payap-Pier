import React, { useState } from 'react'
import Modal from './react-awesome-modal'
import "./BoxStatus.css"
import axios from 'axios'
let base64 = require('base-64');



function Popupcommand(props) {

    const [visible, setVisible] = useState(false)

    // function lvState(myData) {

    //     if (base64.decode(myData) >= 125 && base64.decode(myData) <= 255) {
    //         //console.log(params1)
    //         return ""
    //     } else {
    //         //console.log(params1)
    //         return "hidden"
    //     }

    // }

    const openModal = () => {
        
        if (base64.decode(localStorage.getItem('myData1')) >= 125 && base64.decode(localStorage.getItem('myData1')) <= 255) {
            setVisible(true)
        } else {
           alert("Such user account cannot be controlled.")
        }

        
        
    }

    const closeModal = () => {
        setVisible(false)
    }

    const conFirm = (commandToPLC) => {


        //console.log(commandToPLC)
        axios.post('https://klongphasicharoen.in-tech.co.th/api/cmd/',
            {
                device: commandToPLC.device,
                cmd: commandToPLC.cmd
            })

        // .then(response => setArticleId(response.data.id));
        closeModal()
    }

    return (
        <section>

            {/* <div style={{ fontSize: state.textsize }} className="align-self-center w-100  bd-highlight"  >
                {props.NAME}
            </div>
            <button className="btn btn-outline-dark btn-sm font-weight-bold  flex-shrink-1 bd-highlight"
                onClick={() => openModal()}
            >
                < FontAwesomeIcon icon="cogs" />
            </button> */}
            {/* {LogingUser(base64.decode(localStorage.getItem('myData'))).authorit} */}
            <div
                //style={{ visibility: (JSON.parse(base64.decode(localStorage.getItem('myData'))).authority ? '' : 'hiden') }}
                //style={{ visibility: lvState(localStorage.getItem('myData1')) }}
                onClick={() => openModal()}
            >
                {props.TITEL}
            </div>



            <div style={{ backgroundColor: "#000000" }}>
                <Modal
                    visible={visible}
                    width="400"
                    height="250"
                    effect="fadeInUp"
                    onClickAway={() => closeModal()}

                >
                    <div className="container-fluid" >

                        <div class="row mt-4">

                            <div class="container-fluid text-dark font-weight-bold mb-3" >

                                <div style={{
                                    textAlign: 'center',
                                    fontWeight: "bold",
                                    backgroundColor: "#135D9C",
                                    borderRadius: "5px",
                                    border: "2px solid #FFFFFF",
                                    padding: "5px",
                                    fontSize: "24px",
                                    color: "white"

                                }}>

                                    {props.Header}

                                </div>

                            </div>
                            <div class="container-fluid text-dark font-weight-bold" >
                                <spen>

                                    <div style={{
                                        fontSize: "16px",
                                        color: "blue"
                                    }}>

                                        CONFIRM TO {props.TITEL}

                                    </div>

                                </spen>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="container-fluid font-weight-bold">
                                {/* <div >JOG TIME {props.JOGTIME} sec</div> */}

                                <div className="d-flex justify-content-around">

                                    <button type="button"
                                        className="btn btn-outline-success btn-lg font-weight-bold mt-2 "
                                        onClick={() => conFirm(props.commandToPLC)}>
                                        CONFIRM
                                    </button>

                                    <button className="btn btn-outline-danger btn-lg font-weight-bold mt-2 "
                                        onClick={() => closeModal()}>
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>

        </section>
    )
}

export default Popupcommand
