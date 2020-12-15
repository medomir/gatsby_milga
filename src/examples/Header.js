import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h3>title: {data.site.siteMetadata.title}</h3>
      <h3>name: {data.site.siteMetadata.person.name}</h3> */}
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header
