import logo from 'react';
import Category from './Category';
import Navi from './navi';
import ProductList from './ProductList';
import {Container, Row, Col} from "reactstrap"

function App() {
  return (
    <div>
      <Container>
         <Row>
            <Navi />
         </Row>
         <Row>
            <Col xs="3">
               <Category /> 
            </Col>
            <Col xs="9">
              <ProductList />
            </Col>
         </Row>
      </Container>
 
    </div>
  );
}

export default App;
