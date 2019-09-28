import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export const IndexPage = () => (
  <>
    <h2>Hi people</h2>
    <p>
      The starter is a fork from default starter, with TypeScript and service
      worker support.
    </p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to another page</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
