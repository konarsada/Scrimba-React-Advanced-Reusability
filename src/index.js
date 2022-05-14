import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import AppRenderPropsEx2 from "./AppRenderPropsEx2"

const root = ReactDOM.createRoot(document.getElementById("root"))

/*root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)*/

root.render(
    <React.StrictMode>
        <AppRenderPropsEx2 />
    </React.StrictMode>
)