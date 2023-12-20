import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: -24px;
`;

const TabItem = styled.span`
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${props => props.active && 'var(--color-gray)'};
  cursor: pointer;
`;

function Tab() {
  return (
    <StyledTab>
      <TabItem active={true}>All Products</TabItem>
      <TabItem>Available Now</TabItem>
    </StyledTab>
  );
}

export default Tab;
