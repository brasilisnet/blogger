//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581689/pants_and_skirts_004.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581689_pants_and_skirts_004.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581690/pants_and_skirts_005.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581690_pants_and_skirts_005.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581691/pants_and_skirts_006.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581691_pants_and_skirts_006.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done