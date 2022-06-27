import React from 'react'


function MainWater(props) {
    return (
        <svg>

            <rect id="LEVEL" x="79" y={statusObject(props.LevelMainWater).y1} width="1762" height={statusObject(props.LevelMainWater).height1} fill="#83C3FF" />

        </svg>
    )
}

function statusObject(status1) {

    switch (status1) {

        case 6:
            return {
                y1: "203",
                height1: "815",
            }
        case 5:
            return {
                y1: "328",
                height1: "690",
            }
        case 4:
            return {
                y1: "453",
                height1: "565",
            }
        case 3:
            return {
                y1: "578",
                height1: "440",
            }
        case 2:
            return {
                y1: "706",
                height1: "312",
            }
        case 1:
            return {
                y1: "831",
                height1: "187",
            }

        default:
            return {
                y1: "0",
                height1: "0",
            }
    }

}

export default MainWater

