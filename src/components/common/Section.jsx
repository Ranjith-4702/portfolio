import React from 'react';

const Section = ({ id, className, children }) => {
  return (
    <section 
      id={id} 
      className={`w-full py-16 md:py-32 relative overflow-hidden scroll-mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;