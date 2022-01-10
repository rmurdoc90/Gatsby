import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About us page stuff</h2>
            <p>
              Godard tattooed affogato farm-to-table flannel craft beer. Cray
              cloud bread hammock franzen craft beer palo santo vaporware
              tattooed 3 wolf moon authentic viral vexillologist coloring book.
            </p>
            <p>
              Godard tattooed affogato farm-to-table flannel craft beer. Cray
              cloud bread hammock franzen craft beer palo santo vaporware
              tattooed 3 wolf moon authentic viral vexillologist coloring book.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}
