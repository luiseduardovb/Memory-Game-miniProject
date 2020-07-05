import React from "react";

//Components
import CardList from "./components/CardList";
// import handleShuffle from "./components/ShuffleCards";

//Styling
import { ThemeProvider } from "styled-components";
import {
  EasyButton,
  DifficultyWrapper,
  GlobalStyle,
  HardButton,
  MediumButton,
  MultiPlayer,
  PlayerWrapper,
  SinglePlayer,
  Title,
} from "./styles";

const theme = {
  backgroundColor: "#7a1f9b",
  red: "#d13730",
  white: "#ffffff",
  yellow: "#ffec19",
  green: "#86fa67",
  black: "#000000",
  grey: "808080",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title>Why so serious?</Title>
      <PlayerWrapper>
        <SinglePlayer>Single</SinglePlayer>
        <MultiPlayer>Multiplayer</MultiPlayer>
      </PlayerWrapper>
      <DifficultyWrapper>
        <EasyButton>Easy</EasyButton>
        <MediumButton>Medium</MediumButton>
        <HardButton>Hard</HardButton>
      </DifficultyWrapper>
      <GlobalStyle />
      <CardList />
    </ThemeProvider>
  );
}

export default App;
