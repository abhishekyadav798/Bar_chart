import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from 'reactstrap';
import Chart_bar from './Chart_bar'


function App() {
  return (
    <div >
      <Container>
        <Row>
          <Col>
            <Chart_bar/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
