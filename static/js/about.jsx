"use strict";

function About() {
  return (  // div for greeting in p block, create link for cards and attatches image
    <div>
      <p><b>About the Author</b></p>
      <p>This website was made by a magical unicorn.</p>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
    
  );
}

ReactDOM.render(<About />, document.querySelector('#about')); //Homepage mounted on #app element
