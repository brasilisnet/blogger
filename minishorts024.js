//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFILIdXxBq9L0ZZy3Y9-E3Vs-jZHZNrdVpBWM-_rEGEMqUM4RKUm5p24_oaW9sx6R9wioECahQD_lTgjC9GkAHet9D_2qt5GBLCxMWwBbg_ueCYCbFzJjmJb39SiqZ-tIAfv-ortjzsnz1qqFgsTawhzkPzEtnBIP8_WjUhbEgaC75GpiMLGuiM07JRkY/s1600/teen-mini-shorts-70.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-_P0VD398JDREGtsDL5qkBjVBb4JmT88J_t04i_pX6UmuvxXPpn8Mu-rqWnp3D-wfvaJfxs525uvCk-W15YT39O3mTZoujcr1Jfjh30ROjP1bqBHjMaaq29chAWiHMw7MQuwu1DVPhQ08jdtNOMCLxrZw8Fo1AAfTCMTmagylQkoBNHMw6x9CXrdwLJU/s1600/teen-mini-shorts-71.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY26hEQtOi_AkHTd-iHUuEaMtsRcgAvOu5F_BETBDj-yrIhKst-InkUBdgk8uQQ33xy_1L0mhXk9-og_o0Y2Tb0ra5-q9WKG4a4pfwoPE8cGoMOOVjUGlhh1hplHLXPEJ8kDQsNM0RmKM-NwpY-hVa_ZI3w0z0Nq3SQZrbZu5Au2nmtcPBRtnOsNbA2R4/s1600/teen-mini-shorts-72.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done