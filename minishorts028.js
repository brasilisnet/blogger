//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKR1V3Djvr48U76DpL3k5G_yk3w3PbpI3sA3XdHWxAAWL1_ihqkTSKFdebS_-552z5VDQ2P4P443EiRVdgpcjnc-G2piZ_hbQ9Rnmqo7wkbFm-_d7nEdvm-pOrst9NEU6WwBg-8TMrw5bR0fgbIJoHpGy1jw275zZ90y2pnhI0zwmsxpEHcJDjMUzxznc/s1024/mini_short_tease_082.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtIGi-ivE3RJpiZrkfl-DiB159niPiZ_cDfNrTF9SkvtPuKgx2ijTOKFSnJ2TJD8X1KC_oI_HIXHj3v-ZvU2uXcOjD9Wox98eDzTJP9O4tqDD2bNkmSEyaKZZlAFs9RFwlQ4Cee0lz1-pGsMtPjhhzXPpp7PajyW8ipIv7ya5Q7eNRzBpB6hACldv0kVg/s1000/mini_short_tease_083.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJk6nyIFDSCT_ByaaD0ItnWf66wp5gYBtukpF-vgjOy8QdAUOMYgD0yRqzFTGtvUpbWm9HHaQmz9qGksHfhqzjsMwYetVMgVQhJKoL0qiTphv5pz9PmLfWCStEQ9bUY2dsDv_c04KXCM7KQ2K3rBUEWzslrP9ySwa6PPGpOSs3R57BgclycpF-EnE3TMA/s1000/mini_short_tease_084.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done