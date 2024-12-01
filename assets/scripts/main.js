// https://raw.githubusercontent.com/alex0112/dotfiles/refs/heads/master/.bashrc

function submitButtonHandler(event) {
  const urlInput = document.querySelector("#url-input");
  const url = urlInput.value;
  const errorDisplay = document.querySelector("#error-display");
  errorDisplay.textContent = ""; // Clear the error state in case it's populated

  const validURL = validateGithubURL(url);

  if (validURL) {
    fetchGithubURL(url);
  } else {
    errorDisplay.textContent = "Please enter a valid Github File URL.";
    setTimeout(() => { // set a timeout callback to clear the error and the input after a bit
      urlInput.value = "";
      errorDisplay.textContent = "";
    }, 5000);
  }
}

function fetchGithubURL(url) {
  ////////////////////////////////////
  // Invokes the code block update. //
  ////////////////////////////////////

  const rawURL = generateRawURL(url);
  updateCodeBlock(rawURL, url);
}

function validateGithubURL(url) {
  const githubMatcher = /[https:\/\/]*github.com\/.*\/blob\/.*/;

  return githubMatcher.test(url);
}

// https://github.com/alex0112/yggdrasil/blob/master/public/index.js
// https://raw.githubusercontent.com/alex0112/yggdrasil/refs/heads/master/public/index.js
function generateRawURL(url) {
  url = url.replace("blob", "refs/heads");
  url = url.replace("github.com", "raw.githubusercontent.com");

  return url;
}

function updateCodeBlock(rawURL, originalURL) {
  const loader    = document.querySelector("#loader");;
  const codeBlock = document.querySelector("#code > pre > code");

  // set the loader while we're waiting:
  loader.style.display = "block";
  codeBlock.style.display = "none";

  // fetch the URL
  fetch(rawURL, {redirect: "follow"})
    .then(response => response.text())
    .then(data => {

      loader.style.display = "none";
      codeBlock.style.display = "block";

      // Update the codeblock with the content of the github source
      codeBlock.textContent = data;
      codeBlock.removeAttribute("data-highlighted"); // need to remove this or we don't get any new highlighted content from hl.js
      hljs.highlightAll();

      if (originalURL) {
        document.querySelector("#current-url").textContent = `The file being previewed is ${originalURL}`;
      }
    })
    .catch(error => console.error('Error:', error));
}

// Update the code block with some initial text
const initial_url = "https://raw.githubusercontent.com/alex0112/prxs/refs/heads/main/src/input_state.rs";
document.addEventListener('DOMContentLoaded', () => updateCodeBlock(initial_url));
