"use strict";

function Homepage() {
  return (  // div for greeting in p block, create link for cards and attatches image
    <div>
      <p>Welcome user!!</p>
      <a href="/cards">Click on me to view cards</a> 
      <img src="/static/img/balloonicorn.jpg"></img>
      <a href="/about">Click on me to read about the author</a> 
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app')); //Homepage mounted on #app element
