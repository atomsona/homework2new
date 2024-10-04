
import './App.css'

import Text from './components/text/Text';
import Button from './components/button/Button';
import Card from './components/card/card';
import Productcard from './components/productcard/Productcard';

function App() {
  
  return (
    <div className="App">
    <Text text="Welcome to the Store" fontSize="3rem" color="white" textAlign="center" />

    <Productcard
      name="razer laptop"
      price={999}
      quantity={10}
      description="A high-performance laptop with great features."
      color="#e0f7fa"
    />

    <Button text="Buy Now" backgroundColor="#28a745" width="200px" height="60px" />

    <Card name="Luka" age="13" />
    <Card name="Giorgi" age="15" />
    <Card name="Mariami" age="16" />
    <Card name="Nikolozi" age="14" />
  </div>
  )
}

export default App
