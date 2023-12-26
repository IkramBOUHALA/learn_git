
import './App.css';
import Card from 'react-bootstrap/Card';
import'bootstrap/dist/css/bootstrap.min.css';
import Image from './Image';
import Name from './Name';
import Description from './Description';
import Price from './Prices';
import Product from './Product';
import User from './User';



function App() {
  return (
    <>
    <User />
    <Card style={{ width: '18rem', marginLeft:'41%'}} bg="danger" data-bs-theme="dark" >
    <Image image= {Product.image} />
    <Card.Body>
      <Name name= {Product.name} />
      <Price price= {Product.price} />
      <Description description= {Product.description}/>
  </Card.Body>
  </Card>
  </>
);
}

export default App;
