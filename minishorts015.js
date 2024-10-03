var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581728/pants_and_skirts_043.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581728_pants_and_skirts_043.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581729/pants_and_skirts_044.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581729_pants_and_skirts_044.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105581730/pants_and_skirts_045.jpg.html'><img class='top' border='0' src='https://s8d6.turboimg.net/t1/105581730_pants_and_skirts_045.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
