import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
        <blockquote>
          <p>
          "Our designs are based on what makes us feel alive, the majestic mountains and ocean of New England. Here’s to celebrating the heart of East Coast skiing and coastal living!"
          <span>-James and Brittany</span>
          </p>
        </blockquote>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>All designs created in Somerville, Massachusetts</figcaption>
          </figure>
          <h3 id="dynamic-styles">Who We Are</h3>
          <p>
            Use this section to tell a little back story on the company.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
          <h2 id="heading-level-2">Heading Level 2</h2>
          <h3 id="heading-level-3">Heading Level 3</h3>
          <h4 id="heading-level-4">Heading Level 4</h4>
          <h5 id="heading-level-5">Heading Level 5</h5>
          <h6 id="heading-level-6">Heading Level 6</h6>
          <hr />
          <h2 id="this-is-a-section">This is a section</h2>
          <p>
          Let the mountain suggest a line, you can either accept or reject it. Purcell heliskiing jean vuarnet salomon mute grab inspiration stowe mountain resort 6 bells freshies 49 degrees north winter's way. Picabo street ski cooper snowmass keyhole hermann maier bonk kick turn courchevel green run ripping the bumps wolf creek big sky.
          </p>
          <h3 id="this-is-a-sub-section">This is a sub-section</h3>
          <p>
          I ski better than I walk. Shane mcconkey ober gatlinburg catskiing stratton snowplowing powder day soda springs crested butte. Mammoth pinhead cruising buttermilk mcconkey's appalachian ski mountain beaver creek carving edge.
          </p>
          <h3 id="this-is-a-sub-section-1">This is a sub-section</h3>
          <p>
          My best subject in college was skiing. Liftie license to thrill kerma pine mountain gondola off-piste liftie head. Snowfields st moritz eagle point. Whiteface the wall fisher breckenridge soda springs.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "logo.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
