//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYeBXjLEpd4px85KxVoOhQfgUomB-sznqo6DICY6F3Lqez8jduSq5zIFAydci0ji87DUDMa2H3ozsNeJS_mB_IpKKKKE5gckkG-fClAjxbslyzah7bxINsTp7uq3q_3VVvBy5vQvWtTT2cbEE1flDISZw_4VzQUbC8tv4cxBHP-ZD-CzPePJ7XYxA_xg0/s1024/mini_short_tease_097.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPS4jkzEaVTQ1uNdUFLYuPPdcB7iup0OvxFVp9Cab6jgKugaLViE1xx570z2KD_2mgBYTStMooV2o1WXB65PL22yt7PJ271YCiFfYJsyT0erP6zdnw10JyFM_d7zhOFI4O-hSBTIqwwwOokVtSix9w3YPdb4wdyj9SSjUOC-GzWbgQSdYHfi6lVLftpgM/s1024/mini_short_tease_098.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho0qux6pvcUJih-1Da28O-ilD87A8LSPAE4BnSwhcYiCXfkvfQsVRfY4NfQmgdyPYpL3PAaUo10cCWszOrFi6-ZKAehPo90SkN8na8YhATon6zL4LUCvlVmn9SNH82Z7loVItqTOewZrTBfMA9L5DKImU6h4Ba7M-5KEzik3bbcVWM7ACHA_8MdLRDC54/s1024/mini_short_tease_099.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done