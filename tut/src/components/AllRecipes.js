import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql} from 'gatsby'

const query = graphql`
  {
    allContentfulRecipes(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data  = useStaticQuery(query)
  const recipes = data.allContentfulRecipes.nodes
  console.log(recipes)
  return (
    <div>
      all recipes
      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes}/>
    </div>
  )
}

export default AllRecipes
