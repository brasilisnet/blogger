//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581800/pants_and_skirts_115.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581800_pants_and_skirts_115.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581801/pants_and_skirts_116.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581801_pants_and_skirts_116.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581802/pants_and_skirts_117.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581802_pants_and_skirts_117.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done