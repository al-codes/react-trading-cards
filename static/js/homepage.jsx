"use strict";

function Homepage() {
  return (
    <div>
      <p>Welcome user!!</p>
      <a href="/cards">Click on me to view cards</a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
