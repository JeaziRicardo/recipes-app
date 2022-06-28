import React, { useState, useEffect } from 'react';
import { fetchAllNationalities } from '../services/API';

function DropDown() {
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { meals } = await fetchAllNationalities();
      setNationalities(meals);
    }
    fetchData();
  }, []);

  return (
    <section>
      <select
        data-testid="explore-by-nationality-dropdown"
      >
        { nationalities.map(({ strArea }) => (
          <option
            key={ strArea }
            value={ strArea }
            data-testid={ `${strArea}-option` }
          >
            { strArea }
          </option>
        )) }
      </select>
    </section>
  );
}

export default DropDown;
