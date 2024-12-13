export async function GenerateSentence() {
  const response = await fetch(
    "https://programming-quotes-api.azurewebsites.net/api/quotes/random"
  );
  const sentence = await response.json();
  return sentence["text"];
}
