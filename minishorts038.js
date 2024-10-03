//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581797/pants_and_skirts_112.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581797_pants_and_skirts_112.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581798/pants_and_skirts_113.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581798_pants_and_skirts_113.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581799/pants_and_skirts_114.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581799_pants_and_skirts_114.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done