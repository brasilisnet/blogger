//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAgQksojHFd3SrT_FKHtW8Ooi3q1lm9AT1INlBlBWIiiAxw1DuhVXI1rGLU-yfp2Rg-xu6jtoABTtxNEdMquqwykHxcEy7EZAsQ74JLM8nRVw8GGNN-slzDhAnGEmqHvGANMm0ZkTxOcgvrFIiryJVOxrmzGyfwHRj9LsiqDsp4ROi2BeBBk4bvxEeu24/s1024/mini_short_tease_046.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht87qV_SccEpbudEC2QwabjtNm87QlJY2Mx1I9oJcputSPPs3tAgxzxrhU70erI-oAc0NCKkpKOCe8BITjr5qg_mELBexTbqWt16GcQkPihtsgFXGCSLTZlaoXEfaZzp7Q63TMY8uQUi6drNp3gzrTIgdrvJzFbWCZuJCPN0NXcm_ZqTq2ArqP8ujMqk4/s1024/mini_short_tease_047.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU7GapHGujdREuJlhvwUWVtQZIGnDOPl8drAd6UY9o2UhPo4mvV6FjZ3WcgzUmSMjOLPoV0ltuosPbVPC68brGgeDHvKUUdgaKLZLhKsUryJoCicXzaExAohIu2R7H1iTUIb6KCoo4cVeSA36iWArhJyBtSqcT2CQpxw8byR0weJ9zfJvYcTKQE9fmleg/s1024/mini_short_tease_048.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done