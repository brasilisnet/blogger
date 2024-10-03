//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581776/pants_and_skirts_091.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581776_pants_and_skirts_091.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581777/pants_and_skirts_092.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581777_pants_and_skirts_092.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581778/pants_and_skirts_093.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581778_pants_and_skirts_093.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done