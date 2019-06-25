import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaLinkedinIn, FaTwitter, FaAngellist, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = ({ siteMetadata }) => {

  return (
    <footer className="bg-gray-700 h-24 p-8 text-sm">
      <nav className="flex justify-between p-0 w-full">
        <a href={siteMetadata.linkedin} title="LinkedIn">
          <FaLinkedinIn size="1.25rem" color="white"/>
        </a>

        <a href={`mailto:${siteMetadata.email}`} title="Email">
          <FaEnvelope size="1.25rem" color="white"/>
        </a>


        <a href={siteMetadata.angelco} title="AngelList">
          <FaAngellist size="1.25rem" color="white"/>
        </a>

        <a href={siteMetadata.twitter} title="Twitter">
          <FaTwitter size="1.25rem" color="white"/>
        </a>

        <a href={siteMetadata.github} title="Github">
          <FaGithub size="1.25rem" color="white"/>
        </a>

        <Link to={'/privacy/'} className="font-bold no-underline text-white">Privacy</Link>
      </nav>
      <p className="no-underline h-12 p-2 text-white text-sm text-center mx-auto">
        &copy; {siteMetadata.dateInception} - {new Date().getFullYear()} Copyright {siteMetadata.author}
      </p>
    </footer>
  )
};

Footer.propTypes = {
  siteMetadata: PropTypes.shape({
    author: PropTypes.string,
    linkedin: PropTypes.url,
    angelco: PropTypes.url,
    twitter: PropTypes.url,
    github: PropTypes.url,
    dateInception: PropTypes.string,
  })
};


export default Footer;
