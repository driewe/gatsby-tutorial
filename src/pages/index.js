import React from "react"
import Layout from "../components/Layout"
import {ExampleButton} from "../components/button"

export default () => (
    <Layout>
        <h1 style={{ color: "green", textTransform: "uppercase"}}>
            hello from gatsby
        </h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <ExampleButton>Click Me</ExampleButton>
    </Layout>
)

