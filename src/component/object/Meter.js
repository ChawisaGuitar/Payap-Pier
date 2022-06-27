import React, { Component } from 'react'

let tb_container = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '1px',
    padding: '3px',
    backgroundColor: "#b1a9b8",
    border: "2px solid #000000",
    borderRadius: "10px",
}

var tb_Data = {
    textAlign: 'center',
    padding: '1px',
}

var tb_Data1 = {
    textAlign: 'center',
    padding: '1px',
    color:"#444444"
}

var circle = {
    height: "20px",
    width: "20px",
    backgroundColor: "#b1a9b8",
    marginTop: "15px",
    borderRadius: "180px",
    border: "2px solid #000000"
}

var meter_container = {
    backgroundColor: "#605a64",
    height: "240px",
    width: "200px",
    borderRadius: "8px",
    color: " #000000",
    border: "5px solid #000000",
    padding: "10px",
    
}

var text_header = {
    fontSize: "20px"
}

var tb_header = {
    gridColumn: '1 / 4',
    textAlign: 'center',
}

export default class meter extends Component {
    render() {
        return (
            <div>
            <div className="container d-flex justify-content-center mt-5 font-weight-bold">
                <div style={meter_container} >
                    <p style={text_header}>Power Meter</p>

                    <div style={tb_container}>

                        <div style={tb_header}>Summary</div>

                        <div style={tb_Data}>Vavg</div>
                        <div style={tb_Data1}>{this.props.Volt}</div>
                        <div style={tb_Data}>V</div>

                        <div style={tb_Data}>Iavg</div>
                        <div style={tb_Data1}>{this.props.Amp}</div>
                        <div style={tb_Data}>A</div>

                        <div style={tb_Data}>Ptot</div>
                        <div style={tb_Data1}>{this.props.Watt}</div>
                        <div style={tb_Data}>kW</div>

                    </div>

                    <div className="d-flex justify-content-around">
                        <div style={circle}></div>
                        <div style={circle}></div>
                        <div style={circle}></div>
                        <div style={circle}></div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
