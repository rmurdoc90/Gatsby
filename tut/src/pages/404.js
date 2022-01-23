import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function Error() {

  return (
    <Layout>
      <SEO title='404 Page'/>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
          <h4>Testing</h4>
        </section>
      </main>
    </Layout>
  )
}
