import styled from 'styled-components';
import pencil_1 from '../../img/pencil_1.jpg'


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  /* height: 100vh;
  width: 100vw; */
`;

export const Content = styled.div`
  /* width: 100vw; */
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

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`