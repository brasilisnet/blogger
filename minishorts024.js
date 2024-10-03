//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581755/pants_and_skirts_070.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581755_pants_and_skirts_070.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581756/pants_and_skirts_071.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581756_pants_and_skirts_071.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581757/pants_and_skirts_072.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581757_pants_and_skirts_072.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done