import React from 'react';
import toggleImage from '../functions';

export default function Home() {
  return (
    <div className="container">
      <header>Simple Header</header>
      <h1>Hello world!</h1>
      <main>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus
        ut odio modi enim vel non quaerat! Quidem quasi ab, sit, laboriosam
        officiis delectus facilis qui sequi repellat quibusdam magnam.
        </p>
        <button onClick={toggleImage} data-testid="button">Show/Hide image</button>
        <img src="https://th.bing.com/th/id/OIP.1GsUsQw5KSrgVNyJPkFNngHaEo?pid=ImgDet&amp;rs=1" alt="" className="center" role="img" style={{display: 'block'}}></img>
      </main>
      <footer>
        Here is the footer.
      </footer>
    </div>
  )
}
