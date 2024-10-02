//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMiJZHCfQyhQF9di5RXyes3PDVIaxdEFCQwZfvskSgDkGp1xsI2gn4x6-9hAfk2xUl4WjEAd7y3lJFfB94ZeFcPxUulkY-cZY6LoH44iBUYkcceMes5G3hhBEOHTe4Y18fpEUMDn_9fgR8C0mPkAWpi5tEi86lRLQV4MPrk2Xxbb5XVMyv0KkQJNkpc04/s1024/mini_short_tease_013.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUlhUM97uzUnMRSGDrxAahd9sEweoV_p5D7SgUB1O7AOwqHvpBMQkfNGnXjCgDtVUSg9zXFUT2R1M3PTN78sMEOVxi3tkVle3BFGl_boeKeNgXz-ucURYew_firPImkGQGOiCkh9wmY2k8epCKVqI59bNL2880S4q9XrBx1rytb1xJKxn0CtMEKg1LwBA/s1024/mini_short_tease_014.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2pEGowUOAYXREB-WI6eSENd93O70tMFns59-dTiNo4YIPxjSVQJXcTZ2kM_uTMjd5BwcelYVotaskzQGoRMWO9RfvDZl77lZ0sEQycDwyJ9e464fKxqMiHG78l2l1GhqPdN6RQ5_EpuCJI0wvLZYpnly0BJIJVEBDaDhg3x_sD1KqqZnW_wQxZMWho1A/s1024/mini_short_tease_015.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done