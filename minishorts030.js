//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581773/pants_and_skirts_088.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581773_pants_and_skirts_088.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581774/pants_and_skirts_089.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581774_pants_and_skirts_089.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581775/pants_and_skirts_090.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581775_pants_and_skirts_090.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done