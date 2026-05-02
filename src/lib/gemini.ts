import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Ask a question about Czech immigration based on uploaded official documents.
 */
export async function askImmigrationQuestion(question: string, file: File): Promise<string> {
  const base64 = await fileToBase64(file);
  const data = base64.split(',')[1];
  
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: file.type,
            data: data
          }
        },
        { text: `Based strictly on the provided document, answer the following question regarding Czech immigration. If the answer is not in the document, state that you cannot answer it based on this document.\n\nQuestion: ${question}` }
      ]
    }
  });
  
  return response.text || "No response generated.";
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

/**
 * Translates an array of text strings using the Gemini API.
 */
export async function translateTextBatch(texts: string[], targetLanguage: string): Promise<string[]> {
  const prompt = `Translate the following array of JSON strings into ${targetLanguage}. Maintain the professional but welcoming tone suited for a Zambian diaspora community in the Czech Republic. Return ONLY a valid JSON array of strings in the exact same order as the input.`;
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt + "\n\n" + JSON.stringify(texts),
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING
        }
      }
    }
  });
  
  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse translation response", e);
    return texts;
  }
}
