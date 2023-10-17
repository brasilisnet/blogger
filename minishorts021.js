//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3rlhpiX0UQLMHDy7QNzUS1oKlIdgdcY9isCvAsCZ4CiDldD2-JOwzDK5eRggXLnmvetNjs_yIiv09KBBlmz1pUIJFoxWByLJKujIjoRsUf0PQNdU_xqUz4sHU-wslKMBbGY_Y18mG5PRiJHE3V7unUzTGJW_xL-ruGLHtkUv4uiHntmBfEnAlp2kb2XE/s1600/teen-mini-shorts-61.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXiwRPRlF_x7rjgUPv2in8bEUhoAPQAffF-KlR6FEx9JnNtM7GSsuRhDOCnrIdistv9WcsJSHuCzyCabbr0CIsIi6egzEAIuSLl17ckXfm5Kq-MpSDiOMvP7-0yJkVWgtEduLpc_52PGk6sgz6KsNA1yMqe_SW25D3irgLispz47P_rtQQU7jRfm63Cq4/s1600/teen-mini-shorts-62.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6FOV5iix2amlJYRvilAmcng5vmR-E5iJHXkuQ9x3weDpVGPlCh3iUFIGLsTIf0VOV17kQlHqgjDpCLRryUXIR7dGuZBnU36yUhVy-07ppXtk1AbnESXJwto5Syky81xckJ-AY74Hw2Ih8g5NNNEKeqvHVy5-mlP-Ht7Pvxmjk3RketwugR63oPiGDQgY/s1600/teen-mini-shorts-63.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done