import React from "react";

import Layout from "../components/layout";
import Card from "../components/card";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import { FaReact, FaJs, FaLinkedinIn, FaTwitter, FaAngellist, FaGithub, FaEnvelope } from "react-icons/fa";

// TODO: Skills by Github palette. E.g. HTML #F1E059, CSS #563D7C

function IndexPage() {
  return (
    <StaticQuery
      query={graphql`query homeQuery {
        site {
          siteMetadata {
            title
            subtitle
            author
            description
            keywords
            
            linkedin
            email
            angelco
            github
            stackoverflow
            twitter

          }
        }
      }
      `}
      render={data => {
        const d = data.site.siteMetadata;
        return (<Layout>
          <SEO title={d.title} keywords={d.keywords}/>

          <section>
            <a id="about"/>
            <h1 className="text-6xl font-bold leading-none mb-3">{d.author}</h1>

            <h2 className="text-3xl font-bold inline-block mb-8 text-gray-700">
              {d.subtitle}
            </h2>

          </section>

          <a id="skills"/>
          <section>
            <h3>Skills</h3>
            <div className="flex mt-3 mb-3">
              <Card
                icon={<FaReact size="100%" color="rgb(97, 218, 251)" alt="ReactJS"
                               className="object-contain object-center"/>}
                caption="React"
                description="4 years of React.js production experience"
                tags={['React.js', 'Redux']}
              />
              <Card
                icon={<FaJs size="100%" color="#F1E059" alt="JavaScript" className="object-contain object-center"/>}
                caption="JavaScript"
                description="Career devoted to production JavaScript"
                tags={['ES6', 'ES7', 'EcmaScript']}
              />
            </div>
          </section>

          <a id="contact"/>
          <section>
            <h3>Contact</h3>
            <div className="mt-3 mb-3">
              <ul className="text-gray-7 text-4xl list-none list-outside">
                <li>
                  <a href={d.linkedin}
                     className="flex mb-2 hover:bg-gray-200 rounded"
                  >
                    <FaLinkedinIn size="2.25rem" className="m-2 fill-current"/><span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${d.email}`}
                     className="flex mb-2 hover:bg-gray-200 rounded"
                  >
                    <FaEnvelope size="2.25rem" className="m-2 fill-current"/> <span>Email</span>
                  </a>
                </li>
                <li>
                  <a href={d.angelco}
                     className="flex mb-2 hover:bg-gray-200 rounded"
                  >
                    <FaAngellist size="2.25rem" className="m-2 fill-current"/> AngelList
                  </a>
                </li>
                <li>
                  <a href={d.twitter}
                     className="flex mb-2 hover:bg-gray-200 rounded"
                  >
                    <FaTwitter size="2.25rem" className="m-2 fill-current"/><span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href={d.github}
                     className="flex mb-2 hover:bg-gray-200 rounded"
                  >
                    <FaGithub size="2.25rem" className="m-2 fill-current"/> Github
                  </a>
                </li>
              </ul>
            </div>
          </section>

        </Layout>)
      }
      }
    />
  );
}

export default IndexPage;
