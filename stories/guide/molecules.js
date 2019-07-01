import React from 'react';

const molecule = () => (
    <div style={{ 
        maxWidth: '600px', 
        padding: '60px 60px',
        margin: '0 auto',
        lineHeight: "1.8",
        fontFamily: "Arial",
        fontSize: "16px", 
        color: "#666"
    }}>
        <h1 style={{ textAlign: 'center' }}>Molecules</h1>
        <h4>
          Things start getting more interesting and tangible when we start
          combining atoms together. Molecules are groups of atoms bonded
          together and are the smallest fundamental units of a compound. These
          molecules take on their own properties and serve as the backbone of
          our design systems. For example, a form label, input or button aren’t
          too useful by themselves, but combine them together as a form and now
          they can actually do something together.
        </h4>

        <p>
          Building up to molecules from atoms encourages a “do one thing and do
          it well” mentality. While molecules can be complex, as a rule of thumb
          they are relatively simple combinations of atoms built for reuse.
        </p>
    </div>
);

export default molecule;
