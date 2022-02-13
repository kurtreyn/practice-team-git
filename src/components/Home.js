import React from 'react'

export default function Home() {
function toggleImage() {
    const myImage = document.querySelector('.center');
    const display = myImage.style.display === 'none'? 'block': 'none';
    myImage.style.display = display;
    }
  return (
    <div class="container">
      <header>Simple Header</header>
      <h1>Hello world!</h1>
      <main>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus
        ut odio modi enim vel non quaerat! Quidem quasi ab, sit, laboriosam
        officiis delectus facilis qui sequi repellat quibusdam magnam.
        </p>
        <button onClick={toggleImage}>Show/Hide image</button>
        <img src="https://th.bing.com/th/id/OIP.1GsUsQw5KSrgVNyJPkFNngHaEo?pid=ImgDet&amp;rs=1" alt="" srcset="" className="center"></img>
      </main>
      <footer>
      Here is the footer.
    </footer>
    </div>
  )
}
