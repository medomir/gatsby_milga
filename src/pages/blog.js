import React from "react"
import Layout from "./../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is blog page</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, eos.</p>
      </div>
    </Layout>
  )
}

export default blog
