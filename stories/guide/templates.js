import React from 'react';

const templates = () => (
    <div style={{ 
        maxWidth: '600px', 
        padding: '60px 60px',
        margin: '0 auto',
        lineHeight: "1.8",
        fontFamily: "Arial",
        fontSize: "16px", 
        color: "#666"
    }}>
        <h1 style={{ textAlign: 'center' }}>Templates</h1>
        <h4>
          At the template stage, we break our chemistry analogy to get into
          language that makes more sense to our clients and our final output.
          Templates consist mostly of groups of organisms stitched together to
          form pages. It’s here where we start to see the design coming together
          and start seeing things like layout in action.
        </h4>

        <p>
          Templates are very concrete and provide context to all these
          relatively abstract molecules and organisms. Templates are also where
          clients start seeing the final design in place. In my experience
          working with this methodology, templates begin their life as HTML
          wireframes, but over time increase fidelity to ultimately become the
          final deliverable. Bearded Studio in Pittsburgh follow a similar
          process, where designs start grayscale and layout-less but slowly
          increase fidelity until the final design is in place.
        </p>
    </div>
);

export default templates;
