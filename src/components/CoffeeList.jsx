import styled from 'styled-components';
import { getCoffee } from '../services/apiCoffee';
import { useEffect, useState } from 'react';
import CoffeeItem from './CoffeeItem';

const StyledCoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 54px;
  row-gap: 72px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

function CoffeeList() {
  const [data, setData] = useState({});

  useEffect(function () {
    async function getCoffeeData() {
      const res = await getCoffee();
      setData(res);
    }
    getCoffeeData();
  }, []);

  if (!Object.keys(data).length) return null;

  return (
    <StyledCoffeeList>
      {data.map(coffee => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
    </StyledCoffeeList>
  );
}

export default CoffeeList;
