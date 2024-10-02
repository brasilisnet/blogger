//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4K1Ec-GT1AiBYabCDfiLBZJJuYvHDtmdbOMOhz58wi3lFNi3AEUA8UmqGm4N8Bo6iAnJcVbTOVfYiStHaM7WVmsa73tMT6bSg758r1CBq-Co2ivRBETCwjPwUFuYsxQqcoDCckq0N-X-7HT2sN7E9WzxDJdXCV9ddTXaQpxnw2vl2bJ2byDm6jo60dpw/s1024/mini_short_tease_031.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3M3_Iuig9AbvqhueUm7jHjN2yICHQ04oTOlN1m6Tgm2EYJ8m8CjV6rJugBFesJhIogooEfF974hX525U2KYWnCxbpcMHiR0UQ531Pk5WrnoaQXrMGzcRry3VTqpqUQKm-sbcOeA2b9FMlN0dVCPDYZmR8dEPl79N0gyW_WnS41nM1JPs-C2t_gxNJtPU/s1024/mini_short_tease_032.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdj5LbT7rMDd1fmSAG6j_JwptE4vSYpX3kOlHeDWsTflBfpHZB3SLnWVjWrticpJgL1mD6crPFgqpvJNkoYLaiT6Vu1XWPcAJJjt-1UaRkZNtiACzioh6kpgV27w8ilYKBCD6KNZ9H154QhW9TaHd_z-jjrpnd9UwCR4kU4zVL07j2g_7wI4q9GXYWofU/s1024/mini_short_tease_033.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done