let url1 = "https://api.jikan.moe/v3/search/anime?q=attack%20on%20titans"


let tabs = document.querySelectorAll(".tabs")
let tab = document.querySelectorAll(".tab")
let button = document.querySelectorAll(".tabbutton")
let images = document.querySelectorAll("img")

for (let i = 0; i < tab.length; i++) {
  button[i].addEventListener("click", function (e) {
    e.preventDefault();

    fetch(url1)
      .then(res => res.json())
      .then(data => { 
        console.log(data.results)
        console.log(images[i], i )
        images[i].src = data.results[i].image_url
      })


    tab[i].classList.toggle("hidden");

  })
}