import React from 'react';
import './style.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import MedicalTreatmentList from './MedicalTreatmentList';

function SearchBar(props) {
  return (
    <input
      type="text"
      onChange={(e) => props.onSearch(e.target.value)}
      value={props.value}
    />
  );
}

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const users = [
    { name: 'Elva', id: '1', type: 'health1', categroy: '111' },
    { name: 'Mona', id: '2', type: 'health2', categroy: '112' },
    { name: 'Jack', id: '3', type: 'health3', categroy: '122' },
    { name: 'Layla', id: '4', type: 'health4', categroy: '132' },
    { name: 'Katie', id: '5', type: 'health5', categroy: '142' },
  
  ];

  const filterNames = ({ type }) => {
    return type.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  return (
    <div className="App">
      <MedicalTreatmentList json={users} />

      <h2>Search</h2>
      <SearchBar onSearch={setSearchValue} value={searchValue} />

      <ul>
        {users.filter(filterNames).map((MedicalTreatmentList) => {
          return (
            <li key={MedicalTreatmentList.id}>
              {MedicalTreatmentList.name}
              {MedicalTreatmentList.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root')); // run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
