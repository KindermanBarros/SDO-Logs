import { Typography } from '@mui/material';
import { choiLabsScreen } from '../../constants/choiLabsScreen.const';
import {
  VerticalContainer,
  EmbededImage,
  ImageContainer,
  Secret,
} from './styles';
import { researchChoiLabs } from '../../constants/researchChoiLabs.const';
import InfectedPicture from '/src/shared/assets/Images/infected.jpeg';
import { arrowASCII } from '../../constants/arrow.const';
import { useNavigate } from 'react-router-dom';
import { TextArtStyled } from '../../shared/components/TextArtStyled';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <VerticalContainer>
      <TextArtStyled>{choiLabsScreen}</TextArtStyled>

      <Typography variant="h4">
        Os esporos da entity chamada de Bloom pelos cientistas é promissor,
        atualmente está sendo capaz de até mesmo a ajudar com <br /> Se você
        estiver lendo isso dentro do laboratório, não respire o gás laranja, não
        entre em contato com nada, o mero contato pode causar a infection.
      </Typography>

      <ImageContainer>
        <EmbededImage src={InfectedPicture} alt="Infected" />
        <VerticalContainer>
          <Secret variant="h4">I need you to help me, I am trapped</Secret>
          <Secret variant="h4">Follow my call, você consegue me achar</Secret>
        </VerticalContainer>
      </ImageContainer>

      <Typography variant="h4">{researchChoiLabs}</Typography>

      <TextArtStyled onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        {arrowASCII}
      </TextArtStyled>
    </VerticalContainer>
  );
}

export default HomePage;
