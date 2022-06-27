import React from 'react'
function statusObject(status1) {

    switch (status1) {
        case true:
            return { fill: "#0BE114;#FFFFFF", dur: "0s" }
        case false:
            return { fill: "#C4C4C4;#FFFFFF", dur: "0s" }
        case "OVER LOAD":
            return { fill: "#E10B0B;#C4C4C4", dur: "1s" }
        default:
            return "#FFFF00"
    }

}
function LevelSW(props) {
    return (
        <svg>
            <g id="LevelSW">
                <g>
                    <circle id="LL" cx="160" cy="827" r="24.5" stroke="black" />
                    <animate key={props.LL_Level_SW}
                        attributeName="fill"
                        values={statusObject(props.LL_Level_SW).fill}
                        dur={statusObject(props.LL_Level_SW).dur}
                        repeatCount="indefinite" />
                </g>
                <g>
                    <circle id="C1" cx="160" cy="700" r="24.5" stroke="black" />
                    <animate key={props.Control_Level_SW_1}
                        attributeName="fill"
                        values={statusObject(props.Control_Level_SW_1).fill}
                        dur={statusObject(props.Control_Level_SW_1).dur}
                        repeatCount="indefinite" />
                </g>
                <g>
                    <circle id="C2" cx="160" cy="575" r="24.5" stroke="black" />
                    <animate key={props.Control_Level_SW_2}
                        attributeName="fill"
                        values={statusObject(props.Control_Level_SW_2).fill}
                        dur={statusObject(props.Control_Level_SW_2).dur}
                        repeatCount="indefinite" />
                </g>
                <g>
                    <circle id="C3" cx="160" cy="452" r="24.5" stroke="black" />
                    <animate key={props.Control_Level_SW_3}
                        attributeName="fill"
                        values={statusObject(props.Control_Level_SW_3).fill}
                        dur={statusObject(props.Control_Level_SW_3).dur}
                        repeatCount="indefinite" />
                </g>
                <g>
                    <circle id="C4" cx="160" cy="325" r="24.5" stroke="black" />
                    <animate key={props.Control_Level_SW_4}
                        attributeName="fill"
                        values={statusObject(props.Control_Level_SW_4).fill}
                        dur={statusObject(props.Control_Level_SW_4).dur}
                        repeatCount="indefinite" />
                </g>
                <g>
                    <circle id="HH" cx="160" cy="200" r="24.5" stroke="black" />
                    <animate key={props.HH_Level_SW_Alarm}
                        attributeName="fill"
                        values={statusObject(props.HH_Level_SW_Alarm).fill}
                        dur={statusObject(props.HH_Level_SW_Alarm).dur}
                        repeatCount="indefinite" />
                </g>
            </g>
        </svg>
    )
}

export default LevelSW






