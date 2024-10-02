//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhconRcgbclVNKKNRHMcsbfJEVXGjv2HQEdR92ztPSKBcbwLeGVxOd8WEKiLnREbHzsljvtLWQzxk4BeoN7P9S91pd_Jsha9_voSC2oHrvGeFDdMYNzvUbm9ZT3DddIjbxfWbcLThqthnibFbzwie263Gc8GIfg4HB4neeTzGQSvoGAp5s-V7Fn8SOA2wE/s1024/mini_short_tease_034.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPOA9wSYosGLV69TnIAf4s8Kr22DBv7Coof1F_Y26pGpu9ucbY5ru6Exipgl1GO8idcR3MuZy36IV9xNndMIVTKl1Pzp8dofqj9gBhvYJIG74wv4mB1yXz_UrVh0WuK5Daegy_WVA7-FYgJuGViNjTrZpd5TEuprQ8-78S95dqujrsCOsGslDj_m07Qqg/s1024/mini_short_tease_035.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXEwL5O7SevqZxvNZxZo-vVaP91v64O1KXwheleNAKQ2Hw0mHFaZwbkY40_3HvU7S5WUyFxZoFbax9fSeFNZwUwslkSjAcmR63ftmkNciSrGBfhJCv7L5SelRYNG7A_P9o19nl3po-5VhPwiC0Odq0Pbe7IQHti2jzyHQy-GavLZJaHaIRZO9_l9xO7jw/s1024/mini_short_tease_036.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done