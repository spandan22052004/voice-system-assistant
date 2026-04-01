const micBtn = document.getElementById("micBtn");
const stat = document.getElementById("status");

micBtn.addEventListener("click", () => {
  stat.innerText = "Status: Listening...";
});