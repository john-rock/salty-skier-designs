import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">

          {/* <h2 id="images">Images</h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Regular image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.medPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large image</figcaption>
          </figure>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.largePic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Full bleed image</figcaption>
          </figure>
          <hr /> */}
          {/* <h2 id="table">Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td> Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table> */}
          {/* <h2 id="buttons">Buttons</h2>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button primary large">
                Large
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
          </ul>
          <ul className="actions fit">
            <li>
              <a href="#" className="button primary fit">
                Fit
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Fit
              </a>
            </li>
          </ul>
          <ul className="actions fit small">
            <li>
              <a href="#" className="button primary fit small">
                Fit + Small
              </a>
            </li>
            <li>
              <a href="#" className="button fit small">
                Fit + Small
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Primary</span>
            </li>
            <li>
              <span className="button disabled">Default</span>
            </li>
          </ul> */}
          <h2 id="forms">Forms</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue
                  placeholder="Email"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value>- Category -</option>
                  <option value={1}>Manufacturing</option>
                  <option value={1}>Shipping</option>
                  <option value={1}>Administration</option>
                  <option value={1}>Human Resources</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  defaultChecked
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div className="col-4 col-12-small">
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div>
              {/* Break */}
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
