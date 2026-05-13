import https from 'https';

const url = "https://drive.google.com/drive/folders/1U9bNu20fC1Fvmveo5VOx9a3Clg4Bcdx4?usp=sharing";

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for file IDs in the drive JSON blob, they usually start with 1
    const matches = data.match(/"1[a-zA-Z0-9_-]{32}"/g) || [];
    console.log("matches:", [...new Set(matches)]);
  })
});
