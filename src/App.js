import React from "react"

/* ***** HOC ***** */
import Menu from "./components/Menu"
import Favorite from "./components/Favorite"

export default function App() {
    return (
        <div>
            <Menu someProp="test-prop" />
            <hr />
            <Favorite />
        </div>
    )
}