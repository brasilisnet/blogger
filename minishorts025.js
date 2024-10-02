//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEm8wCMn-e7XywGjJVDiIw_Ui6tpY_bYqUfat5lbLJY6d1g2yOtxqXYXJebYfUP-44FnoEoys3DTHyyq-i1ko7F-FWlr2c49JQPlEK_qs3Zky5uOzlX5IHmcfCPZ_viVW1Xa18BctMfEuWY4nhnnT6UnlnimN-XtrRXvcpPdByFlBWVCrlWl1RQPLzij8/s1000/mini_short_tease_073.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCWQNwiGYlXC9rHjiL8JcadRNTZ284GWZwt06eG_iU_b-K8dk3c88XnhI-DKMA4mr87j4UHrhto_jV5kJOr7Fab-gfQ9DragQc2-fY2auo7FPvrX8L7yNPk0jtvbQQQSNpYC0V5AAmOsdTzCTmPh0iH_197oAKUMz2FUopRErRpuovC6gP7wvT908XK-s/s1024/mini_short_tease_074.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdVws3RtZDp0cZlIklly4-9eCGFrAq5_oNzUwUaOL68s1uEZK7nXEzP9R4m2lM9rrig87v-3u91QytXQcMcKzuYxPoXCSjYduP9MJlrByV-6guB52Z8XrkWNYBm8U1otLhFHJOiK76LfF0n_yfTR04JvesLFPrbFSQIPatmSxGcwhlLIBCXp8htYkDWo8/s1024/mini_short_tease_075.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done