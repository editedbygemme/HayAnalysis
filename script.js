const button = document.getElementById("surprise-btn");
const factBox = document.getElementById("fact-box");

const facts = [
  "Horses can sleep both lying down and standing up.",
  "A horse's heart weighs about 4–5 kg.",
  "Horses have nearly 360-degree vision.",
  "They can recognize human emotions and voices."
];

button.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factBox.textContent = randomFact;
});
