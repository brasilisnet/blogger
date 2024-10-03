//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581746/pants_and_skirts_061.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581746_pants_and_skirts_061.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581747/pants_and_skirts_062.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581747_pants_and_skirts_062.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581748/pants_and_skirts_063.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581748_pants_and_skirts_063.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done