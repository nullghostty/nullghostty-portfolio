/**
 * Inserts the navbar HTML into all elements with the class 'insert-navbar'.
 * Fetches the navbar content from './components/navbar.html' and replaces the outerHTML of each matching element.
 * @async
 * @function insertNavbar
 */
async function insertNavbar() {
    const containers = document.querySelectorAll(".insert-navbar");
    const response = await fetch("./components/navbar.html");
    const html = await response.text();

    containers.forEach((elem) => {
        elem.outerHTML = html;
    });
}

// WIP: This function is incomplete
function renderProjectCard(repo) {
    const template = document.getElementById("project");
    const clone = template.content.cloneNode(true);

    // clone.querySelector(".projects__card-image").src = project.src;
    clone.querySelector("#projects__card-title-design-portfolio").textContent =
        repo["name"];
    // temporarily grab the language used however well need to fetch this data from the following api route:
    // https://api.github.com/repos/nullghostty/3-column-preview-card-component/languages
    clone.querySelector("#projects__card-tech").innerText = repo["language"];

    const elem = document.getElementById("projects__cards");
    elem.appendChild(clone);
}

insertNavbar();

fetch("https://api.github.com/users/nullghostty")
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        const logos = document.getElementsByClassName("navbar__logo");
        for (let i = 0; i < logos.length; i++) {
            logos[i].textContent = json["login"];
        }

        document.getElementById("avatar_url").src = json["avatar_url"];
        document.getElementById("name").textContent = json["name"];
    });

/**
 * Todo:
 * 1. In the skills portion of index.html; let's try to find a way to pull those from GitHub and Order by most used.
 * 2. Projects should also be pulled from GitHub and ordered by most stars. For the images, let's see if we're able to get a view
 * of the live project site instead of storing screenshots of the projects.
 * 3. Let's include a section for my resume.
 *
 * */
