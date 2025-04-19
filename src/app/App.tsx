import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import store from "@core/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
