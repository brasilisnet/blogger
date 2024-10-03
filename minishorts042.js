//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581809/pants_and_skirts_124.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581809_pants_and_skirts_124.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581810/pants_and_skirts_125.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581810_pants_and_skirts_125.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581811/pants_and_skirts_126.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581811_pants_and_skirts_126.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done