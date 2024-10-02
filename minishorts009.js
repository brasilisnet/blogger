//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoWbCYlRqHDlQGDL4z24rqAatNPy68gvy4jBGDKkdmBAaRcm3Bs5e47dDkO3DJkFZ_z32n6OUJT0GlNWajBAfSFtBEZj5JACWQrC6hCWKGDmGz-6eqpNXIlHNj1eyZDG76HpDQ71jKMEpzK2TODelqz81psFGdj0FKsqjxgAtPztQytxjo2iTmCs3gNA0/s1024/mini_short_tease_022.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3iGxZH9dIZ81zESW8QJ6ZqKBAydiPBagtZnlNAxqkLWMGYN4V5CqQSQGI3BlffxD_yYZXoPdbpfBDUTVYknNTPgPfsJ71oykNjiMgEKMbXzRpQydUr2-O3Zk_QhalSTXvmtuL4hjca4AzUgfQ1hd65hqxaRdDFubfbk04FBvHuTeJ9akxwUpzAI8GCN0/s1024/mini_short_tease_023.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8beSDb4PDznd2FA0MqzjgV2xHxccJtRuHV2tRZYBXgmvElUwngnUYralOwfuAXTdaRKUcRyDpqLQ9XT7Ergrh9VOjVQbLF2dMSaYuVo2BOygbWWwa6WxEmqrCM92xLrk1qkBZ5xhLLzJbFXfEc22qDqyBZ7JU-fb6vsfxUt8fioj9EuVnkhKA69D2lfM/s1024/mini_short_tease_024.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done