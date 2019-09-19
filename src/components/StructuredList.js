import React from 'react';
import moment from 'moment';

const mockData = [
  {
    name: "Andrew",
    org: "google",
    role: "product designer",
    imgUri: "https://randomuser.me/api/portraits/men/93.jpg",
    timestamp: 1568893919
  },
  {
    name: "Remi",
    org: "apple",
    role: "Technical writer",
    imgUri: "https://randomuser.me/api/portraits/women/10.jpg",
    timestamp: 1568893919
  },  
  {
    name: "Albert",
    org: "netflix",
    role: "Design Researcher",
    imgUri: "https://randomuser.me/api/portraits/men/10.jpg",
    timestamp: 1568893919
  },  
  {
    name: "Emma",
    org: "cisco",
    role: "UI Engineer",
    imgUri: "https://randomuser.me/api/portraits/women/30.jpg",
    timestamp: 1568893919
  },  
  {
    name: "Oscar",
    org: "amazon",
    role: "DevOps Engineer",
    imgUri: "https://randomuser.me/api/portraits/men/20.jpg",
    timestamp: 1568893919
  },
  {
    name: "Samantha",
    org: "Cirrus Logic",
    role: "Project Manager",
    imgUri: "https://randomuser.me/api/portraits/women/15.jpg",
    timestamp: 1568893919
  },
  {
    name: "Dwayne",
    org: "Indeed",
    role: "Human Resources",
    imgUri: "https://randomuser.me/api/portraits/men/50.jpg",
    timestamp: 1568721695
  },
  {
    name: "Helena",
    org: "self-employed",
    role: "Developer & Designer",
    imgUri: "https://randomuser.me/api/portraits/women/50.jpg",
    timestamp: 1568721695
  },
]

function constuctTimestamp (time) {
  const d = new Date();
  const formattedDate =  moment.unix(time).format("ll");;
  return formattedDate;
}


class StructuredList extends React.Component {
    render() {
      return (
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
              <span className="oi-structured-list-row-data-name">
                <img className="oi-structured-list-row-data-img" src={user.imgUri} alt={user.name}/>
                {user.name}
              </span>
              <span className="oi-structured-list-row-data-company">{user.org}</span>
              <span className="oi-structured-list-row-data-role">{user.role}</span>
              <span className="oi-structured-list-row-data-time">{constuctTimestamp(user.timestamp)}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export {StructuredList}