//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglSYXx7m4T-TuRfQcK41v7b5uk5PSuy0ixz93iLBASCp2M-yrRRhv9Uf9ld7cPVbV98KZ844QQr2S73N23hiDbNAOAwoLE_JbfnsoFv2RxhosMX0ugMg2RbV7Pk3ehSpkQIwjwZuawcq0cXKI5p0YRomKMNFxFx7F3ndUKT90VMcpxRiJs6weM4wLr6No/s1024/mini_short_tease_076.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht_EwraS0xXSsFn1K8P037ozJ3NGDC0t_uQtQv7jF08DmPRWNPxDrpzNpVfBNXNYHKMSVQkrAioh9qklXedX7y4PJK3vc994K0jXO4uzSdWf7E7FN0tZd5rR4m1ViNElik27ZOGGL80I4NDmTwT3k0js4LhxYIrJsOn4Vwx4K0IVEoUm70z3hJOwh3oKo/s1024/mini_short_tease_077.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSZNRmjZrNopzh9O5Bc0mP8yO6A__sSvL9DRMYgNPPMJo9OPynTEOOaeHQortRjCzsSD_V-NoSXi-DQXc4loCmLMyEzUtvj2inMW_YXeY7-G9FP3mjAagDkFqTP1j2_u18F3X3kJWV4BPmu8OMdiY_r3p_BZefGMUhn_82JEz0HIGvSMdYkIEiG2VME68/s1000/mini_short_tease_078.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done