import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from './styles';
import { startingScreen } from '../../constants/startingScreen.const';
import { TextArtStyled } from '../../shared/components/TextArtStyled';

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
      <TextArtStyled>{startingScreen}</TextArtStyled>
    </AppContainer>
  );
}

export default App;
