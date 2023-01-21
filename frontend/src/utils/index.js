import automaticPrompt from '../constants/index.js';

export function getAutomaticPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * automaticPrompt.length);

    const randomPrompt = automaticPrompt[randomIndex];

    if(randomPrompt === prompt) {
        return getAutomaticPrompt(prompt);
    }

    return randomPrompt;
}