import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./components/Login";
// import Main from "./components/Main";
import theme from "./theme/NormalTheme";
import TutorialsList from "./components/ConversationComponent";
import MainComponent from "./components/MainComponent";
import MainComponentCopyy from "./components/MainComponentCopyy";

// Aşağıda Routes Switch ile değiştirildi

const App = (props: any): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/chats" Component={MainComponent} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
