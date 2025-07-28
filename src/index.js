import "./styles.css";
import {Sets} from "./convergeSets.js"

const checkboxes = document.getElementById('checkboxes');
const content = document.getElementById('content')

function createCheckbox(convergeSet) {
  let checkbox = document.createElement("input")
  checkbox.type = 'checkbox'
  checkbox.innerText = convergeSet.name
  checkboxes.appendChild(checkbox)
}

Sets.forEach(createCheckbox);



function getSkillsets(chosenGames) {
  return chosenGames.map((g) => g.skillsets).flat()
}

function chooseSkillsets(sets) {
  let chosenSkillsets = []
  while (chosenSkillsets.length < 3) {
    let choice = Math.floor( Math.random() * sets.length);
    let chosen = sets.at(choice)
    if (!chosenSkillsets.includes(chosen)) {
      chosenSkillsets.push(chosen)
    }
  }
  return chosenSkillsets
}

function displayResults(array) {
  console.log(array)
  array.forEach((element) => {
    let skill = document.createElement("p")
    skill.innerText = `Game: ${element.game} Skillset: ${element.name} Target Score: ${element.targetScore}`
    content.appendChild(skill);
  })
}


let skillsets = getSkillsets(Sets);
console.log(skillsets)
displayResults(chooseSkillsets(skillsets));