//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581725/pants_and_skirts_040.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581725_pants_and_skirts_040.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581726/pants_and_skirts_041.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581726_pants_and_skirts_041.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581727/pants_and_skirts_042.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581727_pants_and_skirts_042.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done