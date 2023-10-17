//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwpaPZLYzq4q2silhS1egBImoAGNzZ-VJYpjajN8jF4KxFj85BdRQfwcxaRTSpCrQYoCRFTDCa4-yPP0I13-FWVrgfafXzAnM0eW9thCjix1Pcl7M7BXtfsJ2v9TP39n8MfA-NVNeTpk1TyQTQph7-cbItlg6HJKY4tZhF52R75twRRreqdTH4JauAnig/s1600/teen-mini-shorts-43.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicfdSepzDwqgC1cD-5f04RlvW0ucLF6QNE5DK9r7DpUguJmOe0Wi-VoE1vGhbR9azEZ0RV662jUSKwMkiFYjGVZCZw6xYngQZrGixUtlSQkjeLRnE-L9D6JzJropv6bKfOxUKvh9wnQqri-FSQ7lo1LjfmWapL7kWFq9tBtxL-7AIMDF1xf9hNd7VCbxo/s1600/teen-mini-shorts-44.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAK591pPoBDwNp6thTfNQSIg1A2b61jhvxGUpQvTlJj2GZMqkqucl7B-69FzLLmHnMVvEU2D2U5iGvmqrkunZgQ-TockIIH5qPTzW8xDNhg_Kj92qqu1QigFeiYpWp-0npDx30ZZT3u41XWH3AXYi8quxYY2nLB-mzBnNHOF_i823OaFrK7RXNJ4ddeKw/s1600/teen-mini-shorts-45.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done