//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUcxhtx6RpW2DrflK6NaaQvP-nxhMLZrvKuEEqKV_R1gdG8CfXUYFACwdXlS3X0hcZIFcXNCJaD0rUR5Fg_etc5mYK3vHNc1T98nLKwB6ttFV5VD9p7MmlgjLDYp2zg1FuH-2RQhcMIdwRH09heIFaHiDGlNXrIPpc2QZ0z7-X9RrjW1ju0wrfZQAAUeQ/s1000/mini_short_tease_079.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9jkjLOGWqcOZgVNuSBUeKhwEjCsAmn3APKP5h0TjwV4xZsYMM7qwCqxnEXtKfEDgMtGPuIDibKKNn12iXt5Fyc7wZ9nMIGz4Fw8sqGCU-IL3IoF85V2Iv2WUFFuDEubOpznvrUYzLBp8Rvq835hSmLkA2Z8qOL9jg6GMG9i8Ja9J3vhoT3tCqvVU_Itc/s1024/mini_short_tease_080.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhswCujocjdzM1Pj6QmujrVyeQZZeY9pzu0jiHVS07sxqbARzPFEk1sNFqRS_grWirGd6dOWFyFeuVlx3lAwYFS0yZtBcMqmTVKm_e1EjKaGCqeFNpYe64Te5OUyc8xeMdOKtMIWNmRWJFQhv-YILGsFlElV2XTzFvMXvH-DUezbtLqUmycj_JiFFF0OB8/s1000/mini_short_tease_081.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done