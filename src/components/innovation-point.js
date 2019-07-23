import React from 'react';

const InnovationPoint = ({x, y, dateString, creator, productName, icon, description}) => {
  const date = new Date(dateString);
  return (
    <div>

      <h2>{creator}</h2>
      {productName && <label>{productName}</label>}
      <time dateTime={date.toUTCString()}>{date.getFullYear()}</time>

    </div>
  );
};

export default InnovationPoint;
