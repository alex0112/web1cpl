// https://raw.githubusercontent.com/alex0112/dotfiles/refs/heads/master/.bashrc

function validateGithubURL(event) {
  const urlInput = document.querySelector("#url-input");

  console.log(`If this were a real validator I would validate this url: ${urlInput.value}`)

  updateCodeBlock(urlInput.value);

}

function urlFetchHandler(event) {
  
}

async function fetchGithubRaw(url) {
  const resp = await fetch(url);

  
}

function updateCodeBlock(url) {
  let loader    = document.querySelector("#loader");;
  let codeBlock = document.querySelector("#code > pre > code");

  loader.style.display = "block";
  codeBlock.style.display = "none";

  fetch(url)
    .then(response => response.text())
    .then(data => {

      loader.style.display = "none";
      codeBlock.style.display = "block";

      // Update the codeblock with the content of the github source
      codeBlock.textContent = data;
      codeBlock.removeAttribute("data-highlighted"); // It needs to remove this or we don't get any new highlighted content
      console.log(`Got ${data} back from the fetcher`);
      hljs.highlightAll();
    })
    .catch(error => console.error('Error:', error));
}

// let test_url = "https://raw.githubusercontent.com/git/git/refs/heads/master/grep.c";
let test_url = "https://raw.githubusercontent.com/alex0112/prxs/refs/heads/main/src/input_state.rs";

document.addEventListener('DOMContentLoaded', () => updateCodeBlock(test_url))
