//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581770/pants_and_skirts_085.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581770_pants_and_skirts_085.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581771/pants_and_skirts_086.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581771_pants_and_skirts_086.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581772/pants_and_skirts_087.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581772_pants_and_skirts_087.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done