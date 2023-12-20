import styled from 'styled-components';

const Main = styled.main`
  width: 80dvw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin: 0 auto;
  padding: 84px;
  border-radius: 14px;
  background-color: var(--color-light-black);
  background-image: url('/vector.svg');
  background-position-x: 65%;
  background-position-y: 32px;
  background-repeat: no-repeat;
  transform: translateY(-140px);
`;

export default Main;
