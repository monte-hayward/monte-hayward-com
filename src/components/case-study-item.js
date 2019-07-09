import React from 'react';
import Img from 'gatsby-image';
import Hashtags from './hashtag';

const CaseStudyItem = ({ fluid, caption, description, tags }) => {
  return (
    <figure className="flex-none md:w-5/12 w-full rounded overflow-hidden shadow md:shadow-md md:mx-1 my-2">
      <Img
        fluid={fluid}
        fit="sharp.fit.cover"
        maxWidth="1040"
        maxHeight="1040"
        imgStyle={{ border: `1px solid rgba(205, 205, 205, 1)`, borderRadius: `4px` }}
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
