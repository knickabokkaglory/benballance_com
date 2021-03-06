import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Contact Me"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Contact Me</h1>
        <p>Fill out the form below, hit submit, and I'll get back to you ASAP. Thanks!</p>
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        
      </Layout>
    )
  }
}

export default ContactPage
