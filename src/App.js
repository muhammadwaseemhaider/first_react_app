import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hi() {
  return <div className="Hi"> Hello <strong>Waseem</strong>
  <h1 className="Hi_header">This is my first heading</h1>   
  <ol className="Hi_list">
    <li>Hello name</li>
    <li>ordered list</li>
    <li>unordered list
    <ul className="Hi_list">
    <li>Use className</li>
    <li>Create index.css</li>
    <li>Add "import './index.css'"</li>
  </ul>
    </li>
  </ol>
   {5+10}

  </div>;
}

export default Hi;