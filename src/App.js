import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render() {
    const students = ['Evelyn', 'Glenn', 'Kourtney', 'Dawson', 'Maggie', 'Kyle'];
    const listStudents = students.map((students) =>
    <li className="list-group-item">{students}</li>
    )
    return(
     
        <ul className="list-group col-4">
          <li className="list-group-item">{listStudents}</li>
        </ul>
      
    );
  }
}
export default App;
