import styled, { css } from 'styled-components';

const rates = {
  norates: css`
    color: var(--color-gray);
  `,
};

const StyledCoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImgWrap = styled.div`
  position: relative;
`;

const Popular = styled.span`
  padding: 8px 16px;
  position: absolute;
  top: 12px;
  left: 12px;
  color: var(--color-dark-black);
  font-size: 10px;
  font-weight: 500;
  border-radius: 1000px;
  background-color: var(--color-yellow);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 12px;
  object-fit: cover;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const Price = styled.span`
  padding: 6px 10px;
  color: var(--color-dark-black);
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  background-color: var(--color-light-green);
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;

  ${props => rates[props.rates]}
`;

const Votes = styled.div`
  color: var(--color-gray);
  font-size: 14px;
`;

const SoldOut = styled.div`
  color: var(--color-orange);
  font-size: 14px;
  font-weight: 600;
`;

function CoffeeItem({ coffee }) {
  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <StyledCoffeeItem>
      <ImgWrap>
        {popular && <Popular>Popular</Popular>}
        <Img src={image} alt="name" />
      </ImgWrap>
      <Div>
        <H2>{name}</H2>
        <Price>{price}</Price>
      </Div>
      <Div>
        <div>
          {!rating && (
            <Ratings rates="norates">
              <span>
                <img src="/Star.svg" alt="empty star icon" />
              </span>
              <span>No ratings</span>
            </Ratings>
          )}
          {rating && (
            <Ratings>
              <span>
                <img src="/Star_fill.svg" alt="filled star icon" />
              </span>
              <span>{rating}</span>
            </Ratings>
          )}
          {votes !== 0 && <Votes>({votes} votes)</Votes>}
        </div>
        {!available && <SoldOut>Sold Out</SoldOut>}
      </Div>
    </StyledCoffeeItem>
  );
}

export default CoffeeItem;
