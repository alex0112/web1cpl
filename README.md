# Web I - Prior Learning Credit

Check this page out at [syntactic-semantics.surge.sh](https://syntactic-semantics.surge.sh/)

This small static page takes a github file url, validates it, and then fetches the raw code content before HTML escaping it and running it through a syntax highlighter and displaying it to the user.

My goal in creating this page was to demonstrate the knowledge listed on the syllabus:

![TODO Syllabus Image Here]()

## How this site was built:

I wrote this site in vanilla HTML/CSS/Javascript with the goal of keeping it lightweight and easy to statically serve through a CDN. I used a simple CSS Flexbox for the layout and designed it to be reasonably mobile responsive. Unless indicated in the credits/acknowledgements section, all the work is my own written with my [preferred setup](https://github.com/alex0112/dotfiles/tree/master). This site is deployed with [surge.sh](https://surge.sh/).

### A note about A.I.
I do not use LLMs (e.g. ChatGPT, Claude etc.) to generate code, as I feel this ultimately deprives me of the context surrounding a codebase. When working I typically leverage LLMs for concept related questions, search, and rubber-duck style debugging, or perhaps simple demonstrations of syntax. For this project I avoided code generation of any kind.

### Credits/Acknowledgements
- [highlight.js](https://highlightjs.org/) (for syntax highlighting)
- [GitHub animated corners](https://github.com/eugena/github-animated-corners/) (for the animated github corner link)
- [This public domain css reset](https://meyerweb.com/eric/tools/css/reset/)
- [This favicon generator](https://realfavicongenerator.net/)

### Other Projects
For the sake of demonstrating experience, some other projects I've done are:

- [Yggdrasil](github.com/alex/0112/yggdrasil): A wikipedia spidering and graph visualization tool (now archived). Built in React/Rails. I was hosting it on Heroku's free tier until [they discontinued it](https://devcenter.heroku.com/changelog-items/2461). When it functioned it would allow a user to paste a wikipedia URL and (after validating it) generate a D3 graph of linked articles.

- [Silence Between The Notes](https://silence-between-the-notes.surge.sh/): This was a very very small proof of concept I hacked together for a friend one evening. It's really just an interface for a [javascript library](https://www.vexflow.com/) that renders muscial staffs to a webpage.

- [Techcyte](https://techcyte.com/products/automated-blood-differential/) At a job I had in 2014 I was responsible for standing up a prototype web application that read machine learning data from a database and allowing a medical tech to correct or annotate images of blood cells. I was responsible for the front end all the way up until the database read. My understanding is that the app has changed significantly since then but you can still view a screenshot of it with some updated styles on the linked page.

- I've worked in a myriad of web adjacent roles, often involving security. Feel free to check out my [GitHub Profile](github.com/alex0112) or my [LinkedIn](https://www.linkedin.com/in/kingsfoil/details/experience/) for details.

### Running this project
If for some reason you wished to run this project locally, a simple call to `make dev` will do the trick on an average UNIX like system with python installed.
