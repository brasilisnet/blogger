//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrSDUjfvIaOYb61wg7KJt6A78DIJlACx5qcVEXUcyEDTJJvSzRou8lxEi91U0OyWZnGB2oFwVKjaOShxQubdbMuiv8WovPBusZCoDvfPY0Qize56OJaHApdOhYJovXfjU6dcw5qAQ2IegfvaLvYJKABZZbXjTom_KBY3qdzmX21OOuooc6mV3DNQaTKrI/s1024/mini_short_tease_049.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_DMkvxDLMyTC3zMMOi9ZXEDIqj4lCMRH2_5ALW4D59T4nDMcDnrn39beT4V572rcNXPHyo3ARxbGrw2YAAogvDHtkfQb23usWMvmOLvQkI-hcsX-xdyBNzxC8oJyvFQbBEg9FOvMHjPmHg6t8pr6LMyXa2zPIAPiSkzboUNHqCz2y5p3J6I256icRjbE/s1024/mini_short_tease_050.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2H_cEBPzvMVnmwbtbXySbNPPAu0gnxHIc0njcbx-AzrmL3smDtvm0gBx_7CCTRT0plcLSl6j3sf0FRwPoVaFuTTKKTHCjUABpZgFUmbviVkD27uSqs-Y2TQ5C3YI8NEYc_wOsTo45kkQRnKzO4kERW1XgqoeOH8Y_gB4f0za-ux3MOsz8HJ_bXmUWHJw/s1024/mini_short_tease_051.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done