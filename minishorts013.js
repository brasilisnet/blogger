//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbENs1jeVwkkkMPiFTmWwvOB-gAX8F_BsxPoo1-4PXSBYvmY9ywHujq-AWsY4HiGe059PI19pBVpcsXdXNN60VoaaxZZ-fjCa8eTHEcfLzBsqSQsPNfuLv1Em8UcOAIfLE7jiW572UvsYuAeC3EFEZ1XFMacaObPcO-DDZcvE-VIWQ2cW1pncisDEjCR4/s1024/mini_short_tease_037.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0akpwOOjl5intlb7z2w9jD2pDRv0lGJla1sKTsd-B3ZARM87Y_SxS5_sbaT8osmj1BGDFMFiiEy5icFuLEeHNz2N7YlSpajLCJTW5YRHJJHBFbI1jPOr02aYy7np-RVuYNmuaBSPyBposSCsiOQZiGvx49wghZdI3iov-9dHsasXNcos94ZHcn_t1CnQ/s1024/mini_short_tease_038.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgezoIDFIkJI90ETzdiKzmEqjQQ_emFEHd4o3GfLgX2k5a6MOkP9Ri73bbfHn_CgZSJ0vMsqeD97SSh138CsZiCZRq-mX1_P9pC8cs7Pb_8HiHsY18lK9a-V-CdrPz4Cskp2U0vYsZKZ71b3uv3K1RrerCyHW_b3DbvubD8K6JatFdU6S0aVg2jzRoDYfo/s1024/mini_short_tease_039.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done