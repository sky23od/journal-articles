// Toggle filter menu
function showFilter() {
    const filter = document.getElementById("filterContent");
    const form = document.getElementById("newContent");

    filter.style.display = "block";
    form.style.display = "none";
}

// Toggle add article form
function showAddNew() {
    const filter = document.getElementById("filterContent");
    const form = document.getElementById("newContent");

    filter.style.display = "none";
    form.style.display = "flex";
}

// FILTER ARTICLES
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    document.querySelectorAll("article.opinion").forEach(a => {
        a.style.display = showOpinion ? "block" : "none";
    });

    document.querySelectorAll("article.recipe").forEach(a => {
        a.style.display = showRecipe ? "block" : "none";
    });

    document.querySelectorAll("article.update").forEach(a => {
        a.style.display = showUpdate ? "block" : "none";
    });
}

// ADD NEW ARTICLE
function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    const opinion = document.getElementById("opinionRadio").checked;
    const recipe = document.getElementById("recipeRadio").checked;
    const update = document.getElementById("lifeRadio").checked;

    let type = "";
    if (opinion) type = "opinion";
    if (recipe) type = "recipe";
    if (update) type = "update";

    if (!title || !text || !type) {
        alert("Fill all fields");
        return;
    }

    const articleList = document.getElementById("articleList");

    const article = document.createElement("article");
    article.classList.add(type);

    article.innerHTML = `
        <span class="marker">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="#">Read more...</a></p>
    `;

    articleList.appendChild(article);

    // reset form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.querySelectorAll('input[name="articleType"]').forEach(r => r.checked = false);
}
