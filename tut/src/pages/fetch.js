import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>site title is : {title} </h1>
    </div>
  )
}

export default FetchData
