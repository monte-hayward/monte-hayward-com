import React from 'react';
import Layout from '../components/layout';

const PrivacyPage = () => (<Layout>
    <h1>Privacy</h1>
    <section className="section content">
      <p>
        This site uses Google Analytics' Display Advertising feature. The site contains no ads. Analytics are in place
        to better know and serve the site audience.
        For more information about this Google Display Advertising, please visit the <a href="http://www.google.com/policies/privacy/ads/#toc-analytics">Google Advertising Privacy FAQ</a>.
      </p>
      <p>
        The site enables Google Analytics to collect data about traffic via <a
        href="https://www.google.com/policies/privacy/key-terms/#toc-terms-cookie">Google advertising</a> and <a
        href="https://www.google.com/policies/privacy/key-terms/#toc-terms-identifier">anonymous
          identifiers</a>, in addition to data collected through a standard Google Analytics implementation.
      </p>
      <p>
        This site will not facilitate the merging of personally-identifiable information with non-personally
        identifiable information collected through any Google advertising product or feature unless given robust notice
        of, and the user's prior affirmative (i.e., opt-in) consent to, that merger.
      </p>
      <h3>Features Used by this Site</h3>
      <div className="content">
        <ul>
          <li>Google Analytics</li>
          <li>Google Display Advertising cookie</li>
          <li>Google Analytics Demographics and Interest Reporting in aggregate (e.g. "Session Interest Categories : 4.5%
            Sports/ Individual Sports/
            Running")
          </li>
        </ul>
      </div>
      <p>
        No further usage of the information is planned.
      </p>
      <p>
        Site visitors can opt-out of the Google Analytics Advertising Features. Click here to view Google Analytics' <a
        href="https://tools.google.com/dlpage/gaoptout/">currently available opt-outs for the web</a>. In addition, Google
        provides Ads Settings, and Ad Settings for mobile apps. The NAI also offers
        a <a href="http://www.networkadvertising.org/choices/">consumer opt-out</a>.
      </p>
    </section>
  </Layout>
);

export default PrivacyPage;
