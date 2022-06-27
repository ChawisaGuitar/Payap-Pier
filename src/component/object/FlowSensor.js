import React from 'react'


function statusObject(status1) {

    switch (status1) {
        case "ON":
            return ""
        case "OFF":
            return "false"
        default:
            return "false"
    }

}

function FlowSensor(props) {
    return (
        <svg>

            <g id="Flow">

                <g id="Flow1" key={props.stateFlow1} hidden={statusObject(props.stateFlow1)}>
                    <g id="Group 48_3">
                        <path id="Rectangle 82_3" d="M832.5 666V664.5H831H818.824L841 631.679L863.176 664.5H851H849.5V666V714.5H832.5V666Z" stroke-width="3" />
                    </g>
                    <g id="Group 49_2">
                        <path id="Rectangle 82_4" d="M848 503.5H849.5V502V489.824L882.321 512L849.5 534.176V522V520.5H848H799.5V503.5H848Z" stroke-width="3" />
                    </g>
                    <animate attributeName="fill" values="#23DDDD;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                    <animate attributeName="stroke" values="black;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                </g>
                <g id="Flow2" key={props.stateFlow2}  hidden={statusObject(props.stateFlow2)}>
                    <g id="Group 48_4">
                        <path id="Rectangle 82_5" d="M1086.5 666V664.5H1085H1072.82L1095 631.679L1117.18 664.5H1105H1103.5V666V714.5H1086.5V666Z" stroke-width="3" />
                    </g>
                    <g id="Group 49_3">
                        <path id="Rectangle 82_6" d="M1102 503.5H1103.5V502V489.824L1136.32 512L1103.5 534.176V522V520.5H1102H1053.5V503.5H1102Z" stroke-width="3" />
                    </g>
                    <animate attributeName="fill" values="#23DDDD;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                    <animate attributeName="stroke" values="black;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                </g>
                <g id="Flow3" key={props.stateFlow3}  hidden={statusObject(props.stateFlow3)}>
                    <g id="Group 48_5">
                        <path id="Rectangle 82_7" d="M1340.5 666V664.5H1339H1326.82L1349 631.679L1371.18 664.5H1359H1357.5V666V714.5H1340.5V666Z" stroke-width="3" />
                    </g>
                    <g id="Group 49_4">
                        <path id="Rectangle 82_8" d="M1356 503.5H1357.5V502V489.824L1390.32 512L1357.5 534.176V522V520.5H1356H1307.5V503.5H1356Z" stroke-width="3" />
                    </g>
                    <animate attributeName="fill" values="#23DDDD;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                    <animate attributeName="stroke" values="black;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                </g>
                <g id="Flow4" key={props.stateFlow4}  hidden={statusObject(props.stateFlow4)}>
                    <g id="Group 48_2">
                        <path id="Rectangle 82" d="M1594.5 666V664.5H1593H1580.82L1603 631.679L1625.18 664.5H1613H1611.5V666V714.5H1594.5V666Z" stroke-width="3" />
                    </g>
                    <g id="Group 49">
                        <path id="Rectangle 82_2" d="M1610 503.5H1611.5V502V489.824L1644.32 512L1611.5 534.176V522V520.5H1610H1561.5V503.5H1610Z" stroke-width="3" />
                    </g>
                    <animate attributeName="fill" values="#23DDDD;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                    <animate attributeName="stroke" values="black;#C4C4C4" begin="0s" dur="1s" calcMode="discrete" repeatCount="indefinite" />
                </g>
            </g>

        </svg >
    )
}

export default FlowSensor

