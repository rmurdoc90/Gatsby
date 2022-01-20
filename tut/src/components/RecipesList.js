import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from 'slugify'

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipes => {
        const { id, title, image, prepTime, cookTime } = recipes
        const slug = slugify(title, {lower:true})
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={image.gatsbyImageData}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | cook : {cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
