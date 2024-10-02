//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-ykaXQl7KqN0PCKPZHA4WTptl8eZRBp-8ey4cZKhTYOxOvZjZsVjA1w1ygE4dKwPMVfWO8rmAW8NbUJqxvzw6Rbk_E_eFMgu41f8D351CQUbzEQ24yzoVfDeX-cjvA9qVb07Eo-BXSmK6eTiY-_Zs39V-Inorl_T8its6Pm_GmYV8SpT0vj89-NmXVc0/s1024/mini_short_tease_100.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNiDOU64GHA-_VdHsNddLowQfpFQkZmIwsOpgWP0TRteviCbQXXeIkkbxirYkya0tRuRUl3FygvkwEhQjfDRvrzkB2dblelBiAs_Ed86yO3qlnSphDib88IRtQhndQIk_tz2ye6-PWCYMdPiZTp436PCnfREBr62cOia_4J2VQL7xIpYK7yOcSqELP_-8/s1024/mini_short_tease_101.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9URIFJU1SV-8i8ERHxAUQu1xlsw8xe_276Bn4M87DhFtaj5Zr-Wc5Byh8Vizk9yry9QrUtyg1F9yWaYEfmcnZy9keJK97K19d3ZehP0p4IhvBO7xKmowqBCWEIjarbfHb1w8S8ob-r85Ch15wfBzn4IQ3R6_MAvdsLHleZQQJXz2SSrq9XJLKOBQg2Ts/s1024/mini_short_tease_102.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done