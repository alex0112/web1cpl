// https://raw.githubusercontent.com/alex0112/dotfiles/refs/heads/master/.bashrc

function urlFetchHandler(event) {
  
}

async function fetchGithubRaw(url) {
  const resp = await fetch(url);

  
}

function updateCodeBlock(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // Update the codeblock with the content of the github source
      let codeBlock = document.querySelector("#code > pre > code");
      codeBlock.textContent = data;
      hljs.highlightAll();
    })
    .catch(error => console.error('Error:', error));
}

// let test_url = "https://raw.githubusercontent.com/git/git/refs/heads/master/grep.c";
let test_url = "https://raw.githubusercontent.com/alex0112/prxs/refs/heads/main/src/input_state.rs";

document.addEventListener('DOMContentLoaded', updateCodeBlock(test_url))
