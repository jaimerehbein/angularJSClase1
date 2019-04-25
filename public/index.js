
console.log("talking");
// 1. First select and store the elements you'll be working with
let searchIn = document.getElementById("search_field");
let submit = document.getElementById('submit_button');
let searchform = document.getElementById("search-form");
let searchResults;
var elementos = document.getElementsByClassName("song-play-area");

let player = document.getElementById('music-player');
//console.log("what's in search?:", search);


// 2. Create your `onSubmit` event for getting the user's search term

submit.addEventListener('click', goSearch);
//
function goSearch() {
  let searchQuery = searchIn.value;
  //console.log(searchQuery);

  // 3. Create your `fetch` request that is called after a submission

    fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=' + searchQuery )
    .then(
      function (response) {

        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        } else {
          response.json().then(function (data) {
            //console.log(searchResults);
            for (let i = 0; i < data.length; i++) {
              console.log("show each title:", data[i].title);
              let markup = `

              <!-- Single Album -->
              <div class="col-12 col-sm-4 col-md-3 col-lg-2 single-album-item t c p">
                  <div class="single-album">
                      <img class="${data[i].stream_url}?client_id=8538a1744a7fdaa59981232897501e04" src=${data[i].user.avatar_url}>
                      <div class="album-info">
                          <a href="#">
                              <h5>${data[i].user.username}</h5>
                          </a>
                          <p>${data[i].title}</p>
                      </div>
                  </div>
              </div>
               `
              document.getElementById("results").innerHTML += markup;
            }
          });
        }
      })
  document.getElementById("results").innerHTML = "" //this clears the page for the next search
}

document.getElementById("results").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName == "IMG") {
    let url = e.target.className;
    player.removeAttribute("src");
    player.setAttribute("src", url);
    player.play();
    let playerSource = player.src;
    console.log(playerSource);
  }
})
// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
// ?? data[i].stream_url  ??
