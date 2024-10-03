//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581707/pants_and_skirts_022.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581707_pants_and_skirts_022.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581708/pants_and_skirts_023.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581708_pants_and_skirts_023.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581709/pants_and_skirts_024.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581709_pants_and_skirts_024.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done