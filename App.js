import React, { PureComponent } from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import Currencies from './src/screens/Currencies';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Currencies />
      </Provider>
    )
  }
}

export default App;
