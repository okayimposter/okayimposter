import React from 'react';
import './styles/main.scss';


const mockData = [
  {
    name: "Andrew",
    org: "google",
    role: "product designer",
    imgUri: "https://randomuser.me/api/portraits/men/93.jpg",
    timestamp: 1568592000
  },
  {
    name: "Remi",
    org: "apple",
    role: "Technical writer",
    imgUri: "https://randomuser.me/api/portraits/women/10.jpg",
    timestamp: 1568592000
  },  
  {
    name: "Albert",
    org: "netflix",
    role: "Design Researcher",
    imgUri: "https://randomuser.me/api/portraits/men/10.jpg",
    timestamp: 1568592000
  },  
  {
    name: "Emma",
    org: "cisco",
    role: "UI Engineer",
    imgUri: "https://randomuser.me/api/portraits/women/30.jpg",
    timestamp: 1568592000
  },  
  {
    name: "Oscar",
    org: "amazon",
    role: "DevOps Engineer",
    imgUri: "https://randomuser.me/api/portraits/men/20.jpg",
    timestamp: 1568592000
  },
  {
    name: "Samantha",
    org: "Cirrus Logic",
    role: "Project Manager",
    imgUri: "https://randomuser.me/api/portraits/women/15.jpg",
    timestamp: 1568592000
  },
  {
    name: "Dwayne",
    org: "Indeed",
    role: "Human Resources",
    imgUri: "https://randomuser.me/api/portraits/men/50.jpg",
    timestamp: 1568592000
  },
  {
    name: "Helena",
    org: "self-employed",
    role: "Developer & Designer",
    imgUri: "https://randomuser.me/api/portraits/women/50.jpg",
    timestamp: 1568592000
  },
]

function constuctTimestamp (time) {
  const d = new Date(time * 1000);
  d.setUTCSeconds(time);
  
  return `${d}`;
}

function App() {
  return (
    <main className="oi-wrapper">
      <header className="oi-header">
        <h1><span className="oi-type-dark">okay</span>imposter</h1>
        <p>You're not alone.<br/>Letting you know that it's perfectly fine to feel stuck</p>
      </header>
      <div className="oi-structured-list">
        <div className="oi-structured-list-header">
          <span className="oi-structured-list-header-label-name">Name</span>
          <span className="oi-structured-list-header-label-company">Company</span>
          <span className="oi-structured-list-header-label-role">Role</span>
          <span className="oi-structured-list-header-label-role">Time</span>
        </div>
        {mockData.map((user, index) => {
          return (
            <div key={index} className="oi-structured-list-row">
              <img className="oi-structured-list-row-data-img" src={user.imgUri} alt={user.name}/>
              <span className="oi-structured-list-row-data-name">{user.name}</span>
              <span className="oi-structured-list-row-data-company">{user.org}</span>
              <span className="oi-structured-list-row-data-role">{user.role}</span>
              <span className="oi-structured-list-row-data-time">{constuctTimestamp(user.timestamp)}</span>
            </div>
          )
        })}
      </div>
    </main>
  );
}

export default App;
