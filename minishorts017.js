//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581734/pants_and_skirts_049.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581734_pants_and_skirts_049.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581735/pants_and_skirts_050.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581735_pants_and_skirts_050.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581736/pants_and_skirts_051.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581736_pants_and_skirts_051.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done