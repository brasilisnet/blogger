//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581710/pants_and_skirts_025.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581710_pants_and_skirts_025.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581711/pants_and_skirts_026.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581711_pants_and_skirts_026.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581712/pants_and_skirts_027.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581712_pants_and_skirts_027.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done