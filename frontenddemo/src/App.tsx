import type { Component } from 'solid-js';
import styles from './App.module.scss';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.hero}>
	<div>
	    <h1>EXAMPLE</h1>
	    <p>
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
	    </p>
	</div>
      </div>

      <div class={styles.about}>
	<div class={styles.text}>
	  <h1>About</h1>
	  <p>
	  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec blandit diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in malesuada odio, vel lobortis justo. Suspendisse mollis erat ut felis posuere, vel placerat quam gravida. Donec volutpat, quam ut luctus commodo, dolor orci consequat nisi, in luctus metus leo et arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In feugiat risus nec nisl gravida sollicitudin.
	  </p>
	</div>
	
	<img src='1.jpg'/>
      </div>

      <div class={styles.gallery}>
	<h1>Gallery</h1>
	<div class={styles.container}>
	  <div>
	    <img src='2.jpg'/>
	    <img src='3.jpg'/>
	  </div>
	  <img src='4.jpg' class={styles.right}/>
	</div>
      </div>

      <footer>
	<h4>© PTWD Demonstration 2022</h4>

	<div>
	  <p>Contact Us</p>
	  <ul>
	    <a>Facebook</a>
	    <a>Instagram</a>
	    <a>Customer Support</a>
	  </ul>
	</div>
      </footer>
    </div>
  );
};

export default App;
