//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuTPEyMC3MYPLFp9heZ_5CIaelGJxHGJi1LcRojPy5P8SW2AIvooxdQxDkTiuWmBBUPZkgv0NWAEwnPIXmTCdMoLbUUm75GPjRfr-Zh9QIhojWMBfR0pq0LduFSb1K_KVqf4EzrH2c2Av_2hdmFjshQywSf1hN9lPicG6ZAuINJ0lN5U3fCRkAMmipMMw/s1024/mini_short_tease_004.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBJKiNdrkv_XfqVj-vl5BBcL9-QXzW1ZcFkTZhIBEkMjSbGDpTc0zlSa_2j3cZPgdBr-i_fGE84vr341Td2q60a700SDTe2Hrl2wAm9Zz0UDK4w5wjWdBgQPEWMywTeAFA_fSHzmq_2OPLiB5UAuhw4hKTxoCokjzyePKiPSuEvQ17rCOTj1-0L1RNmyk/s1024/mini_short_tease_005.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlXTNeYn1XmfAOPLywkDFlfCkz1Gi8-v5uBuyRAMLo3jBdpKT1tpeKwgVaTGMNdybVRKy_J_9zkYM7aa-aixoZqc-DfMLKmT0yeU5GCAE_GP-f4v3r3WYLgxzLX6OqP_WUbRrI-0ex7x5olYJwsKylv_LFfyTXuMlCRjjXVYQZ7BWQvIFwJ-DdlyKwTm0/s1024/mini_short_tease_006.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done