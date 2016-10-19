import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
          <h1>test</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere magni modi molestiae odio quam
            rem sit suscipit! Deleniti enim excepturi facere fugit magnam nobis nostrum perspiciatis provident quis
            veniam.</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
    );
  }
}

export default HomePage;
