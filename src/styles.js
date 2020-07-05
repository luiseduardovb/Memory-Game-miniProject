import styled, { createGlobalStyle } from "styled-components";

const CardWrapper = styled.div`
  img {
    width: 190px;
    height: 300px;
    border: 1px solid #f1f1f1;
    border-radius: 30px;
    margin: 1px;
    transition: all 0.6s;
  }
`;

const DifficultyWrapper = styled.div`
  position: absolute;
  right: 1;
  display: inline-block;
  margin: 5%;
  align-items: center;
  justify-content: center;
`;

const EasyButton = styled.button`
  font-size: 1em;
  font-weight: bolder;
  width: 8em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-align: center;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.backgroundColor};
`;

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.backgroundColor}
    }
`;

const HardButton = styled.button`
  font-size: 1em;
  font-weight: bolder;
  width: 8em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-align: center;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.backgroundColor};
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const MediumButton = styled.button`
  font-size: 1em;
  font-weight: bolder;
  width: 8em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.backgroundColor};
`;

const MultiPlayer = styled.button`
  font-size: 1em;
  font-weight: bolder;
  width: 9em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-align: center;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.backgroundColor};
`;

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

const ResetButton = styled.button`

  font-size: 1em;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-align: center;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
`;

const ResetWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 30px;
`;

const SinglePlayer = styled.button`
  font-size: 1em;
  font-weight: bolder;
  width: 9em;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.8em 2em;
  margin: 0 0.8em 0.8em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-align: center;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-size: 8em;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => props.theme.yellow};
  margin: 30px;
`;

export {
  CardWrapper,
  EasyButton,
  DifficultyWrapper,
  GlobalStyle,
  HardButton,
  ListWrapper,
  MediumButton,
  MultiPlayer,
  PlayerWrapper,
  ResetButton,
  ResetWrapper,
  SinglePlayer,
  Title,
};
