import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function checkImage(id) {
  try {
    const url = `https://lh3.googleusercontent.com/d/${id}`;
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { inlineData: { mimeType: 'image/jpeg', data: buffer.toString('base64') } },
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
