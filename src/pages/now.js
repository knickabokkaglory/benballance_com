import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NowPage extends React.Component {
  render() {
    const siteTitle = "Ben Ballance - Digital Marketer, Person"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Now"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>What I'm Doing Now</h1>
        <p>The goal of this page is to give readers an overview of what I'm currently doing, working on, and where my interests lie. I currently live in the Mt. Airy neighborhood of Philadelphia with my partner, <a href="https://www.brittanybarbato.com" target="_blank">Brittany</a>, and our cat, Bhaji.</p>
        <h2>Work</h2>
        <p>I am an SEO Manager at <a href="https://www.seerinteractive.com" target="_blank">Seer Interative</a> - a search marketing agency with offices in Philadelphia and San Diego. I consult with clients to help them strategize around how organic search can contribute to their overall business goals</p>
        <h2>Programming</h2>
        <p>After dabbling in Python off-and-on the past couple of years, I'm currently learning the basics of JavaScript. There are two primary reasons for this:</p>
        <ol>
          <li>As an SEO consultant, an increasing number of clients' websites are more-and-more reliant on JS. Being able to grasp the full implications of this seems like a smart move for any SEO practitioner.</li>
          <li>To create anything of value on the web (or even to worth with people who do) JS is key.</li>
        </ol>
        <h2>Reading</h2>
        <p>Here are some books I have recently read or am planning on reading soon:</p>
        <ul>
          <li>Linchpin by Seth Godin</li>
          <li>Stillness is the Key by Ryan Holiday</li>
          <li>This is Marketing by Seth Godin</li>
          <li>Head First JavaScript Programming by Eric Freeman and Elisabeth Robson</li>
          <li>The Daily Stoic by Ryan Holiday & Stephen Hansen</li>
          <li>Normal People by Sally Rooney</li>
        </ul>
        <h2>Running</h2>
        <p>A fortunate side effect of the COVID-19 pandemic has been my renewed focus on running. After being woefully out of shape the past few years, I'm targeting running a 10K at a sub 8-min/mile pace by the end of this year.</p>
        <i>This page was inspired by Derek Sivers and his <a href="https://www.nownownow.com">Now Now Now project</a> and was last updated on July 8, 2020.</i>
      </Layout>
    )
  }
}

export default NowPage
