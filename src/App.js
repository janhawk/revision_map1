import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render() {
    const students = ['Evelyn', 'Glenn', 'Kourtney', 'Dawson', 'Maggie', 'Kyle'];
    const listStudents = students.map((students) =>
  <li>{students}</li>
    )
    return(
      <div className="list-group col-4">
       
        <li class="list-group-item">{listStudents}</li>
        {/* <li class="list-group-item">Glenn</li>
        <li class="list-group-item">Kourtney</li>
        <li class="list-group-item">Dawson</li>
        <li class="list-group-item">Maggie</li>
        <li class="list-group-item">Kyle</li> */}
      </div>
    );
  }
}
export default App;
