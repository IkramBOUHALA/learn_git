import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Jeon Jung-kook',
        bio:" Jeon Jung-kook (전정국), better known by the mononym Jung Kook (정국), is a South Korean singer-songwriter and record producer under Big Hit Music.He is a member in the boy group BTS, and has the positions of center, vocalist, dancer, visual and maknae.As a solo artist, he has released two self-produced digital singles, Still With Youin 2020 and My You in 2022. He then made his official debut with his first digital single Seven (feat. Latto) on July 14, 2023.",
        imgSrc: 'https://pbs.twimg.com/profile_images/1434396355540226053/eiGbdQrq_400x400.jpg',
        profession: 'Singer-songwriter',
      },
      show: false,
      interval: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, interval } = this.state;

    return (
      <div>
        <button style={{background:"#f4aeba"}} onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p style={{color:"#be3144"}}>Time since mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
