//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581779/pants_and_skirts_094.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581779_pants_and_skirts_094.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581780/pants_and_skirts_095.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581780_pants_and_skirts_095.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581781/pants_and_skirts_096.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581781_pants_and_skirts_096.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done