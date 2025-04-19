import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import store from "@core/store";
import { ThemeProvider } from "@emotion/react";
import theme from "@core/theme/theme";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
      <AppRoutes />
      </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
