let square = document.getElementsByClassName("square-container")[0]


setInterval(() => {
    let width = Math.random() * 100; 
    square.style.width = `${width}px`
    let height = Math.random() * 100; 
    square.style.height = `${height}px`


    let colors = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    square.style.backgroundColor = colors;


}, 2000);
