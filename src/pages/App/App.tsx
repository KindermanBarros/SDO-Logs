import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from './styles';
import { startingScreen } from '../../constants/startingScreen.const';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === 'Enter') {
        navigate('/home');
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
    </AppContainer>
  );
}

export default App;
