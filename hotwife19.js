//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://i.imgur.com/ZD6IAGI.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://i.imgur.com/gt7figI.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://i.imgur.com/YVZun4D.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done