import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout";
import CaseStudyItem from "../components/case-study-item";
import SEO from "../components/seo";

const CaseStudiesList = props => {
  const d = props.data;
  return (
    <Layout>
      <SEO title="Case Studies" keywords={[
        'software product development',
        'go-to-market',
        'GTM',
        'startups',
        'product launch',
        'software-as-a-service',
        'SaaS',
        'User Experience Engineer'
      ]}/>
      <section>
        <h4>Products Developed</h4>
        <div className="flex flex-wrap flex-row justify-around mt-3 mb-3">

          <CaseStudyItem
            fluid={d.formApp.childImageSharp.fluid}
            caption="Payments Application"
            description="An embeddable form accepting credit cards and eCheck through a PCI-compliant platform."
            tags={['JavaScript', 'SCSS', 'jQuery', 'JSON']}
          />

          <CaseStudyItem
            fluid={d.profileEditor.childImageSharp.fluid}
            caption="Profile Editor"
            description="An app to enable users to personalize their appeal for payments."
            tags={['JavaScript', 'jQuery', 'JSON']}
          />

          <CaseStudyItem
            fluid={d.cognitive.childImageSharp.fluid}
            caption="Cognitive Video Search"
            description="Navigating a massive video collection? Ask it questions in natural language."
            tags={['React.js', 'Redux.js', 'SPA', 'IBM Watson']}
          />

          <CaseStudyItem
            fluid={d.checkoutIpad.childImageSharp.fluid}
            caption="Insurance Purchasing App"
            description="Single Page App empowering end-users to compare brands, quote, and bind car insurance."
            tags={['JavaScript', 'Ember', 'CSS']}
          />

          <CaseStudyItem
            fluid={d.dashboard.childImageSharp.fluid}
            caption="Product Marketing Dashboard"
            description="Analytics and tools for professional buyers in retail companies."
            tags={['d3.js', 'backbone.js']}
          />


        </div>
      </section>
    </Layout>
  )
};

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1040, maxHeight: 966, fit: COVER, cropFocus: NORTHWEST) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                presentationWidth
            }
        }
    }`;

export const pageQuery = graphql`
    query {

        formApp: file(relativePath: {eq: "product-screenshots/form-app.png"}) {
            ...fluidImage
        }
        profileEditor: file(relativePath: {eq: "product-screenshots/profile-editor.png"}) {
            ...fluidImage
        }
        checkoutIpad: file(relativePath: {eq: "product-screenshots/compare-auto.png"}) {
            childImageSharp {
                fluid(maxWidth: 1083, maxHeight: 780, fit: COVER, cropFocus: NORTHWEST) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    presentationWidth
                }
            }
        }
    
        cognitive: file(relativePath: {eq: "product-screenshots/cognitive-search-meditation-empathy.png"}) {
            childImageSharp {
                fluid(maxWidth: 1083, maxHeight: 780, fit: COVER, cropFocus: NORTH) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    presentationWidth
                }
            }
        }
        dashboard: file(relativePath: {eq: "product-screenshots/product-marketing-dashboard.png"}) {
            childImageSharp {
                fluid(maxWidth: 1040, maxHeight: 780, fit: COVER, cropFocus: NORTHWEST) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    presentationWidth
                }
            }
        }
    }`;

export default CaseStudiesList;
