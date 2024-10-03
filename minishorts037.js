//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581794/pants_and_skirts_109.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581794_pants_and_skirts_109.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581795/pants_and_skirts_110.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581795_pants_and_skirts_110.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581796/pants_and_skirts_111.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581796_pants_and_skirts_111.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done