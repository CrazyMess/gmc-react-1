import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Description from './Description';
import Name from './Name';
import Price from './Price';
import Image from './Image'

function App(props) {
  return (
    <Container className='mt-5'>
    <div>
      <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Price/>
          <Description/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    {props.firstName 
      ? "Hello, "+props.firstName 
      : "Hello there!"
    }
    {props.firstName && (
          <img 
            src="https://utalk.com/news/wp-content/uploads/2021/02/xGettyImages-1199393039-700x422.jpg.pagespeed.ic.oO1WPtHpnk.jpg" 
            alt="Welcome"
            style={{ marginTop: '10px', width: '100px', height: '100px' }}
          />
        )}
    </Container>
  );
}

export default App;
