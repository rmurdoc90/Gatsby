import React from "react"
import setupTags from "../utils/setupTags"

const Tagslist = ({recipes}) => {
  const newTags = setupTags(recipes)
  console.log(recipes)
  return recipes
}

export default Tagslist
