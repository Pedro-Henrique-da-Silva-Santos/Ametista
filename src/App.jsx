import Contexto from './components/Contexto'
import Inicio from './components/Inicio'
import Pagamento from './components/Pagamento'
import Presentation from './components/Presentation'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrobar-width: none;
  color : #fff;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
      <Container>
        <Inicio />
        <Contexto />
        <Presentation />
        <Pagamento />
      </Container>
  )
}

export default App
