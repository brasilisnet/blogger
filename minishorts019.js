//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581740/pants_and_skirts_055.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581740_pants_and_skirts_055.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581741/pants_and_skirts_056.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581741_pants_and_skirts_056.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581742/pants_and_skirts_057.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581742_pants_and_skirts_057.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done