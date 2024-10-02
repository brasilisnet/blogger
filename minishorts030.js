//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEaC6YGvNGdcZWRgpmDvNbRboHQ-f27OQrTxap61E8RaOtm2Dhk3jymYTFrmTc3yRWE02gVekrJ2Lv80jlQu_IOJKJpOwuQHal21KvZQ7z-Ub7u8BVQJ77NepiT9nT1i2I9u0ClbwCOk6kdxlgsucSJ_HQHEhwKBkbubYIEW_nOgeqqHtmnOJdK9MUvxg/s1024/mini_short_tease_088.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2Z6q8uCl7NNDvo1NugVj216i0oI-uybkfo7LjrEQSM1XkHKWRTa3CNEHcbDzEsW0-wvDDVoi9K0_bXNoYBPYmYK2H4gpM7hVe0pKFZ5hJbwUTCQP6VCYbv0ey2LEqQT4azT2w-dmX6yOdKKJWpgjsvfcsxUgmOzSSflpeiMA87b4fMinFADq0Ps10is/s1024/mini_short_tease_089.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt93Q36iMfzi4WATu9dkrFhYgn4YO9igxbbWsycQ_CV8-kgI4fPTKT_meG8lU7VmLw5WLDkMtodxcQWFI8QXVc2QucuyDidm_eZS7es1f_bxuyQnZ7lKew_nZ3afTZUNer2hOBXv9lcSlBWoSWX9Uelvwy50sjQYM3WqbnMiiAJzWBF-ae4p5seSZen-w/s1024/mini_short_tease_090.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done