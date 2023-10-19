let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "ih jahat (＃`Д´) ";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
