import styled from 'styled-components';
import pencil_1 from '../../img/pencil_1.jpg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  height: 100vh; 
  width: 50vw;
  background: url(${pencil_1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: right;
`;

export const Paragrafo = styled.p`
  width: 70%;
  padding: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;
  text-align: justify;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.button`
  height: 2rem;
  border: 3px solid #fff;
  background: #000;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  margin-top: 1rem;

  &:hover {
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }
`;