import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
const slugify = require("slugify")

const Tagslist = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const tagSlug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tagslist
