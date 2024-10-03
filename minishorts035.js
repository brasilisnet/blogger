//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581788/pants_and_skirts_103.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581788_pants_and_skirts_103.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581789/pants_and_skirts_104.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581789_pants_and_skirts_104.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581790/pants_and_skirts_105.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581790_pants_and_skirts_105.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done