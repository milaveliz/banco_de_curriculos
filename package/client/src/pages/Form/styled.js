import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pencil_2 from '../../img/pencil_2.jpg'

export const Container = styled.div`
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
  background: url(${pencil_2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: right;
`;

export const Form = styled.form`
  height: 100%; 
  width: 35vw;
  margin-left: 5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const H2 = styled.h2`
  align-items: center;
  text-align: center;
  font-size: 1rem;
`;

export const Paragrafo = styled.p`
  text-align: center;
  font-size: 0.7rem;
`;

export const Input = styled.input`
    border: 3px solid #ccc;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 100%;
    background-color: #000;
    color: #aaaa;
    font-size: 1rem;
    font-weight: bold; 
    margin-bottom: 1rem;   

  &:hover {
    background-color: #fff;
    opacity: 0.2;
    color: #000;
  }
`;

export const Alert = styled.div`
    margin-bottom: 2rem;
`;

export const Button = styled.button`
  height: 2rem;
  width: 6rem;
  margin: 0.5rem;
  border: 3px solid #fff;
  background: #000;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    border-radius: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;