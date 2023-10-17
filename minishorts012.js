//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2Hi5r1jN-eBv7COWO88Q69ICoekJrYh-4IOHQeBU3BYcI8uXcqjcIKPTM0wUAJu_reoO2Y6MMml6Tx1a9_Mkb0f9KUddS_v9qF1txdoCloMS1oF0PnMlEfwV8mMZBEUjClj32Ly9x7IiLY37-qtnUBOTIvocTwd-NaNroeGusAKqE_BT0Qk4iGiiWvfM/s1600/teen-mini-shorts-34.webp' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj95AeQn04AcWcMAp5inJkYyvJOtcKuROQmGGj1Aur-w7DAMZy3vP7kIXIX5-axclipvVetvnjsrwKrxI_0OlAJY-eWKUuqkIkmgqnTrkZnPTfsn5nI3TDFwuiW1eWNqQObHWYrSiloFtEDgk1PNMat-1YRFbQFPYkudgk6IPQBvJrol4OcVWPY5955Hm8/s1600/teen-mini-shorts-35.webp' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2GCSkEsAMmAAd9zWZs3rk8wMwEExvIE26b9PhKzAII2dKfmTIBGjuLPXGt_vM9lFsFeZgCnc4g0F4ktRYKoPjCj4Z9cCvjfLJmohfDgx_m2jMPlofCgbUSdsgsoPKatRosDQNh_S5niq6BOVBoowJlfCDsdGV6QYIQBE_h2t9jrAvcs_XE7y9ejTByrA/s1600/teen-mini-shorts-36.webp' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done