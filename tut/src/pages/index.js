import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function index() {
  return (
    <div>
      <Layout>
      <h1>home page</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/company">Company/Company</Link>
      </div>
      </Layout>
    </div>
  )
}
