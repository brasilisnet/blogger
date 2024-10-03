//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581791/pants_and_skirts_106.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581791_pants_and_skirts_106.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581792/pants_and_skirts_107.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581792_pants_and_skirts_107.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581793/pants_and_skirts_108.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581793_pants_and_skirts_108.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done