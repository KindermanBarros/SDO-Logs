import { Typography } from '@mui/material';
import { choiLabsScreen } from '../../constants/choiLabsScreen.const';
import { AppContainer } from './styles';
import { researchChoiLabs } from '../../constants/researchChoiLabs.const';
import InfectedPicture from '/src/shared/assets/Images/infected.jpeg';

function HomePage() {
  return (
    <AppContainer>
      <pre>{choiLabsScreen}</pre>

      <Typography variant="h4">
        Os esporos da entity chamada de Bloom pelos cientistas é promissor,
        atualmente está sendo capaz de até mesmo a ajudar com
      </Typography>
      <Typography variant="h4">
        Se você estiver lendo isso dentro do laboratório, não respire o gás
        laranja, não entre em contato com nada, o mero contato pode causar a
        infection.
      </Typography>
      <img
        style={{
          width: '500px',
          height: 'auto',
          display: 'block',
          margin: 'auto',
        }}
        src={InfectedPicture}
        alt="Infected"
      />
      <Typography variant="h4">{researchChoiLabs}</Typography>
    </AppContainer>
  );
}

export default HomePage;
