//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581701/pants_and_skirts_016.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581701_pants_and_skirts_016.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581702/pants_and_skirts_017.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581702_pants_and_skirts_017.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581703/pants_and_skirts_018.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581703_pants_and_skirts_018.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done