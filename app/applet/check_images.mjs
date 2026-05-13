import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function checkImage(id) {
  try {
    const url = `https://lh3.googleusercontent.com/d/${id}`;
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Quick mime type detection
    const isPng = buffer[0] === 137 && buffer[1] === 80;
    const isJpeg = buffer[0] === 255 && buffer[1] === 216;
    const isWebp = buffer[8] === 87 && buffer[9] === 69 && buffer[10] === 66 && buffer[11] === 80;
    let mimeType = 'image/jpeg';
    if (isPng) mimeType = 'image/png';
    if (isWebp) mimeType = 'image/webp';

    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { inlineData: { mimeType, data: buffer.toString('base64') } },
        'Describe this image briefly. Is there a blue truck (camionete azul)? Answer yes or no, and briefly what it is.'
      ]
    });
    console.log(`Image ${id}:`, res.text);
  } catch (e) {
    console.log(`Error checking image ${id}:`, e.message);
  }
}

async function main() {
  await checkImage('1taIMaeHgf1BGsXX2A6SwIoo3hoqWeUy3');
  await checkImage('1Y7O0KCJ05g52AkG_0Qy0RCgmYY9F2Dea');
  await checkImage('1hsN2606h2P8jrXH4PooJ-52RoQZ6kFQN');
}

main();
