import React from 'react';

const organisms = () => (
    <div style={{ 
        maxWidth: '600px', 
        padding: '60px 60px',
        margin: '0 auto',
        lineHeight: "1.8",
        fontFamily: "Arial",
        fontSize: "16px", 
        color: "#666"
    }}>
        <h1 style={{ textAlign: 'center' }}>Organisms</h1>
        <h4>
          Molecules give us some building blocks to work with, and we can now
          combine them together to form organisms. Organisms are groups of
          molecules joined together to form a relatively complex, distinct
          section of an interface.
        </h4>

        <p>
          We’re starting to get increasingly concrete. A client might not be
          terribly interested in the molecules of a design system, but with
          organisms we can see the final interface beginning to take shape. Dan
          Mall (who I’m working with on several projects) uses element collages,
          which articulate ideas for a few key organisms to facilitate client
          conversations and shape the visual direction (all without having to
          construct full comps). Organisms can consist of similar and/or
          different molecule types. For example, a masthead organism might
          consist of diverse components like a logo, primary navigation, search
          form, and list of social media channels. But a “product grid” organism
          might consist of the same molecule (possibly containing a product
          image, product title and price) repeated over and over again. Building
          up from molecules to organisms encourages creating standalone,
          portable, reusable components.
        </p>
    </div>
);

export default organisms;
