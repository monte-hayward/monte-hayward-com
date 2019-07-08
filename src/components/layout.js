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
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center w-full">
            {children}
          </main>
          <Footer siteMetadata={data.site.siteMetadata} />
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
