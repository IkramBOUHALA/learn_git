
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player1 = (P) => {
    const
        {name, team, nationality, jerseyNumber, age, imageUrl} = P
    return (
        <Card style={{ width: '18rem', marginLeft:50 }}>
        <Card.Img variant="top" src= {imageUrl} style={{height: '250px' }}/>
        <Card.Body>
          <Card.Title> Name: {name} </Card.Title>
          <Card.Text>
            Team: {team}
          </Card.Text>
          <Card.Text>
            Nationality: {nationality}
          </Card.Text>
          <Card.Text>
            Jeresey Number: {jerseyNumber}
          </Card.Text>
          <Card.Text>
            Age: {age}
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
}
export default Player1;