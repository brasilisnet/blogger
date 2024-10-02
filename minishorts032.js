//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWOl5bt1PlqE115nYWhODtTULie-iFlsIqzsFKLKGsIt49GCjV8LNKOtlzpamLwlUj9IngJ66bSDw5Jw3B_TwXDMR-tz-68xGFeQxghQ8p-NEf8j-5-dYf9_7TbUYTlwvb0vvibGCetCFGvKodi_hSx_eNEct0tDM9PGfsyNw6T7qVHVRCfiW2C1d2mSo/s1024/mini_short_tease_094.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVE2fNkMp2bAzz0QWEB6SyL2XWO0XzuDu3_75-3xphyphenhyphenw8Go_aUptnES_cilG5Uh1VotElFh-wLaTB60eHdLWkAWJTpj2MSsxdYI8YJquW8tvvwI8K0NIJbKmRS5xS2a9p_hHYTpJxpxxhUU5OeDcVZb6Ikb38HnGnXH5QMuAVj7FNghiUe8TMufJb5_Gk/s1024/mini_short_tease_095.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM-wdqKV6mNd1B-M6fX4Gdw0dZQnB0-y3_RSyjB2Q3hyVA99rHKkpNFn5CDEwINKN4E97dLqjRUbP4NvGSLcfnqPzA8fR55y74MXLKqdltFXg714XyKd3JLioU2zdG6P79fJwicBshcW6h_fp-TGJ7jDi4hgRGPqqYvTsPzkMWvm2LayBAih6q2i88Grs/s1024/mini_short_tease_096.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done