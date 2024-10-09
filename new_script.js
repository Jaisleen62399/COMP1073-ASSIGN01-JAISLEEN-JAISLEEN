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

function selectWord(buttonNum) {
    switch (buttonNum) {
        case 1:
            document.getElementById("adjButton").textContent = adjectiveList[adjIndex++];
            isAdjSelected = true;
            if (adjIndex === adjectiveList.length) adjIndex = 0;
            break;
        // Similar cases for other button numbers...
    }
}
function createStory() {
    if (!isAdjSelected || !isAnimalSelected || !isAdverbSelected || !isActionSelected || !isLocationSelected) {
        alert("Make sure you select a word from each category!");
        return;
    }

    const completeStory = [
        document.getElementById("adjButton").textContent,
        document.getElementById("animalButton").textContent,
        document.getElementById("adverbButton").textContent,
        document.getElementById("actionButton").textContent,
        document.getElementById("locationButton").textContent
    ].join(" ") + ".";

    document.getElementById("outputBox").textContent = completeStory;
}
function resetStory() {
    document.getElementById("adjButton").textContent = "Adjective";
    document.getElementById("animalButton").textContent = "Animal";
    document.getElementById("adverbButton").textContent = "Adverb";
    document.getElementById("actionButton").textContent = "Action";
    document.getElementById("locationButton").textContent = "Location";
    document.getElementById("outputBox").textContent = "";
    adjIndex = animalIndex = adverbIndex = actionIndex = locationIndex = 0;
    isAdjSelected = isAnimalSelected = isAdverbSelected = isActionSelected = isLocationSelected = false;
}
function randomStory() {
    const randomCompleteStory = [
        adjectiveList[Math.floor(Math.random() * adjectiveList.length)],
        animalList[Math.floor(Math.random() * animalList.length)],
        adverbList[Math.floor(Math.random() * adverbList.length)],
        actionList[Math.floor(Math.random() * actionList.length)],
        locationList[Math.floor(Math.random() * locationList.length)]
    ].join(" ") + ".";

    document.getElementById("outputBox").textContent = randomCompleteStory;
}

