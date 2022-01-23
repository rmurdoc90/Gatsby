import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

export default function About({ data }) {
  const recipes = data.allContentfulRecipes.nodes
  return (
    <Layout>
      <SEO title="About" />
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
        <section className="featured-recipes">
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
