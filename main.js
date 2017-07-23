/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let searchbar = document.querySelector("#musicsearch");
let button = document.querySelector(".button");
let music = document.querySelector(".music");

button.addEventListener("click", function searchbar() {
  music.innerHTML = "";
  fetch("https://itunes.apple.com/search?term=" + musicsearch.value)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(obj) {

        obj.results.forEach(function(results) {

          let imagesource = results.artworkUrl100
          let title = results.trackName
          let artist = results.artistName
          let musicdemo = results.previewUrl

          results = `
            <div class="wrapper">
          <h3>${title} </h3>
           <h2>${artist}</h2>


                         <br>
                         <a href="${results.artistName}">
                         <a href="${results.previewUrl}">
                         <img src="${imagesource}" onError="this.src=''"></a>
                         </div>`;



          music.innerHTML += results;

        });
      })
    })
    .catch(function(error) {
      console.log('Fetch Error :-S', err);
    });
})
