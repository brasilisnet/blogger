//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI3BDQYaU1mTOoZlSQLOCGp31C4AtC9RO-2zLdGVMDf0xyg_4fg1Vyh1mS3n6LKHKQL621mM4xONGHOOScR47izCVpWK00ZbgBA4X6ra6hw85qLwS1AmrDgkeC1rOPQ8UlvhKhHPjlsZo_DLp_yxiKmeHwP3YYtSnqPd-ehoyPnIMM5Cw0mdru4VgV_QM/s1024/mini_short_tease_064.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuruxbQpGx3GUpZOjo6KIjLtKekAn1n0e44r71keaFXD_mWfMG0UYSVSGGax9LGVTLrpH3yoGa86F3Z4cPCakj2BjiiCXBlhI2Q026YGtlzk0PWvzS7qwGHPmbANSJ5RO8MJr1pi7JXPlpnV0Jek7mqXjTrR6HE84tsQaQbFpoE1JDjP1fzEgZxnwyi9Y/s1024/mini_short_tease_065.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVvb95Vemw772JXCt0BryS5xMeURi1N8Awn3tQdM-895_aazqRMjMOUg5HqBjsopj_WfKkXUzoHGC8OuvTi1RdSyu7RlaXKj2zyVWoYjiriSoyLLMaYEY8S44aWGYvUHrXQsKhxSmjUouRneIaHIuTUIfD2MY4yb9XNBZFNR-Hq0Itcf9yY8gRi_AUO4I/s1024/mini_short_tease_066.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done