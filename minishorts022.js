//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581749/pants_and_skirts_064.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581749_pants_and_skirts_064.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581750/pants_and_skirts_065.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581750_pants_and_skirts_065.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581751/pants_and_skirts_066.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581751_pants_and_skirts_066.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done