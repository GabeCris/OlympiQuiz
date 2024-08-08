import ReactDOM from "react-dom/client";
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { GameProvider } from "./context/GameContext/GameProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GameProvider>
      {routes}
      <GlobalStyle />
    </GameProvider>
  </ThemeProvider>
);
