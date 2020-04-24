import React from 'react'
import Layout from "../components/Layout"
import styles from '../components/products.module.css'

export default () => (
    <Layout>
    <div className={styles.page}>
        <h1>This is our product page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod felis venenatis orci malesuada, in placerat purus maximus. Nam quis velit vehicula augue sollicitudin varius. Quisque nec velit a magna pellentesque sagittis ut sollicitudin magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sollicitudin lacinia sem, ut blandit ipsum congue sed. Integer bibendum turpis eget metus ultrices, quis laoreet sapien egestas. </p>
    </div>
    </Layout>
)

