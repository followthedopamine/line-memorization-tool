import { textToMemorize } from "./text.js";
const app = document.getElementById("app");

const processText = (text) => {
  let newText = "";
  text = text.split("\n");
  for (let i = 0; i < text.length; i++) {
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
