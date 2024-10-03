//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581761/pants_and_skirts_076.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581761_pants_and_skirts_076.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581762/pants_and_skirts_077.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581762_pants_and_skirts_077.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581763/pants_and_skirts_078.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581763_pants_and_skirts_078.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done