async function main() {
    try {
        const res = await fetch('../news.json')
        if (!res.ok) {
            throw new Error(`Error ${res.status}`)
        }
        const jsondata = await res.json()
        const articles = jsondata.articles

        //labels
        articles.forEach(article => {

            // labels
            let navlist = document.getElementById('nav-ul')
            navlist.innerHTML += `<li class="navlist"><a class="navlista" href="#">${article.label}</a></li>`
        });

        let url = window.location.href
        // console.log(url);
        let artno = url.match(/articles\/(\d+)/);
        let artcle = articles[artno[1] - 1];
        // console.log(artcle);
        let title = document.getElementById('title')
        let body = document.getElementById('body')
        let heading = document.getElementById('heading')
        let image = document.getElementById('imagediv')

        heading.innerText = artcle.title
        body.innerText = artcle.body
        title.innerText = artcle.title
        image.innerHTML = `<img id="image" src="${artcle.image}" alt="${artcle.label}">`



    } catch (error) {
        console.error(error);
    }

}
main()
