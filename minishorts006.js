//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2GxPSNeqtWmgqgIKpFg0cdCVN12YHRhuplxkqVuHvWNKkky_PMUuU2PZZ0ATHgFcXaJAlcY-6ronmmRcMEIwKY3yXCYbClgGP392XO1KZBNuO1hr-XUctMEHO7EUX1Hps9pUa6eHOqHXlRsiS2buWxZwT_r5f0ScSyfeTFAzrm_G8wMxNzHbdA24dDww/s1024/mini_short_tease_016.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCO-CFjW98mqc2Ov6e2H8Z1A1gaBqUXjdaM_7syTlCQdo2H8XPQKSYXQzARTLItNTU2_deQRv2A4k1-4GtwxaBe_S__bFJqA5W9neM7DKUZo3hKSXRWC2dabc-1AA8Mwkojrwic-VCMTTapTibYIyhvqHIv8T5oPMt6Fl8weKU5FlWg044M438T6z6RTg/s1024/mini_short_tease_017.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7UUobAQlW01-ykOaN7PejXw-8ndxbOTQQrtfvlgXwscvs9aI-GCVbtVvb67H6CgbJzFFEJ1fM_utZO2sQkzdAlZxMG4ksYcfbXGg3lTsCDOXxNe5xhu_jVntsgdcVHWnU2wq6XRz4HAigCeebN5NkWtjOcxg5mKqR4s_RgeeMpLYG9TxYmNc8x3jrPhU/s1024/mini_short_tease_018.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done