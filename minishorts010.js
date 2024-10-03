//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581713/pants_and_skirts_028.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581713_pants_and_skirts_028.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581714/pants_and_skirts_029.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581714_pants_and_skirts_029.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581715/pants_and_skirts_030.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581715_pants_and_skirts_030.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done