const adjectiveList = ["Happy", "Sad", "Excited", "Angry", "Nervous"];
const animalList = ["Lion", "Tiger", "Bear", "Shark", "Eagle"];
const adverbList = ["Quickly", "Happily", "Carefully", "Aggressively", "Eagerly"];
const actionList = ["Danced", "Slept", "Fought", "Sang", "Ran"];
const locationList = ["In the jungle", "By the river", "On the mountain", "Under the stars", "Next to the volcano"];

let adjIndex = 0;
let animalIndex = 0;
let adverbIndex = 0;
let actionIndex = 0;
let locationIndex = 0;

let isAdjSelected = false;
let isAnimalSelected = false;
let isAdverbSelected = false;
let isActionSelected = false;
let isLocationSelected = false;

document.getElementById("adjButton").addEventListener("click", () => selectWord(1));
document.getElementById("animalButton").addEventListener("click", () => selectWord(2));
document.getElementById("adverbButton").addEventListener("click", () => selectWord(3));
document.getElementById("actionButton").addEventListener("click", () => selectWord(4));
document.getElementById("locationButton").addEventListener("click", () => selectWord(5));

document.getElementById("createStoryBtn").addEventListener("click", createStory);
document.getElementById("clearStoryBtn").addEventListener("click", resetStory);
document.getElementById("surpriseMeBtn").addEventListener("click", randomStory);
