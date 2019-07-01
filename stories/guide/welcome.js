import React from 'react';

import { select } from '@storybook/addon-knobs/react';

import atomic from '../../src/media/images/Atomic_img_001.png';

const welcome = () => (
    <div style={{ 
        maxWidth: '600px', 
        padding: '60px 60px',
        margin: '0 auto',
        lineHeight: "1.8",
        fontFamily: "Arial",
        fontSize: "16px", 
        color: "#666"
    }}>
          <h1 style={{ textAlign: 'center' }}>Welcome to the Styleguide</h1>
          <h4>
            Here, you will find all the relevant styles and components
            associated with your new web application.
          </h4>

          <h3>Project Structure</h3>
          <p>Atomic Design - designed by @brad_frost</p>
          <img
            style={{
              width: '100%',
              marginBottom: '1rem',
              boxShadow: '0 0 2px #ddd',
              backgroundColor: "#fff"
            }}
            src={atomic}
            alt="Atomic Design"
          />
        <p>
            In the left hand menu, you will see the project divided up with this
            structure. Atoms are the smallest components possible, with
            molecules being combinations of these and so on. Pages will show you
            example pages for the the current project, however these are not
            exhaustive.
        </p>
    </div>
);
export default welcome;
