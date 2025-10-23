async function insertNavbar() {
    const containers = document.querySelectorAll(".insert-navbar");
    const response = await fetch("./components/navbar.html");
    const html = await response.text();

    containers.forEach((elem) => {
        elem.outerHTML = html;
    });
}

insertNavbar();

fetch("https://api.github.com/users/nullghostty")
    .then((res) => res.json())
    .then((json) => {
        const logos = document.getElementsByClassName("navbar__logo");
        for (let i = 0; i < logos.length; i++) {
            logos[i].textContent = json["login"];
        }

        document.getElementById("avatar_url").src = json["avatar_url"];
        document.getElementById("name").textContent = json["name"];
    });
