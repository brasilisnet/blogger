//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581737/pants_and_skirts_052.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581737_pants_and_skirts_052.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581738/pants_and_skirts_053.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581738_pants_and_skirts_053.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581739/pants_and_skirts_054.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581739_pants_and_skirts_054.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done