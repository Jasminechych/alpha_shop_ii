import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import Footer from "src/components/Footer/Footer";
import { useThemeData } from "src/ThemeContext.jsx";

import "src/reset.scss";
// import "src/theme-light.scss";
import "src/theme-dark.scss";


function App() {
  const { isDark } = useThemeData();

  return (
    <div className="App" data-theme={isDark ? "dark" : ""}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
