import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContainer, Secret } from './styles';
import { startingScreen } from '../../constants/startingScreen.const';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === 'Enter') {
        navigate('/log');
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [navigate]);

  return (
    <AppContainer>
      <pre>{startingScreen}</pre>
      <Secret variant="h4">It lurks in the dark</Secret>
      <Secret variant="h4">Don't touch the Bloom</Secret>
    </AppContainer>
  );
}

export default App;
