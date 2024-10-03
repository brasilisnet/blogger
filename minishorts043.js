//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581812/pants_and_skirts_127.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581812_pants_and_skirts_127.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581813/pants_and_skirts_128.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581813_pants_and_skirts_128.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581814/pants_and_skirts_129.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581814_pants_and_skirts_129.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done