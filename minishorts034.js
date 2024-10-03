//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581785/pants_and_skirts_100.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581785_pants_and_skirts_100.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581786/pants_and_skirts_101.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581786_pants_and_skirts_101.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581787/pants_and_skirts_102.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581787_pants_and_skirts_102.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done