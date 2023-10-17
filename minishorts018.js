//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKHAIuqhDiCeX1CGfSMNa_68Y-92gtCkIwtE-UgwTnaKPWE6DBkXM-pgx7eLjFoBmkPftRnAvq3_-dQtncvOeO3-wcw3qn29bMSPgSn1AaGb12HQ8bZ7uVD89yEphqOwnzCLkpVix7S74XytQKFZ_lWCdojuzSjltPcqfqTTI5cgJXxWaRgD81Emqm13w/s1600/teen-mini-shorts-52.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUO6z4G2GtnP7hOVSISs0D6zoctT6x7whprtzr6wg4qT986ATcEr1LxVFPHOIWufW4DSyAacCYBP8SvqORYnqAy25dtIlLRj4e6NZ7PCc9chX-udW3SJ1SMt7NoaX52x_d8htymivp_o3uUELrIvMHGGyj7PcrzDBQj464tnjJFLQOZlhAFLgt6-iav0Q/s1600/teen-mini-shorts-53.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSME0cqD5NRZorknFc0-3uM1vZLKUXikGezLvpLl2G8MwHTjP5LtYvcCl56MS3u3s43PSQQRKy1vw0ToOjfq9xJ-PbX1e1k8CXo4zQSnd7dgqJmWV15N3qxZu35jQt1O2Py26NaW21E5yvnRlAzgnXztYPnCinE1O9dryIYfvOZaaPYPuX-5s52kF3q0g/s1600/teen-mini-shorts-54.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done