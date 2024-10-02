//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhipU3Z2IGMI3YfCs77HM7Ut8ZfEaIg60dlwVVpIW04WMarFitr_mZW4N76To1B61X_0bQ9Ot4FPOvAjscw3FwF967mfJj47IVO46sVTrY-fh6m-eB8zBVLRNBHLgE3L7vafc8Q-FvUs0DtuOrVI6T52NYMqwlu8eNToZg1fwxGdXmhVn9KDGDI13_K4G0/s1024/mini_short_tease_058.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNFT7_Yz2xXyyPxxI9qOSbVv96IaC_aFoTdcyggrr3KHf-9CcQjyTRGPjsm7mz_rnJ6r2hgwxwj5u_J5slznuH9Hu7EpPfiW7oiotpG6AkFH2M1WJd3qslLA1rDqijQ3HOYmYGEeAqUU3Tcz56RnK1LPEciRmcbQXxHGz6glWhMgKNnE5o_Qd1nGhtm5w/s1024/mini_short_tease_059.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_LnbNsE7dHDmMp4B_4RN8Z1FBEpvbGNaE1_ayQ3JXzE_o_ZkBKBjeLxmgDQa4cjnJUEZjRVrw36cDsRkYH4-tqn5rWwUA8JsDYjD5uQBJp84qzmDJ52FcNhC2jxTmZWKgYBxwkwp4-K4zmUS3r5giz4_CgHZwlz7ErAjMA-zMstCHOcDcVEnkKnfsk2o/s1024/mini_short_tease_060.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done