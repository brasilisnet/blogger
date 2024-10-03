//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581704/pants_and_skirts_019.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581704_pants_and_skirts_019.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581705/pants_and_skirts_020.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581705_pants_and_skirts_020.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581706/pants_and_skirts_021.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581706_pants_and_skirts_021.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done