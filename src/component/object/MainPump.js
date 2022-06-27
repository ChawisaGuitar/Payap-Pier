import React from 'react'

function statusObject(status1) {

    if (status1 === "RUN") {

        return { fill: "#0BE114;#FFFFFF", dur: "0s" }

    } else if (status1 === "STOP") {

        return { fill: "#C4C4C4;#FFFFFF", dur: "0s" }

    } else if (status1 === "FAULT") {

        return { fill: "#E10B0B;#C4C4C4", dur: "1s" }
    }
    else {

        return "#FFFF00"

    }

}


function MainPump(props) {

    return (

        <svg>
            <g id="PUMP">
                <g id="PUMP1">
                    <rect id="Rectangle 155_4" x="436.137" y="508.963" width="67.546" height="30.2138" rx="3.5" stroke="black" stroke-width="4" />
                    <path id="Rectangle 150_12" d="M398.614 808.992H546.62L528.625 849.033L528.449 849.424V849.853V879.618V880.251L528.813 880.768L545.859 905.001H399.308L415.173 880.711L415.499 880.213V879.618V849.853V849.452L415.345 849.083L398.614 808.992Z" stroke="black" stroke-width="4" />
                    <path id="Rectangle 154_4" d="M429.757 553.704H512.815L507.86 575.755L507.811 575.972V576.193V687.756V687.924L507.839 688.089L511.573 710.246H430.999L434.734 688.089L434.761 687.924V687.756V576.193V575.972L434.713 575.755L429.757 553.704Z" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 151_10" x="408.207" y="856.744" width="128.91" height="14.0197" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 156_4" x="427.469" y="693.665" width="87.4963" height="8.61381" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 157_4" x="427.469" y="560.319" width="87.4963" height="8.61381" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 152_9" x="427.469" y="711.685" width="87.4963" height="96.9105" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 153_9" x="427.882" y="527.146" width="86.8084" height="24.5741" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 172_4" x="434.174" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 434.174 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 182_4" x="445.731" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 445.731 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 183_4" x="457.289" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 457.289 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 184_4" x="468.846" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 468.846 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 185_4" x="480.404" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 480.404 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 186_4" x="491.961" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 491.961 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 187_4" x="503.519" y="551.012" width="23.2276" height="5.70495" transform="rotate(-90 503.519 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 174_4" x="436.1" y="807.794" width="95.3065" height="5.70495" transform="rotate(-90 436.1 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 175_4" x="457.289" y="807.794" width="95.3065" height="6.66807" transform="rotate(-90 457.289 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 176_4" x="479.441" y="807.794" width="95.3065" height="6.66807" transform="rotate(-90 479.441 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 177_4" x="501.592" y="807.794" width="95.3065" height="5.70495" transform="rotate(-90 501.592 807.794)" stroke="black" stroke-width="2" />
                    <path id="Vector 7_4" d="M435.1 574.537H508.297" stroke="black" />
                    <path id="Vector 8_4" d="M435.1 686.26H508.297" stroke="black" />
                    <path id="Vector 9_4" d="M414.875 849.338H527.56" stroke="black" />
                    <path id="Vector 10_4" d="M414.875 879.07H527.56" stroke="black" />
                    <animate key={props.stateMPump1} attributeName="fill" values={statusObject(props.stateMPump1).fill} dur={statusObject(props.stateMPump1).dur} repeatCount="indefinite" />                
                </g>
                <g id="PUMP2">
                    <rect id="Rectangle 155" x="817.47" y="508.963" width="67.4313" height="30.2138" rx="3.5" stroke="black" stroke-width="4" />
                    <path id="Rectangle 150_9" d="M780.007 808.992H927.77L909.803 849.034L909.628 849.425V849.853V879.618V880.25L909.991 880.767L927.011 905.001H780.699L796.54 880.71L796.865 880.212V879.618V849.853V849.453L796.711 849.084L780.007 808.992Z" stroke="black" stroke-width="4" />
                    <path id="Rectangle 154" d="M811.1 553.704H894.019L889.071 575.756L889.023 575.972V576.193V687.756V687.923L889.05 688.088L892.779 710.246H812.34L816.069 688.088L816.097 687.923V687.756V576.193V575.972L816.048 575.756L811.1 553.704Z" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 151_7" x="789.585" y="856.744" width="128.697" height="14.0197" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 156" x="808.816" y="693.665" width="87.3496" height="8.61381" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 157" x="808.816" y="560.319" width="87.3496" height="8.61381" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 152_6" x="808.816" y="711.685" width="87.3496" height="96.9105" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 153_6" x="809.228" y="527.146" width="86.6628" height="24.5741" stroke="black" stroke-width="4" />
                    <rect id="Rectangle 172" x="815.509" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 815.509 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 182" x="827.048" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 827.048 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 183" x="838.587" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 838.587 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 184" x="850.125" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 850.125 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 185" x="861.664" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 861.664 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 186" x="873.203" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 873.203 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 187" x="884.742" y="551.012" width="23.2276" height="5.6926" transform="rotate(-90 884.742 551.012)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 174" x="817.432" y="807.794" width="95.3065" height="5.6926" transform="rotate(-90 817.432 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 175" x="838.587" y="807.794" width="95.3065" height="6.65417" transform="rotate(-90 838.587 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 176" x="860.703" y="807.794" width="95.3065" height="6.65417" transform="rotate(-90 860.703 807.794)" stroke="black" stroke-width="2" />
                    <rect id="Rectangle 177" x="882.819" y="807.794" width="95.3065" height="5.6926" transform="rotate(-90 882.819 807.794)" stroke="black" stroke-width="2" />
                    <path id="Vector 7" d="M816.432 574.537H889.512" stroke="black" />
                    <path id="Vector 8" d="M816.432 686.26H889.512" stroke="black" />
                    <path id="Vector 9" d="M796.239 849.338H908.743" stroke="black" />
                    <path id="Vector 10" d="M796.239 879.07H908.743" stroke="black" />
                    <animate key={props.stateMPump2} attributeName="fill" values={statusObject(props.stateMPump2).fill} dur={statusObject(props.stateMPump2).dur} repeatCount="indefinite" />
                </g>
            </g>
        </svg>

    )
}

export default MainPump

