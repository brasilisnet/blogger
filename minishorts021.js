//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfb8TqFPknbvD1uzPNmTvzzsaVARYTpuTPGdFqXYO7prQg8F5R7UB7zOi30XWmXP4s5POGpwhoCIeRrgxorMYB3GTHa0SK2-0bq0cnt4ezhHXIsT4abck7_0RY8kgQC1WM5FwcomtJ47DZ7yN4Xqbp13a1t_Yt8NF87A6Xh6SepurCaMXZMDbbHhsnRyc/s1024/mini_short_tease_061.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLlJVAhw_eUIhjQKiUrK8sgmC7_RM6mn60fTx4iEOYeRWAALHgyjIcAOL_bOE_BwAh9rqSdRqn4CMI6uQhBBSyPwZK6Xg2yaRPojTc2Bb5EFDOf5zsaeCNCkNmKqkkLjkwCizmqsLeegGki0iDNEEJZ3ebADq6A-WwQTYVgAg5LmMLsYwpzvP7kuNlEP8/s1024/mini_short_tease_062.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFOcXRU2FBzi_frkLpptx7Slr37Yx3_hN5V9Vhd4KOjbaz05DSDvCxtyKD44bIWihLqFTxIhkx8ugfpkTlhyphenhyphenZREmX6XDtV97JyidYJuNChrpsh3YzK0M49LN6ujCWdBLuuiPSHrivHFI0sqafXfTyF46nquRfsWQ_lkjLYwhLMBCHbTSxvInLd4Rv8qBo/s1024/mini_short_tease_063.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done