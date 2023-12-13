import React, { Component } from 'react';
import Header from "./Header.js"
import './Header.css'
import './app.css'
import { render } from '@testing-library/react';

class App extends Component {


  constructor() {
    super();
    this.state= {
      subscribersListToShow:[]
    }
  }

  deleteHandler(message) {
    alert(message);
  }

  // Define subscribers as a class property
  // subscribers = [
  //   {
  //     id:1,
  //     name: "Shilpa Bhat",
  //     phone: "8888888888"
  //   },
  //   {
  //     id:2, 
  //     name: "Srishti",
  //     phone: "8888888888"
  //   }
  // ];

  render() {
    return (
      <div className='main'>
        <Header heading="Phone Directory" instructor="Shilpa Bhat"/>
        <div className='component-sub'>
          <button className='button'>Add</button>

          <div className='grid-container'>
            <span className='item'>Name</span>
            <span className='item'>Phone</span><br/><br/>
          </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return (
                <div className='grid-container' key={sub.id}>
                  <span className='item'>{sub.name}</span>
                  <span className='item'>{sub.phone}</span>
                  <span className='item action-btn-container'>
                    <button className='custom-btn delete-btn' onClick={this.deleteHandler.bind(this, "Delete Handler Clicked")}>Delete</button>
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
