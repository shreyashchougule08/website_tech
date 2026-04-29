
let result = document.getElementById("result");
let addSection = document.getElementById("addSection");
let watchlistDiv = document.getElementById("watchlist");

let movies = {
  golmaal:"Golmaal is Comedy Movie 😂",
  avengers:"Avengers is Action Movie 💥",
  bahubali:"Bahubali is Epic Movie ⚔"
};

let watchlist = [];

document.getElementById("searchBtn").onclick = function(){

  let text = document.getElementById("searchBox").value.toLowerCase();

  if(movies[text]){
    result.innerHTML =
      movies[text] +
      "<br><button onclick='addWatchlist(\""+text+"\")'>⭐ Add to Watchlist</button>";

    addSection.style.display="none";
  }
  else{
    result.innerHTML = "Movie not found ❌ Add it below";
    addSection.style.display="block";
    document.getElementById("newName").value=text;
  }
};
document.getElementById("saveBtn").onclick = function(){

  let name = document.getElementById("newName").value.toLowerCase();
  let info = document.getElementById("newInfo").value;

  movies[name] = name + " : " + info;

  result.innerHTML = name + " : " + info + " ✅ Added";
  addSection.style.display="none";
};

function addWatchlist(name){

  if(!watchlist.includes(name)){
    watchlist.push(name);
  }

  showWatchlist();
}

function showWatchlist(){

  let html = "";

  for(let i=0;i<watchlist.length;i++){
    html += watchlist[i] +
      " <button onclick='removeWatch(\""+watchlist[i]+"\")'>❌</button><br>";
  }

  watchlistDiv.innerHTML = html;
}

function removeWatch(name){

  watchlist = watchlist.filter(m => m !== name);
  showWatchlist();
}

let animeArray = [];
let animeListDiv = document.getElementById("animeList");

document.getElementById("addAnimeBtn").onclick = function(){

  let animeName = document.getElementById("animeInput").value;

  if(animeName !== ""){
    animeArray.push(animeName);
  }

  showAnime();
};

function showAnime(){

  let html = "";

  for(let i=0;i<animeArray.length;i++){
    html += "🎌 " + animeArray[i] + "<br>";
  }

  animeListDiv.innerHTML = html;
}

let notesArray = [];
let noteListDiv = document.getElementById("noteList");

document.getElementById("addNoteBtn").onclick = function(){

  let noteText = document.getElementById("noteInput").value;

  if(noteText !== ""){
    notesArray.push(noteText);
  }

  showNotes();
};

function showNotes(){

  let html = "";

  for(let i=0;i<notesArray.length;i++){
    html += "📝 " + notesArray[i] + "<br>";
  }

  noteListDiv.innerHTML = html;
}

function showBox(id){

  document.getElementById("movieBox").style.display="none";
  document.getElementById("animeBox").style.display="none";
  document.getElementById("otherBox").style.display="none";

  document.getElementById(id).style.display="block";
}

showBox("movieBox");