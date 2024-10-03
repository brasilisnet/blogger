//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581782/pants_and_skirts_097.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581782_pants_and_skirts_097.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581783/pants_and_skirts_098.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581783_pants_and_skirts_098.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581784/pants_and_skirts_099.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581784_pants_and_skirts_099.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done