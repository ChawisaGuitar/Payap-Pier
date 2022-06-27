import React, { useEffect, useState } from 'react'
import Header from "./Header"
function ComponentSetting() {
    const [WindowsSize, setWindowsSize] = useState({ col1: "", col2: "", col3: "", col4: "" })

    function windowsScreen() {

        if (window.innerWidth > 1920) {
            setWindowsSize({ col1: "48%", col2: "48%", col3: "24.3%", col4: "1920px", col5: "39%" })
        } else if (window.innerWidth > 1500) {
            setWindowsSize({ col1: "46%", col2: "46%", col3: "100%", col4: "100%", col5: "39%" })
        } else if (window.innerWidth > 1000) {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "100%", col4: "100%", col5: "100%" })
        }
        else {
            setWindowsSize({ col1: "100%", col2: "100%", col3: "100%", col4: "100%", col5: "100%" })
        }

    }

    useEffect(() => {
        windowsScreen();
        window.addEventListener("resize", windowsScreen);
    }, [])
    return (
        <div>
            <Header />

            <div class="container-fluid">

                <div class="row" style={{ margin: "20px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ width: WindowsSize.col1, backgroundColor: "", padding: "100px", margin: "20px" }}>

                    </div>
                    <div style={{ width: WindowsSize.col2, backgroundColor: "", padding: "100px", margin: "20px" }}>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default ComponentSetting
