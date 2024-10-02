//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSFDzxJiM2zbSTcuKVP2t1el2C6t2LG4U1MslfYUANte8HkEijUJUn3sPkH21ZQg_cZ8qrqiWqCs1E2ufWWxfnemBPu1blT_Phxn7XGIMt32ghj9CazgU33YpULOGjb7NkCdIGtJnxxIV9q9UaDyYfCSthO-5Ts0SEl_YeKGRaoCnsj8tiUs27uwRgrlA/s1024/mini_short_tease_052.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCr0gYrQHdbCzvxZIuQwAc8a4aHR5XohVtLikYeIZ7PILDhUosF9dBfCXL_d4zn37WyLzC9W0gJRirhOCRp9xPjnMytmAugCp3gkI-3-23zbeX0aqUBVcu_X6OCRifgGYX0FzWaRuLNA3qfriPTOlhPb63sDbMKV7mwzfvt3Dzu9DVEFn9piR11S-n1Xk/s1024/mini_short_tease_053.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgix-NrdyVm-2XB5gfMMhADxfvJJr5WL217_vrWBX0L7k6CxOfCM3hufHg4YiCFkmQuoON-eELIlamGxtBeizvUJ-qBeByiN90hxmbWkmkErccV_dy1V2qLFeo4-Lo9P0cQAQnQRbF4ov7WJzgShyphenhyphenwdXlt2c24LRCRHSXoJ301NwxLb683p2_GZm-6ncrg/s1024/mini_short_tease_054.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done