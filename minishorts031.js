//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgraq-vsEYm0Vxc3HG8_pcoeH58g5e6fhzVm5_qCFvFXPNn3O0Gv364vxVjAuOBZDKsUP6GW53pWHtD3HhTtCN_aWX6vCO58aw3iDMJUhFiM6Vw35HkmzylLv-iPAp0_pE4WoBzzwXDgcp-cDrVcyruVnfFRElr02T9R-IjFvm67Ikm4f5kxVr6PQZ97Jw/s1024/mini_short_tease_091.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCjwKjsr7IbJALwSKIrGScl0xY6aclBgPkj_Nz_zQGAT5s2HoJw9NjPYkcg5cctE17OAa8zRtIYNcrP1bnJu91VJe93sBiXj3ePywutTQSMLABY3lQl8ZoRoMILuKbeKknMxeW9fDYFcwOqT9FTSUHtNc0UGvFP_VkeNvC_uJVUKgLwtu3C5K6BPL0V-k/s1024/mini_short_tease_092.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top' border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipSoMo2mhiMllLG-8MdI5llZT5ZTMz23mpkG1p3Ttbw57sKAB5eoW3oKvUMRiqT9Hua1vI5tD-j6GfvIjPhUmyj5vKIsL1qVo8fEVNVvxL33Od3jtzYV0BCk-8saOCHfhUJbJD8n7VNRLfUbsOo0T1x-RraTsoFESC1dGboCcVaBHb7pw1dHd8In5Zugc/s200/mini_short_tease_093.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done