import { automaticPrompt } from "../constants/index.js";

{/** On utilise la fonction getAutomaticPrompt pour générer une image aléatoire et empecher d'avoir 2 fois la même */}
export function getAutomaticPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * automaticPrompt.length);

    const randomPrompt = automaticPrompt[randomIndex];

    if(randomPrompt === prompt)  return getAutomaticPrompt(prompt);

    return randomPrompt;
}