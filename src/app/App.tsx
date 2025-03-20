import {ThemeProvider} from "@mui/material"
import AppRoutes from "./AppRoutes";
import theme from "@core/theme/theme"


const App = () => {


  return (
    <>
    <ThemeProvider theme={theme}>
      <AppRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
