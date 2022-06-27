import React, { Component } from 'react'

function statePump(status1) {

    switch (status1) {
        case "run":
            return "#0BE114;#B7B7AD"
        case "stop":
            return "#E10B0B;#B7B7AD"
        case "fault":
            return "#FFFF00;#B7B7AD"
        default:
            return ""
    }

}

export default class pump extends Component {

    render() {
        return (

            <div class="container" >
                <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="img-fluid" >
                    {/* <rect width="1920" height="1080" fill="white" /> */}
                    <rect x="964" y="255.438" width="810" height="665.477" rx="166" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <line x1="1148" y1="246.331" x2="1148" y2="940.915" stroke="black" stroke-width="40" />
                    <line x1="1601" y1="246.331" x2="1601" y2="940.915" stroke="black" stroke-width="40" />
                    <line y1="-20" x2="421.022" y2="-20" transform="matrix(0.999957 0.00924757 -0.0131722 0.999913 1128 356.928)" stroke="black" stroke-width="40" />
                    <line y1="-20" x2="421.022" y2="-20" transform="matrix(0.999957 0.00924757 -0.0131722 0.999913 1128 511.094)" stroke="black" stroke-width="40" />
                    <line y1="-20" x2="421.022" y2="-20" transform="matrix(0.999957 0.00924757 -0.0131722 0.999913 1128 665.26)" stroke="black" stroke-width="40" />
                    <line y1="-20" x2="421.022" y2="-20" transform="matrix(0.999957 0.00924772 -0.013172 0.999913 1128 808.534)" stroke="black" stroke-width="40" />
                    <rect x="239" y="493.39" width="185" height="199.628" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <rect x="145" y="431.389" width="100" height="323.631" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <rect x="384" y="159.085" width="379" height="71.4352" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <rect x="437" y="240.357" width="258" height="552.366" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <rect x="705" y="412.118" width="258" height="380.605" stroke="black" stroke-width="40" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>
                    <rect x="566" y="535.5" width="298" height="237.952" >
                        <animate attributeName="fill" values={statePump(this.props.status)} begin="0s" dur={this.props.blink} calcMode="discrete" repeatCount="indefinite" />
                    </rect>

                </svg>

            </div>

        )
    }
}





