import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push('form');
  };

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Image></S.Image>
      </S.Content>
      
      <S.Content>
        <S.Paragrafo>Somos a JobsNET, uma empresa especialista em recrutamento e seleção de profissionais nas mais diversas áreas!</S.Paragrafo>
        <S.Paragrafo>Queremos conectar os proffisionais à sonhada oportuidade de emprego.</S.Paragrafo>
        <S.Paragrafo>Para isso é muio fácil, você só precisa se cadastrar!</S.Paragrafo>
        <S.Button type="button" onClick={handleClick}>
          Cadastre seu currículo!
        </S.Button>
      </S.Content>
    </S.HomeContainer>
  );
}