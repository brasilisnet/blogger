//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWBA4mEhS_D3bIc9nK-2MBeYQpxlSY0xa-H6pjyu_fNcdkQQ225aBdyGLdtbPr1p49CsYEOrh8uHjuP5jCGuIhlqaxQKQV8EFRbR45zCBd0CBMn_iyJV63XNLQ8OBvasa5WdS-Ed1J4cDZSknIcxbMKodqojYZsyod-yJc5fNESLfrl8feXRyLaHN-1MI/s1024/mini_short_tease_007.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrKY5W-ODRnjNKkjASJUJ9EfFEOZ_fe5Iq8L8lqJM3rI3k9hEKryn1QHhfFKDkZJacHoBHu-HIaz1M7RZZrbNX4AJOpk8f6a38iJk5I26pF_LhTU5vZ-qcX3HsshhseDvKWwIVqcHQU0O4N-u8CyXy0J_wdeTcRsTBpqpRUQEb66asmL5hQmTkxYTeOY0/s1024/mini_short_tease_008.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIyEyeJTYD-h8TvmGDlNvKfd3j9u8Ai10UXky6mDQqHlMT_ZQcSjDHnvAX1jLowI7JFPbTVUcLbM36zj9SheKq9T984_oBREz1_M6y5R4AVLBryzE5dgj99nvPh314HlSc9WepGaxP6VTLtJKwYs14JGZ5MQVEY3c5Lce_7RZyrVqTNjgq4zLy7ykE1EE/s1024/mini_short_tease_009.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done