import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pencil_2 from '../img/pencil_2.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 100%;
  max-width: 991px; */
  /* margin: 0 auto; */
  /* background-color: #555; */
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
  background: url(${pencil_2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: right;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;