//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgroimpvHc2tGVmlPcCNtT3i4b6WrOlt5EGiWYb1qHQn7KK9_dLJNk5otZoF-3YIZ1yPdUa_WuKoY0d7FBEkGRZOT61VxvUXHpFlsPviMt4yh6w6RMwsjl9C4yfpUcJB_LkjWci5UQzidpIkGf3kZtSNvhDUusS6QExEXOysD1HeN8dqPN6yn3Own2fb1Y/s1600/teen-mini-shorts-19.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM_2sR4nkwa7mEvnUw3Zg__KkRQZoCI_fWnT_1gRyZt2C8v8UqaIhniLLnNQFGb3bU01jtCVS5UWCgfTiWMj4t8XPlm0orhfHcVFoO5V2Q6ik2MPAe1-cILb9aVtjaUpzwBF3D1S1kVhTkaaPE_5vtIyBJuvBFYtvytsIYSC8Fu1QduUmeNbeIfFGT3_Q/s1600/teen-mini-shorts-20.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidve-3efMbVwn3kkObpwkUZKHSNHdIx1IuJLHNMTlbaxy-mhCc4CzC-PY_SUBl19sE7A6ba-STlMf5fPIyahrTRRAEFq8VxvGTMnc1Y0cwdaCOG_U20pHozQvLwMOAlkmwS5vOm6U9M9fXcbC6Y-yyd8VaBabKW7TWachue3JCrCIw4fOFtKGNcf15zwk/s1600/teen-mini-shorts-21.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done