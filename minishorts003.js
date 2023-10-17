//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgfyyJXEZMEmP11adH7a6ZNaFwDUc2s5708scI_tjmQr7VKZSpYdl7N25HaU4KK4T5iaU5ejMCZyL3QoDjhAG57dnTG8WzD0BUlGRn4qgkiihfPzGdUIhUv5ahRyCKug8yb4n05YASIrAKEhXSz6gx5nNWgaaSgASjmEEomnXr0rEC7he4-RcHZmhumQo/s1600/teen-mini-shorts-07.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidYYrjtdg_mayPvhcdCP5R1SgXKYugiJ6xmSDex1vID3-LeJOw-t6ojuD3E8bAurG57M5YAmYPwKbjVekfTBKS7AzFlTTJe9KiysZaldAbprhQIOl0AI1XLNI0DPCJz8Xn2pf98EIrUSukhATmVg7zTqqeeqgCB4fx8USze9aO7vyP4CHFPgwvK6YYcqo/s1600/teen-mini-shorts-08.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW0JB8vGryR7zoFSIa-I0rSk6G4pJNCMy3J4iY6NCshMnU9Aos5GHZCoqiCFaaAtGIPXg17Sf9MKqwU86PPbRc1SMQ7F2oAp68afsCJsZcip6VHZilXRo48f29QItaZVrfm2_t5OCv4wktEwSIqlHCfQ3WPq7ggRGKww9BJurlqO8Teu3pXHJJKMIU9b8/s1600/teen-mini-shorts-09.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done