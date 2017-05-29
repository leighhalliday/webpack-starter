// Allow hot module reloading
if (module.hot) {
  module.hot.accept()
}

// Bring in the sass file
import './style/style.scss';
// Get the URL to an image
import codeURL from './images/code.png'


const root = document.querySelector('#root');
root.innerHTML = `<p>Hello webpack.</p>`;

// Create an image using the codeURL image from above
const img = document.createElement('img');
img.src = codeURL;
img.style.backgroundColor = "#2B3A42";
img.style.padding = "20px";
img.width = 32;
document.body.appendChild(img);
