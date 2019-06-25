import React from "react";

const Hashtags = ({texts}) => {
  return (
    texts.map(text => <span
      key={text}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">#{text}</span>)

  );
};


export default Hashtags;

