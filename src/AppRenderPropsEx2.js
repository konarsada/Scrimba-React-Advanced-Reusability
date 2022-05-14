import React from "react"
import DataFetcherRenderPropsEx2 from "./components/DataFetcherRenderPropsEx2"

function AppRenderPropsEx2() {    
    return (
        <div>
            <DataFetcherRenderPropsEx2 url="https://swapi.dev/api/people/1/">
                {({data, loading}) => (
                    loading ? 
                    <h1>Loading...</h1> :
                    <p>{JSON.stringify(data)}</p>
                )}
            </DataFetcherRenderPropsEx2>
        </div>
    )
}

export default AppRenderPropsEx2