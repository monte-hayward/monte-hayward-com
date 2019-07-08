import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      <nav>
        <div className="flex flex-wrap items-center justify-between text-gray-7">
          <Link to="/" className="flex items-center no-underline">
            <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
          </Link>

          <button
            className="block md:hidden flex items-center px-3 py-2 rounded color-current"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
              } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <div className="text-lg md:text-sm">
              <Link
                to="/#skills"
                className="block md:inline-block my-1 mr-6 md:mt-4 p-2 h-10 md:my-2 bg-gray-200 md:bg-white rounded"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                skills
              </Link>

              <Link
                to="/#contact"
                className="block md:inline-block my-1 mr-6 md:mt-4 p-2 h-10 md:my-2 bg-gray-200 md:bg-white rounded"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                contact
              </Link>

              <Link
                to="/case-studies"
                className="block md:inline-block my-1 mr-6 md:mt-4 p-2 h-10 md:my-2 bg-gray-200 md:bg-white rounded"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                case studies
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
