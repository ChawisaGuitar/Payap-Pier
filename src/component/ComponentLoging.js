import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import desktopImage from "./object/BackguandIMG.svg";
import axios from 'axios'
let base64 = require('base-64');

// // setter
// localStorage.setItem('myData', data);

// // getter
// localStorage.getItem('myData');

// // remove
// localStorage.removeItem('myData');

// // remove all
// localStorage.clear();

function ComponentLoging() {

    const [WindowsSize, setWindowsSize] = useState({ col1: "", paddingTop: "", paddingRight: "", justifyContent: "", boxShadow: "" })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    function windowsScreen() {

        if (window.innerWidth > 1920) {
            setWindowsSize({ col1: "32%", paddingTop: "12%", paddingRight: "12%", justifyContent: "flex-end", boxShadow: "20px 20px 20px 5px rgba(0, 0, 0, 0.5)" })
        } else if (window.innerWidth > 1500) {
            setWindowsSize({ col1: "32%", paddingTop: "12%", paddingRight: "12%", justifyContent: "flex-end", boxShadow: "20px 20px 20px 5px rgba(0, 0, 0, 0.5)" })
        } else if (window.innerWidth > 1000) {
            setWindowsSize({ col1: "50%", paddingTop: "10%", paddingRight: "0%", justifyContent: "center", boxShadow: "20px 20px 20px 5px rgba(0, 0, 0, 0.5)" })
        }
        else {
            setWindowsSize({ col1: "100%", paddingTop: "10%", paddingRight: "0%", justifyContent: "center%", boxShadow: "0px 30px 20px 3px rgba(0, 0, 0, 0.4)" })
        }

    }

    const onSubmit = e => {


        var statuslogin
        e.preventDefault()

        if ((username !== "") && (password !== "")) {

            axios.post('https://klongphasicharoen.in-tech.co.th/api/login',
                {
                    Username: username,
                    password: password
                })
                .then(function (response) {


                    statuslogin = JSON.parse(base64.decode(response.data.res))
                    // console.log(statuslogin)

                    if (statuslogin.message === true) {

                        setRedirect(true)
                        localStorage.setItem('myData', response.data.res);
                        localStorage.setItem('myData1', base64.encode(statuslogin.authority));

                    } else {

                        alert("Username or Password is Incorrect")

                    }
                })
                .catch(function (error) {
                   // console.log(error);
                });


        } else {
            alert("Incomplete information.")
        }

    }
    const openPage = () => {
        localStorage.clear();
    }

    useEffect(() => {

        openPage();
        windowsScreen();
        window.addEventListener("resize", windowsScreen);


    }, [])

    if (redirect === true) {
        return <Redirect to='/overview' />;
    }

    return (
        <div className="img-fluid" style={{
            backgroundImage: "url(" + desktopImage + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
        }}>

            <div className="container-fluid" style={{ paddingTop: WindowsSize.paddingTop, paddingRight: WindowsSize.paddingRight }}>
                <div className="row" style={{ display: "flex", justifyContent: WindowsSize.justifyContent, marginRight: "10px", marginLeft: "10px" }} >
                    <div style={{ width: WindowsSize.col1, boxShadow: WindowsSize.boxShadow }}  >

                        <div className="container-fluid rounded "
                            style={{
                                borderStyle: 'solid',
                                border: "4px solid ",
                                borderColor: "#FFFFFF",
                                backgroundImage: "radial-gradient(circle, #83C3FF,  #83C3FF)",
                            }}>


                            <form onSubmit={onSubmit}>
                                <div className="d-flex justify-content-center mt-2 "
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        textShadow: "-1px 0 #1D4490, 0 1px #3D4490, 1px 0 #3D4490, 0 -1px #3D4490",
                                    }}>
                                    WATER PUMPS MONITORING
                                </div>
                                <div className="d-flex justify-content-center mb-5"
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        textShadow: "-1px 0 #3D4490, 0 1px #3D4490, 1px 0 #3D4490, 0 -1px #3D4490",
                                    }}>
                                    SYSTEM AT KLONGPHASICHAROEN
                                </div>
                                <div className="form-group ">
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="control">
                                    <button type="submit"
                                        className="my-5 btn-lg btn-primary"
                                        style={{ height: "100%", width: "100%", fontWeight: "bold" }}>
                                        <div>LOG IN</div>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ComponentLoging
