import logo from 'react';
import Category from './Category';
import Navi from './navi';
import ProductList from './ProductList';
import {Container, Row, Col} from "reactstrap"

function App() {
  let titleProduct = "Product List"
  let titleCategory = "Category List"
  return (
    <div>
      <Container>
         <Row>
            <Navi />
         </Row>
         <Row>
            <Col xs="3">
               <Category title="Category List" /> 
            </Col>
            <Col xs="9">
              <ProductList title="Product List"/>
            </Col>
         </Row>
      </Container>
 
    </div>
  );
}

export default App;
