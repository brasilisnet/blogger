//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK62kKruQUjX0NmGgOWxt9rOLQygVhvy9FfIWW8webH8r7sVqxnutorOXRqXZ1-6_2JSYs_6Kqro2BHvh5PgXlpNS0UE3aleBpqKieojRVrQpBpj8kDVDSLN6eTQB_Zg0XcpLN6EASzV4kdIFxbF2IvByIwNlHBq0X8rqjVFrJzYbjbiJPyItU05_WEBI/s1024/mini_short_tease_028.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRBMUMH-Xw6fOd1g81y2kjQ-Hb2AeaDphFmGh1E37-LOSE0NkCrtJWt3MbeO4fEvIff-_aQeXr21S4K_BehJnA36eBJekl2bmnz64TghR028lI_tqFmLU7yTAXFAriyKOHWKTydxFIBCmgvcspR448wkqWHvnR6bTl7w_0gbgJybOMiAjPlOECzlOqmyM/s1024/mini_short_tease_029.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd2ejqWJP_p75IhPda2ldVWLUydv569bzx-j79Vf7H-SCR277StkF1KQJYx7AkWjdeLmx4OvAWDKWXdEQ6PZC5iXgqF5sS7zxKvleSZ8L_yUo_6vTvknZRYU6qau_RLACE10NSPKNBygdgl-ZEpwG0XKZtmbWH960x4uiNcSskl_mXz5nFSjHN6LMeNlU/s1024/mini_short_tease_030.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done