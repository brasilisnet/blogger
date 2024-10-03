//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581803/pants_and_skirts_118.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581803_pants_and_skirts_118.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581804/pants_and_skirts_119.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581804_pants_and_skirts_119.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581805/pants_and_skirts_120.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581805_pants_and_skirts_120.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done