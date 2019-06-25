import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Footer from './footer'

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`query layoutQuery {
        site {
          siteMetadata {
            title
            subtitle
            author
            description
            
            linkedin
            email
            angelco
            github
            stackoverflow
            twitter
            
            dateInception
          }
        }
      }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </main>
          <Footer siteMetadata={data.site.siteMetadata} />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
