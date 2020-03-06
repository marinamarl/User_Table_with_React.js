import React from "react";

export default class UserPosts extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.returnToUsers}>
          Return to users table
        </button>
        <div>
          {this.props.posts.map(post => (
            <ul key={post.id}>
              <li>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
