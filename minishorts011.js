//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581716/pants_and_skirts_031.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581716_pants_and_skirts_031.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581717/pants_and_skirts_032.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581717_pants_and_skirts_032.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581718/pants_and_skirts_033.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581718_pants_and_skirts_033.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done