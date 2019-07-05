import React from 'react';
import Img from 'gatsby-image';
import Hashtags from './hashtag';

const CaseStudyItem = ({ fluid, caption, description, tags }) => {
  // or fixed
  return (
    <figure className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg m-1">
      <Img
        fluid={fluid}
        fit="sharp.fit.contain"
      />
      <figcaption className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{caption}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </figcaption>
      <div className="px-6 py-4">
        <Hashtags texts={tags}/>
      </div>
    </figure>
  )
};

export default CaseStudyItem;
