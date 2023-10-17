//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP4qfwMFMcvZ5bPQza1TlVr7_y9KJxwh4EsSUZjIlxgA6lZkHruPePJ0udC654BH986P7SDn05RdXwUyF6qMGXSqQYSxMlz1VaP4YFeu1EJiPfcNB9bfY0F3piyYmbqT3lMwmf3EbCl27RILQpWhWBAqdhXOo7_eHIGIVL70Ezzc6j1_KESOpD79bi87E/s1600/teen-mini-shorts-10.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4am4YZa6F-_gWHWlPtwI6RVwQbUPtWx1fvI_NGR1YEeGsqR6K-755qELxocKfAENeh0e7AaoIqr2RYAveUN2igjY256PjzlH8h0G38JKl3wsDJvtklQmQzpxlVBUBf8DQ_GQTS9OeBOjIxxtktihzdycD4bmfp-rBmZryn_LelejgKNPgZU33dZDnNiU/s1600/teen-mini-shorts-11.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh__gbhnG1Cwg-B8o4deiRw9BxF-KfWV6GeEyLlXkFL4P-ZcoPL75Z_ydJi_Mn48y1iYZxOf4nai-s2qJg0p8glDSUiuizNx2LNnyA6AxF6IckvV9m7YUvWaQrat2llmLpbcUnxtAiu6Cb8-bkS2OiYeKwiId0VZO1fBn7g8RhJ3ygA_ErsXm_AuodABMo/s1600/teen-mini-shorts-12.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done