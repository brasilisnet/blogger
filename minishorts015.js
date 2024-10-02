//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiSEU6Bml5AgBk1Wmtg3YcK8qJK3fN0GqdhrvVa1banhrvfKLJQvJe0J3SgkmaxwcelBbI7QshDeaer7J_TYvz2pKSJ2s-iG_X5WF82cFBOPJn2I2DrAFz6iQX462KACfRvK0F8vaUOUt5Sm8CknKCd27HTy9TecHzCIffrHFd4VMoZLgsOSYzZNLozhI/s1024/mini_short_tease_043.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYAgvketdeQo9RXfSXfN_LR8X8cFoFAyQAx82L3SkOp2kzG25MNNmb7V9dsM6KEie5Ot2Z28NtT38eRHK0TymQ3XReDcxLkkrviDgNVy3dVXGv40FDyJ8RlGPu4oAQgCtP0Vn8Z7tyr517XaC77i64nHqILxbc2zfpARkOUIlym_RQyGdBltljx801IR8/s1024/mini_short_tease_044.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCUf24Tw9X01FcVBL2aF1PGxsxJUFblqMWymQUgFELybweBFKza165RmdP054b3QRuAZyMozKh6XqHQaHcJyEqYFGfQhqvPPnPwvdIRAci0BZ2kXM3M-icS8ny0g3U6eprlJsTQW86uru1gNW3H6gCwIc_N_t7tCPF85CkZf00mw86TfJZcsQY989-q1k/s1024/mini_short_tease_045.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done