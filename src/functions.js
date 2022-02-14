function toggleImage() {
    const myImage = document.querySelector('.center');
    const display = myImage.style.display === 'none'? 'block': 'none';
    myImage.style.display = display;
}
module.exports = toggleImage;