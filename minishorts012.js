//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581719/pants_and_skirts_034.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581719_pants_and_skirts_034.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581720/pants_and_skirts_035.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581720_pants_and_skirts_035.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581721/pants_and_skirts_036.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581721_pants_and_skirts_036.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done