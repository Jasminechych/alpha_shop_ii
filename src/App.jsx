import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import { ThemeProvider } from "src/ThemeContext";

import "src/reset.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
