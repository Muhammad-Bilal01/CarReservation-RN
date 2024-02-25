import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import Demo from './src/screens/Demo';

// function App() {
//   return <MainNavigation />;
// }

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      {/* <Demo /> */}
    </Provider>
  );
};

export default App;
