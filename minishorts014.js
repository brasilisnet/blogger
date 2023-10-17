//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMOqoWNdAkweHtWVyB9g86_fHZ08itLh8N7aKHt2UW337ysOTEiTxB-g8qR42N-zVOAIzyJvxT-rOMF3r9rvz-MsZZZ6w-ve_YE6NQ9A2MJRbdHX6MGJTcAw9A3MzpoQiQB3iHJJHlo9f-XbeHg57krmTj2LUMRwSTrERdOyPPPsXedvzOSLGsJfTrRhE/s1600/teen-mini-shorts-40.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrd6KM4583_DgNRISvKrDw0o7h6k2HFvjgspftBKx0dXaIOf9HgEc8dut13DxVZFTXODT6BG5LL1qEZCMBy_HC1jqil-cW2Vn7Zsna1p1mttupt59zurkoXlgOQtD6BT0GOe-AbM2XWJ6WGITaNI6oITrtcApYMbQam9Uogyw2nyd-9PgtI5nYFwujSAI/s1600/teen-mini-shorts-41.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnOQEovMebVIuF-PRZQTcRhgtCPUeitGqyqti8sOPn0f56CY1DKiChsmLRmF65cygTaHkBig4BoWOOLpn-njNWaFDhZz1Mtqk2UXReLA4Ol9HlcUfBp5UXp_ICKncB3ho4TboFNg4kV0PZDnLDV5rccaE8Tib_PutJ93gK3LRalYKCBYgdMqHnGIlmH_o/s1600/teen-mini-shorts-42.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done