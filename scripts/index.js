import { textToMemorize } from "./text.js";
const app = document.getElementById("app");

const processText = (text) => {
  let newText = "";
  text = text.split("\n");
  for (let i = 0; i < text.length; i++) {
    if (!text[i].startsWith("#")) {
      let words = text[i].split(" ");
      for (let j = 0; j < words.length; j++) {
        let letters = words[j].split("");
        for (let k = 1; k < letters.length; k++) {
          letters[k] = '<span class="transparent">' + letters[k] + "</span>";
        }
        words[j] = letters.join("");
      }
      text[i] = words.join(" ");
    }

    if (text[i].startsWith("#")) {
      text[i] = "<h4>" + text[i] + "</h4>";
    } else {
      text[i] = "<p>" + text[i] + "</p>";
    }
  }
  newText = text.join("");
  return newText;
};

app.innerHTML = processText(textToMemorize);
