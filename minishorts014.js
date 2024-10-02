//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiupf8KFcVqFtzGMAQFpC182oGj9iAKIlqNKUj6_1Aw5CvmkdF_u3t6-i0wsuodXQHQjhfGLmERtvG2X5f_2IDaZd7x1Nf5Uh38NETXL7WtMdfBPmsZ9Gp_mgy7prFrB9R7FwbZf7iGZUZchxmvhT69C0X_shBbvFclNfmeLKU5RUPBUBb8ihaA_UN3r4/s1024/mini_short_tease_040.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZPu0crpr6rQMJe26AF31huUEBSVz-Fvfgle2qSlGce1bvnOJE9V5rSYJr3-xU4fngccgWBwxFHAE3gMMJnB6oprjmfoW4t35Ktzy721_yolkM9BAuN30j1sb0qTiMzrqylytYd4IsSyOQB9qCXWzjwXfMf-FbpBeJruZYzfx1LXQXjYPRIjNGfm3YwnI/s1024/mini_short_tease_041.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk6B9JjMM8hvjhkINR4aFvPr8aDHPbcGVCvS72GCnvkohVh2ELOVbkv6hFTdeKQ4eDpUBa3goNeYO31kLvCBUlvzNPeYvGHGHBJtA2-Thh8LAb58WFplBDDADfz2Lp9NFFg9_wpZK6imTavd27-SwKqVtnhReiDga0nBFbIist8Zdr2YdG3FUF1IoorLo/s1024/mini_short_tease_042.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done