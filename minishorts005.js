//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581698/pants_and_skirts_013.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581698_pants_and_skirts_013.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581699/pants_and_skirts_014.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581699_pants_and_skirts_014.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581700/pants_and_skirts_015.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581700_pants_and_skirts_015.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done