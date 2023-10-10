window.addEventListener("DOMContentLoaded", () => {
  const repleaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerHTML = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    repleaceText(`${dependency}--verson`, process.versions[dependency]);
  }
});
