//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581743/pants_and_skirts_058.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581743_pants_and_skirts_058.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581744/pants_and_skirts_059.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581744_pants_and_skirts_059.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581745/pants_and_skirts_060.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581745_pants_and_skirts_060.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done