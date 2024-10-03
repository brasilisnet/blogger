//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581752/pants_and_skirts_067.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581752_pants_and_skirts_067.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581753/pants_and_skirts_068.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581753_pants_and_skirts_068.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581754/pants_and_skirts_069.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581754_pants_and_skirts_069.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done