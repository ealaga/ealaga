import styled, { keyframes } from "styled-components";

export const HeroImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  margin-top: 130px;
  @media screen and (max-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    ${"" /* background: #C3E0E5; */}
    background: none;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #EF3A47;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
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

export const BtnWrap2 = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    grid-gap: 100px;
    padding: 0 50px;
    margin-top: 30px;
    margin-bottom: 20px;
    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
`;

export const ServicesIcon = styled.img`
  height: 12vh;
  width: 12vh;
  margin-bottom: 10px;
  border-radius: 10px;

  @media screen and (max-width: 1340px) {
    height: 90px;
    width: 100px;
  }



  @media screen and (max-width: 780px) {
   
  }
  @media screen and (max-width: 480px) {
   
  }
`;


export const ServicesWrappers3 = styled.div`
        max-width: 100vh;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        grid-gap: 50px;
        padding: 0 0px;

      @media screen and (max-width: 1340px) {
        grid-template-columns: 1fr 1fr;
        max-width: 100vh;
      }

      @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
        max-width: 100vh;
      }

      @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        max-width: 100vh;
      }
`;
export const ServicesH2 = styled.h2`
  font-size: 3.5vh;
  color: #EF3A47;
  font-weight: bold;



`;

export const ServicesCard3 = styled.div`
  background: linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%));
  display: flex;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  max-height: 25vh;
  min-height: 25vh;
  max-width: 30vh;
  min-width: 30vh;
  padding: 30px;
  margin-bottom: 60px;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
  transition: all 0.3s ease-in-out ;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4 ease-in-out;
    box-shadow: 0 5px 10px rgba(255, 0, 0, 0.6);
    cursor: pointer;
    h2 {
      transition: all 0.4s ease-in-out ;
      color: #EF3A47;
    }

  }
  @media screen and (max-width: 768px) {
    max-height: 25vh;
  min-height: 25vh;
  max-width: 30vh;
  min-width: 30vh;
  }
  @media screen and (max-width: 480px) {
    max-height: 25vh;
    min-height: 25vh;
    max-width: 30vh;
    min-width: 30vh;
    padding: 10px;
  }
`;


export const App = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 50%;
    height: 150px;
    width: 150px;
 

  border:10px solid white;
  border-radius: 500px;
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.3);

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
text-align: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AppTitle = styled.div`

  h1 {
    color: #EF3A47;
    font-size: 1.5rem;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
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

  h2 {
    color: #EF3A47;
    font-size: 1.2rem;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 0px;
    margin-top: 0px;

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

  h6 {
    font-size: 1rem;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    margin-bottom: -10px;
    margin-top: -30px;

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


