import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Frame = styled.div`
  width: 100%;
  background-color: #3f51b5;
`;

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0;
  margin-top: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  &:hove {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
