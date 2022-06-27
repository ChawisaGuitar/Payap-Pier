import React from 'react'
//LevelCoolingWater
function CoollingWater(prrps) {
    return (
        <svg>
            {/* Water CP */}
            <g id="CoolingWater">
                <rect id="Rectangle 97" x="349" y="162" width="70" height="322" fill="black" />
                <rect key={prrps.LevelCoolingWater} id="Rectangle 98" x="353" y={statusObject(prrps.LevelCoolingWater).y1} width="62" height={statusObject(prrps.LevelCoolingWater).height1} fill="#83C3FF" />
                <g id="Group 48">
                    <g id="Group 28">
                        <rect id="Rectangle 76_2" x="416" y="162" width="2.95902" height="322" fill="black" />
                        <rect id="Rectangle 77" x="417" y="164.34" width="2.04536" height="20.9208" transform="rotate(-90 417 164.34)" fill="black" />
                        <rect id="Rectangle 78" x="416.675" y="327" width="2.04536" height="20.9208" transform="rotate(-90 416.675 327)" fill="black" />
                        <rect id="Rectangle 79" x="417" y="246" width="2.04536" height="20.9208" transform="rotate(-90 417 246)" fill="black" />
                        <rect id="Rectangle 80" x="415" y="408" width="2.04536" height="21.5956" transform="rotate(-90 415 408)" fill="black" />
                    </g>
                    <path id="L" d="M442.981 416.547H453.763V419H439.966V396.25H442.981V416.547Z" fill="black" />
                    <path id="M" d="M445.516 312.25L452.953 330.812L460.391 312.25H464.281V335H461.281V326.141L461.562 316.578L454.094 335H451.797L444.344 316.625L444.641 326.141V335H441.641V312.25H445.516Z" fill="black" />
                    <path id="H" d="M458.45 254H455.435V243.484H443.966V254H440.966V231.25H443.966V241.031H455.435V231.25H458.45V254Z" fill="black" />
                    <path id="HH" d="M459.136 175H456.12V164.484H444.652V175H441.652V152.25H444.652V162.031H456.12V152.25H459.136V175ZM481.948 175H478.933V164.484H467.464V175H464.464V152.25H467.464V162.031H478.933V152.25H481.948V175Z" fill="black" />
                </g>
            </g>
        </svg>
    )
}

function statusObject(status1) {

    switch (status1) {

        case "HH":
            return {
                y1: "166",
                height1: "314"
            }
        case "H":
            return {
                y1: "244",
                height1: "236"
            }
        case "M":
            return {
                y1: "325",
                height1: "155"
            }
        case "L":
            return {
                y1: "406",
                height1: "74"
            }

        default:
            return {
                y1: "0",
                height1: "0"
            }
    }

}

export default CoollingWater
