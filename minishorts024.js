//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq1yCnsQ321zKJwdWvxgrF4rjYaa9xQVtrlyitDZEeSKHqL5nZ0yQFYHxVkJemffMgld8UbWlud6lhqPgzQfFOMQY7JVC1cyIgtf3R0TGI2qV_yYuSDzKzGOyDTCLveatNUhiD0tWyDGuv05h9ILXF6jtYuZqfBjfUbhI6iktr3dxIOJHcWMsNshGOhx4/s1024/mini_short_tease_070.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8L0O-MlkzQ6EcOl-G0CEIX0Wny6Bu-_RTvB08_N3z9HC_oa3jB9Ei-f8VRYXUN9-ZrlkKNf6LGNmjY03MNk0Vl9j6_Le3ApxzewxRUxCO9mEnH8EVeDt_MvDIt5dk4Xa_l1FYI4IAQOuvGv4egs7WkVgO7ei5MtzldqkhMhuOhdpHiwWqNJ4YQ3cHY50/s1000/mini_short_tease_071.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGK-C525OX7BR8dYPJptQArxTNnI5WukyRo_PVV0d6eh1tjVcx0gZkFHlj9JtSfRHG5X0Uu_EWQMqx1G4ra6ndbGzDAajVTDO86EmZSnRLoGd9VfpcY4kCaKz1qn-QfhrIOmo8mByVcULYFLMNFp4GtmAG0B86z5UjOLw7fqNnVzV_fXu8SVlzznjXWJk/s1000/mini_short_tease_072.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done