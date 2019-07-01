import React from 'react';

const atoms = () => (
    <div style={{ 
        maxWidth: '600px', 
        padding: '60px 60px',
        margin: '0 auto',
        lineHeight: "1.8",
        fontFamily: "Arial",
        fontSize: "16px", 
        color: "#666"
    }}>
        <h1 style={{ textAlign: 'center' }}>Atoms</h1>
        <h4>
            Atoms are the basic building blocks of matter. Applied to web
            interfaces, atoms are our HTML tags, such as a form label, an input or
            a button.
        </h4>
        <p>
            Atoms can also include more abstract elements like color palettes,
            fonts and even more invisible aspects of an interface like animations.
            Like atoms in nature they’re fairly abstract and often not terribly
            useful on their own. However, they’re good as a reference in the
            context of a pattern library as you can see all your global styles
            laid out at a glance.
        </p>
    </div>
);

export default atoms;
