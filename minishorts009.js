//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHc23IotF2qJuxpVi26YTYEdpvWWYu67FRJ3ciTSIf3EEcq6OyNFQK4RB0J4UFkaRQseaVWnQafPzpZYI86Eqo_FYbMdCKpUnfldEnrPZDpwz-BG6efN0SHQ2WMlrKfw1s8UAlBWNE7djbWvTy7tFOPcMlYBEZhxI0MF-Slk0rYbzRVfS-SyfZut_80fY/s1600/teen-mini-shorts-25.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRXFIUEXDMFZT4a1Q-aCQnfIAW2SA9irA8FdF0XcdP-W1mdBDPgB-en7UgVeQte0i7XHzNz_etvOTcN9Oj60FRr9a1dkaPcBGgF18RMWWyI4CN5AYYAvK1kmRhiYjHKZfqra9MuIBEo0_rNfCsmbb-_vQv1IRAjPH7EPL8C0eGTE_ttMhoQsRy-8wti4I/s1600/teen-mini-shorts-26.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs3HqywMiyQYEQHLE80o1kR96Txkp1cEks9GVMUzoAq_sPov-wwh3mI74hvKJ5MhAnDMjtGNg0Qlw1Tbhm1GGqh16iyE6jdo22gzyCXsDrnTPXPMYY52WgDU5MdXEXHWhGB5FseUtqWuBba7jG9DF1O5eL1vGWpsE07BUSu7d4Zb2NFj9Uc74gIlqSob0/s1600/teen-mini-shorts-27.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done