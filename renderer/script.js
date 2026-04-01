const input = document.getElementById("commandInput");
const button = document.getElementById("submitBtn");
const stat = document.getElementById("status");
const output = document.getElementById("output");

button.addEventListener("click", handleCommand);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleCommand();
  }
});

function handleCommand() {
  const text = input.value.trim();

  if (!text) return;

  stat.innerText = "Processing...";
  output.innerHTML = `<p>You typed: ${text}</p>`;

  // Later: NLP + system actions here

  input.value = "";
}