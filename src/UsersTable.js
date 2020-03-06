import React from "react";

export default class UsersTable extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(person => (
          <ul
            className="usersTable"
            data-id={person.id}
            key={person.id}
            onClick={this.props.handleClick}
          >
            <li className={"name"}>
              <h4>Name:</h4>
              <p>{person.name}</p>
            </li>
            <li className={"username"}>
              <h4>Username:</h4>
              <p>{person.username}</p>
            </li>
            <li className={"email"}>
              <h4>Email:</h4>
              <p>{person.email}</p>
            </li>
            <li className={"address"}>
              <h4>Address:</h4>
              <div>
                <h5>Street:</h5>
                <p>{person.address.street}</p>
              </div>
              <div>
                <h5>Suite:</h5>
                <p>{person.address.suite}</p>
              </div>
              <div>
                <h5>City:</h5>
                <p>{person.address.city}</p>
              </div>
              <div>
                <h5>Zipcode:</h5>
                <p>{person.address.zipcode}</p>
              </div>
              <div>
                <h5>Lat:</h5>
                <p>{person.address.geo.lat}</p>
              </div>
              <div>
                <h5>Long:</h5>
                <p>{person.address.geo.lng}</p>
              </div>
            </li>
            <li className={"phone"}>
              <h4>Phone:</h4>
              <p>{person.phone}</p>
            </li>
            <li className={"website"}>
              <h4>Website:</h4>
              <p>{person.website}</p>
            </li>
            <li className={"company"}>
              <h4>Company:</h4>
              <div>
                <h5>Name:</h5>
                <p>{person.company.name}</p>
              </div>
              <div>
                <h5>CatchPhrase:</h5>
                <p>{person.company.catchPhrase}</p>
              </div>
              <div>
                <h5>BS:</h5>
                <p>{person.company.bs}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
