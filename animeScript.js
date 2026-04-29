let result = document.getElementById("result");
let searchBox = document.getElementById("searchBox");

let animeList = [
  "Your Name","Horimiya","Toradora",
  "Naruto","Jujutsu Kaisen","Demon Slayer",
  "Re:Zero","Black Clover","Solo Leveling"
];

document.getElementById("romanceBtn")
.addEventListener("click", function(){
  result.innerHTML = "Your Name <br> Horimiya <br> Toradora";
});

document.getElementById("actionBtn")
.addEventListener("click", function(){
  result.innerHTML = "Naruto <br> Jujutsu Kaisen <br> Demon Slayer";
});

document.getElementById("fantasyBtn")
.addEventListener("click", function(){
  result.innerHTML = "Re:Zero <br> Black Clover <br> Solo Leveling";
});

document.getElementById("allBtn")
.addEventListener("click", function(){
  result.innerHTML = animeList.join("<br>");
});


// 🔍 Search anime
searchBox.addEventListener("input", function(){

  let text = searchBox.value.toLowerCase();
  let output = "";

  for(let i=0;i<animeList.length;i++){
    if(animeList[i].toLowerCase().includes(text)){
      output += animeList[i] + "<br>";
    }
  }

  result.innerHTML = output || "Anime not found";
});