import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image4.png"
import Image from "gatsby-image"

const getImages = graphql`
    {
    fixed: file(relativePath: {eq: "image3.jpg"}) {
        childImageSharp {
        fixed(width: 250, grayscale:true) {
            ...GatsbyImageSharpFixed
        }
        }
    }
    fluid: file(relativePath: {eq: "image4.png"}) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_tracedSVG
        }
        }
    }
    }
`

const Images = () => {
    const data = useStaticQuery(getImages)
    console.log(data)

  return <section className='images'>
      <article className='single-image'>
          <h3>basic image</h3>
          <img src={img} width="100%" alt=""/>
          <h2>Content</h2>
      </article>
      <article className='single-image'>
          <h3>fixed image/blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed} />
          <h2>Content</h2>
      </article>
      <article className='single-image'>
          <h3>fluid image/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <h2>Content</h2>
      </article>
  </section>
}

export default Images
