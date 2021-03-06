import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Contact({ data }) {
  const recipes = data.allContentfulRecipes.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section classname="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Squid yr offal keffiyeh, cold-pressed occupy kickstarter. Kale
              chips tousled butcher taiyaki roof party glossier marfa paleo
              crucifix.
            </p>
            <p>
              Williamsburg four loko vape skateboard palo santo, tumblr raclette
              leggings. Heirloom vegan plaid kombucha jean shorts.
            </p>
            <p>Street art pork belly stumptown squid synth gluten-free.</p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mpzbqnzo"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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
