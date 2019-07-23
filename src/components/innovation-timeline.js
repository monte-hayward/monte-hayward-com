import React from 'react';

const InnovationTimeline = (
  {
    category,
    points,
    title,
    summary
  }
) => {

  return (
    <article>
      <figure>
        <svg>
          <g>

          </g>
        </svg>
        <figcaption>
          {caption}
        </figcaption>
      </figure>
      <section>
        <h1>{title}</h1>
        <p>
          {summary}
        </p>
        {points.map(point => <p>{point.description}</p>)}
      </section>
    </article>
  );
};

export default InnovationTimeline;
