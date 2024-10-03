//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581764/pants_and_skirts_079.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581764_pants_and_skirts_079.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581765/pants_and_skirts_080.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581765_pants_and_skirts_080.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581766/pants_and_skirts_081.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581766_pants_and_skirts_081.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done