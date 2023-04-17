import styled, { keyframes } from "styled-components";

export const HeroImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  margin-top: 170px;
`;

const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); } 
`;

export const AppWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.8;
  animation: ${float} 3s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    height: 100%;
  }
`;

export const App = styled.img`
display: flex;
flex-direction: column;
align-items: center;
  max-width: 15%;
  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: auto;
    margin-top: 0;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-top: -90px;
  flex-direction: column;
  justify-content: center;
  width: 50vh

`;
export const AppTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    color: #EF3A47;
    font-size: 3rem;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      line-height: 36px;
      text-align: center;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      line-height: 48px;
    }
  }

  h2 {
    color: #414b52;
    font-size: 1.5rem;
    text-align: center;
    line-height: 50px;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 36px;
      text-align: center;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      font-size: 2.2rem;
      line-height: 48px;
    }
  }
`;

export const AppPara = styled.p`
  color: #414b52;
  font-size: 1.3rem;
  margin-left: 40px;
  ${"" /* text-align: center; */}
  line-height: 54px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 36px;
  }
`;


