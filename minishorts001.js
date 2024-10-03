//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581686/pants_and_skirts_001.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581686_pants_and_skirts_001.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581687/pants_and_skirts_002.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581687_pants_and_skirts_002.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581688/pants_and_skirts_003.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581688_pants_and_skirts_003.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done