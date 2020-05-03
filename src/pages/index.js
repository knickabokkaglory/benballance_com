import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Ben Ballance - Digital Marketer, Person"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./ben-ballance-pic.svg" alt="Ben Ballance" />
        <h1>
          Hey there!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>You've found my site. I'm a digital marketer and soccer fan. Originally from the UK, I now live in Philadelphia, PA.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
