async function articles() {

    try {
        const res = await fetch('./news.json')
        if (!res.ok) {
            throw new Error(`Error ${res.status}`)
        }
        const jsondata = await res.json()
        const articles = jsondata.articles

        articles.forEach(article => {

            // labels
            let navlist = document.getElementById('nav-ul')
            navlist.innerHTML += `<li class="navlist"><a class="navlista" href="#">${article.label}</a></li>`

            //Main articles
            let articlesdiv = document.getElementById('articles')
            articlesdiv.innerHTML += `
            <a href="./articles/${article.number}.html" id="article" class="article">
                <img src="${article.image}" alt="">
                <div>
                    <h2 class="topic-title">${article.title}</h2>
                    <p>${article.body}</p>
                </div>
            </a>`

            //Aside article titles
            let aadiv = document.getElementById('aadiv')
            aadiv.innerHTML += `<a href="./articles/${article.number}.html">${article.title}</a>`

            //Separate Page article
            const artlist = document.querySelectorAll('.article')
            artlist.forEach(name => {
                name.addEventListener("click", function () {
                    let title = this.querySelector(".topic-title").textContent;
                    // console.log(title);


                });
            });


        });
    } catch (error) {
        console.error(error);
    }

}
articles()