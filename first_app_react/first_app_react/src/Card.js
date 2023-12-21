import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/vintage-botanical-illustration_316032-7469.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais" />
      <Card.Body>
        <Card.Title>card of flowers</Card.Title>
        <Card.Text>
        Flowers always make people better, happier,
        and more helpful; they are sunshine, food and medicine to the mind
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Rose</ListGroup.Item>
        <ListGroup.Item>Tulip</ListGroup.Item>
        <ListGroup.Item>Orchid</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;