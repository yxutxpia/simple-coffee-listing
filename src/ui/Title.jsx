import styled from 'styled-components';

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;

const P = styled.p`
  max-width: 50%;
  margin: 0 auto;
  color: var(--color-gray);
  line-height: 1.4;
  letter-spacing: 0.45px;

  @media only screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

function Title() {
  return (
    <StyledTitle>
      <H1>Our Collection</H1>
      <P>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </P>
    </StyledTitle>
  );
}

export default Title;
