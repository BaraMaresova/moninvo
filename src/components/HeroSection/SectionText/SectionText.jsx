import React, { useState, useEffect } from 'react';

export const SectionText = () => {
  const mottos = ['JEDNODUŠE', 'PŘEHLEDNĚ', 'EFEKTIVNĚ'];
  const [stavMotto, setStavMotto] = useState(0);

  const changeText = () => {
    setTimeout(() => {
      setStavMotto((stavMotto + 1) % mottos.length);
    }, 3000);
  };

  useEffect(changeText, [stavMotto]);

  return (
    <div className="section-text">
      <h1>
        KONTROLUJTE <br /> své náklady
      </h1>
      <h1 className="motto">{mottos[stavMotto]}</h1>
    </div>
  );
};
