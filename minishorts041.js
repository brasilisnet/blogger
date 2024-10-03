//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581806/pants_and_skirts_121.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581806_pants_and_skirts_121.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581807/pants_and_skirts_122.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581807_pants_and_skirts_122.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581808/pants_and_skirts_123.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581808_pants_and_skirts_123.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done