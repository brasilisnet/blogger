//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxhFNMgjdqhWPCSjRffgntkH69wxg-U3f9_Ga9d63ILEwcgve8KrdvFFRV0_E6scfcDyjNDPAFApuPiI7I3SPt6FrYjKdkwctymz2kL3lt24E2qP2yTLh41JEyy2uHYq-Gi0VjRWWTDaj6udeA1aV__yjVn5QZxKlfyGTd1KqokTs9lWDLLqNP2xMkAgg/s1024/mini_short_tease_019.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqc0CpQG9J0yKafFbkVk-ZFux8Hx6uXxs0gTlWlzPaZd3ga8KHedXExbar43jRoABzLeGX7AQQxKBWBDheafvNIdw7OIacrh2mN3_J_GQzpyCD_IAtTGcH8L8H73csDN8PuQ8HDyTEheq85mO5CyTHzLb9jPCSFXuDySIw8hfhj0kx5ztiM04_BA7xyc/s1024/mini_short_tease_020.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwBkwy5qISTx7usT64y5VmOJf3yxSz0CQixu3x6rIE-NJShILHsYgF7PWo3pYr5jl-G_L36aR6lfLJZaHMLmPX_lZrOl3OIqPbpi0FBjAGv11xUu8TlAUXen_shYlFlzNWSd8mAqx_-c0PqwajR6SxODrzSZArPBTlwFmrZ75slHsbEggaMEayDafqntk/s1024/mini_short_tease_021.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done