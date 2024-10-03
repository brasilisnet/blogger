//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581731/pants_and_skirts_046.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581731_pants_and_skirts_046.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581732/pants_and_skirts_047.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581732_pants_and_skirts_047.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581733/pants_and_skirts_048.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581733_pants_and_skirts_048.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done