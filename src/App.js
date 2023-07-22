import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./constans/constans";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./screens/main/Main";
import {Provider} from "react-redux";
import {store} from "./services/redux/store";

function App() {
  return (
   <Provider store={store} >
       <ThemeProvider theme={theme} >
           <BrowserRouter>
               <Routes>
                   <Route path={'/'} element={<Main />}>

                   </Route>
               </Routes>
           </BrowserRouter>
       </ThemeProvider>
   </Provider>
  );
}

export default App;
