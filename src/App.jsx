import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Main from './ui/Main';
import Title from './ui/Title';
import Tab from './ui/Tab';
import Coffee from './ui/Coffee';

const StyledApp = styled.div`
  min-height: 100dvh;
  background-color: var(--color-dark-black);
`;

const BackgroundImage = styled.div`
  height: 280px;
  background-image: url('/bg-cafe.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <BackgroundImage />
        <Main>
          <Title />
          <Tab />
          <Coffee />
        </Main>
      </StyledApp>
    </>
  );
}

export default App;
