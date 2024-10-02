//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWiHcOWzWzRyxlUCdSXq97x3oLelp-L3qgiEhujnTQRemEh-BLzY133PlPIv_3xwh_vpQxfKk2YvlbN4VroA4jB67BxJCx2OGKHXTiFWP8qfXIYwghtuw4Y6_lRFDP1p7Tfznao5wxmu3GeEuTHIwqnY0vIX8fAfXMeK_vhNivY0f3UuU9C9yntI9nbIQ/s1024/mini_short_tease_010.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyjCV-CMVjEpM7Cw4OIx-cFDsSvp5ogFTRkpNmTv5OvTerbFlZpdgQTiRvI_1RqL7vJ6vejWz1-HOPPFir7omZz2x6WLBGFgFeI-19HMbISXYC1QbFNo40uzJ7WauNQAB0VEbpWC34cz8eln2OMFoARm7Q4uRXoDUdUvrgy8UuKmrkW-LyuKVQNn-lGn0/s1024/mini_short_tease_011.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVGBNJBb1yKBNNKXEFvqr33T_3Z7J8u6gbxI3ZDGeIcfOltz-KB5VSQcJohOvY2x7Bgm0CkyilA5ALP2TQvAqfJv8SCOfpWgx0jlQljceVQ5uOte0ofMeN5vzxEaCEwaOQiblgIDZq-4fdh415XoBXa808I73p6kftJj6glbHikooa7ilxLZf1Ygohmqw/s1024/mini_short_tease_012.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done