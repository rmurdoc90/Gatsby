import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
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
            <form className="form contact-form">
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
      </main>
    </Layout>
  )
}
