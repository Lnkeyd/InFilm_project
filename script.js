const prevCat = document.querySelector(".catalog_btnwrap_prev")
const nextCat = document.querySelector(".catalog_btnwrap_next")
const catalog = document.querySelectorAll(".catalog_container_card")
let slideCat = 0

const prevCli = document.querySelector(".reviews_btnwrap_prev")
const nextCli = document.querySelector(".reviews_btnwrap_next")
const card = document.querySelectorAll(".reviews_card")
let slideCli = 0

function forSlides(mas, slide) {
    for (let i = 0; i<mas.length; i++) {
        if (i == slide) {
            mas[i].style.display = "flex"
            
        }
        else
            mas[i].style.display = "none"
    }

}


function minusSlide(n, len) {
    if (n >= 0)
        n = --len.length
    else n--
    forSlides(len, n)
}

function catPrev () {
    if (slideCat == 0)
        slideCat = --catalog.length
    else slideCat--
    forSlides(catalog, slideCat)
}

function catNext () {
    if (slideCat == --catalog.length)
        slideCat = 0
    else slideCat++
    forSlides(catalog, slideCat)
}

prevCat.addEventListener('click', catPrev)
nextCat.addEventListener('click', catNext)

function cliPrev () {
    if (slideCli == 0)
        slideCli = --card.length
    else slideCli--
    forSlides(card, slideCli)
}

function cliNext () {
    if (slideCli == --card.length)
        slideCli = 0
    else slideCli++
    forSlides(card, slideCli)
}

prevCli.addEventListener('click', cliPrev)
nextCli.addEventListener('click', cliNext)