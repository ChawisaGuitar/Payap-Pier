import React from 'react'

function statusObject(status1) {

    switch (status1) {
        case "RUN":
            return { fill: "#0BE114;#FFFFFF", dur: "0s" }
        case "STOP":
            return { fill: "#C4C4C4;#FFFFFF", dur: "0s" }
        case "OVER LOAD":
            return { fill: "#E10B0B;#C4C4C4", dur: "1s" }
        default:
            return "#FFFF00"
    }

}

function CoollingPump(props) {
    return (
        <svg>

            <g id="Coolingpump">
                <g id="Coolingpump1">
                    <rect id="Rectangle 1_7" x="598.526" y="155.125" width="59.9738" height="57.375" rx="13.5"stroke="black" stroke-width="3" />
                    <line id="Line 1_7" x1="611.51" y1="154.241" x2="611.51" y2="214" stroke="black" stroke-width="3" />
                    <line id="Line 2_7" x1="645.27" y1="154.241" x2="645.27" y2="214" stroke="black" stroke-width="3" />
                    <line id="Line 3_7" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 163.779)" stroke="black" stroke-width="3" />
                    <line id="Line 4_3" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 177.037)" stroke="black" stroke-width="3" />
                    <line id="Line 5_3" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 190.294)" stroke="black" stroke-width="3" />
                    <line id="Line 6_3" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.010704 -0.01138 0.999935 610.519 202.616)" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 3_3" x="545.992" y="175.455" width="13.8796" height="17.3304"stroke="black" stroke-width="3" />
                    <rect id="Rectangle 4_7" x="538.5" y="169.911" width="7.38743" height="28.4196"stroke="black" stroke-width="3" />
                    <rect id="Rectangle 5_3" x="555.029" y="147.5" width="28.1623" height="6.85714"stroke="black" stroke-width="3" />
                    <rect id="Rectangle 6_3" x="559.5" y="155.5" width="20" height="46"stroke="black" stroke-width="3" />
                    <rect id="Rectangle 7_7" x="579.5" y="168.5" width="19" height="33"stroke="black" stroke-width="3" />
                    <rect id="Rectangle 8_7" x="568" y="180" width="22" height="20"/>
                    <animate key={props.stateCPump4} attributeName="fill" values={statusObject(props.stateCPump4).fill} dur={statusObject(props.stateCPump4).dur} repeatCount="indefinite" />
                </g>
                <g id="Coolingpump2">
                    <rect id="Rectangle 1_6" x="598.526" y="253.125" width="59.9738" height="57.375" rx="13.5" stroke="black" stroke-width="3" />
                    <line id="Line 1_6" x1="611.51" y1="252.241" x2="611.51" y2="312" stroke="black" stroke-width="3" />
                    <line id="Line 2_6" x1="645.27" y1="252.241" x2="645.27" y2="312" stroke="black" stroke-width="3" />
                    <line id="Line 3_6" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 261.779)" stroke="black" stroke-width="3" />
                    <line id="Line 4_2" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 275.037)" stroke="black" stroke-width="3" />
                    <line id="Line 5_2" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.0107038 -0.0113802 0.999935 610.519 288.294)" stroke="black" stroke-width="3" />
                    <line id="Line 6_2" y1="-1.5" x2="31.2808" y2="-1.5" transform="matrix(0.999943 0.010704 -0.01138 0.999935 610.519 300.616)" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 3_2" x="545.992" y="273.455" width="13.8796" height="17.3304" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 4_6" x="538.5" y="267.911" width="7.38743" height="28.4196" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 5_2" x="555.029" y="245.5" width="28.1623" height="6.85714" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 6_2" x="559.5" y="253.5" width="20" height="46" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 7_6" x="579.5" y="266.5" width="19" height="33" stroke="black" stroke-width="3" />
                    <rect id="Rectangle 8_6" x="568" y="278" width="22" height="20" />
                    <animate key={props.stateCPump3} attributeName="fill" values={statusObject(props.stateCPump3).fill} dur={statusObject(props.stateCPump3).dur} repeatCount="indefinite" />
                </g>
            </g>
        </svg>
    )
}

export default CoollingPump


