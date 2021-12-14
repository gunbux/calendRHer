import React from 'react';
import Calender from "./pages/calender/Calender";
import {Provider} from "react-redux";
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Calender/>
    </Provider>
  );
}

export default App;
