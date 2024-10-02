//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXNCq7KVSTaDA6kJZFXWCGHJxYDdeouh2gXk2cVXiwByRhdeQ_NZJbkUAZuMHYqSPla6E4mwIqVfDqnHR7pKhG7Ni74vhyJ1Qc_sMJ1lX7uZzaRz9Me-6GioKyOe-vGpQYQpgNCFLCzS17lL_zhO2hiCJAbP7g8RhnjfZ5uNyfilty4vNF2Dx7TTJzGi0/s1024/mini_short_tease_085.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx_Li64VIAAX_n2Az_0_a4jaIGCd-A0YgzdJtKEzH9i9Xma3NS1xKS_ltjCe0hTUquMSh2tBy9LDfCeJ_koVIeqousrgJ21Nyrzxsw7jje-nGhzSqLifyRSlixlurNdqhpkjdob2RWiikvgoOdfUsgrEe8F9fq_XpeXeTvxtTLWtRvEo_Leu7HTmiME8Y/s1024/mini_short_tease_086.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLpFtW_xSPDur6w7qQqlUiFSLcVWhThKzSGkoRmAFYdgqM_gioWoQciwgTQ8Evy66B9hxiVGBnqvdkLf3vfg1AhmOB1zwdhbAnAybv4rtll8A7VHBQxQeuLkm7CQuOL0GOnnthymH8a011XItR0-_4J2EE-_h8Efwkvef0W7JAQ3UziYmkC6zgXf1x0kQ/s1024/mini_short_tease_087.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done