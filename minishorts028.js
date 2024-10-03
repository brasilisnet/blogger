//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581767/pants_and_skirts_082.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581767_pants_and_skirts_082.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581768/pants_and_skirts_083.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581768_pants_and_skirts_083.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581769/pants_and_skirts_084.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581769_pants_and_skirts_084.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done