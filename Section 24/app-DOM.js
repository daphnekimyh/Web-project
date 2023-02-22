const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src);
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = '';
// }

// document.querySelector('a[title="Java"]');
// document.querySelectorAll('p');
// document.querySelectorAll('p a');

const links = document.querySelectorAll('p a');

// for (link of links) {
//     console.log(link.href)
// }

// document.querySelector('span').textContent = 'WWW.HAHAHA.COM';

// const h1 = document.querySelector('h1');
// h1.style.color = 'green';

for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

window.getComputedStyle(h1).color;

For(let i = 0; i < colors.length; i++) {
    document.querySelector('span')[i].style.color = colors[i];
}

const h2 = document.querySelector('h2')

h2.getAttribute('class')
h2.setAttribute('class', 'purple')
h2.setAttribute('class', 'border')

let currentClaases = h2.getAttribute('class')
h2.setAttribute('class', `${currentClaases}`);


const newH3 = document.createElement('h3');
document.body.appendChild(newH3)