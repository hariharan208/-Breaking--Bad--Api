document.body.innerHTML=`
<header class="navBar">
  <div class="nav">
   <div class="searchBox1 ">
    <input class="nameInput" placeholder="Name"type="text"/>
      <button class="search" onclick="searchName()">Search</button>
    </div>
  <div class="searchBox2 ">
    <input class="idInput" placeholder="Id" type="text"/>
      <button class="search" onclick="searchId()">Search</button>
  </div>
 </div>
 <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">
    Filter by</button>
  <div class="dropdown-menu">
     <a class="dropdown-item" onclick="nav1()">Name</a>
     <a class="dropdown-item" onclick="nav2()">Id</a>
     <a class="dropdown-item" onclick="nav3()">All Characters</a>
     <a class="dropdown-item" onclick="randomCharacter()">Random Characters</a>
  </div>
</div>
</header>
<section class="container">
</section>
<article class="randonProfile">
</article>
`
//to clear random-character 
function clear(){
    randomProfile=document.querySelector(".randonProfile")
    randomProfile.innerHTML=" "
}
//to clear input box from the nav-bar
function clearInput(){
    serachBox2=document.querySelector(".searchBox2")
    serachBox2.style.display="none"
    serachBox1=document.querySelector(".searchBox1")
    serachBox1.style.display="none"
}

function nav1(){
    serachBox1 = document.querySelector(".searchBox1")
    serachBox2 = document.querySelector(".searchBox2")
    serachBox1.style.display = 
    serachBox1.style.display ==="block" ? "none":"block"; 
    if (serachBox1.style.display=="block"){
        serachBox2.style.display ="none"
}}
function nav2(){
    serachBox1 = document.querySelector(".searchBox1")
    serachBox2=document.querySelector(".searchBox2")
    serachBox2.style.display = 
    serachBox2.style.display ==="block" ? "none":"block"; 
    if (serachBox2.style.display=="block") {
        serachBox1.style.display ="none"
}}
//Random Characters
async function randomCharacter(){
    clearInput() //to clear input box from the nav-bar when random characters is displayed
    container=document.querySelector(".container")
    container.innerHTML=" "
    const data = await fetch(`https://breakingbadapi.com/api/character/random`)
    const characters = await data.json();
    characters.forEach(character=>{
        occupation =[...character.occupation]
        appearance=[...character.appearance.join("")]
   randomProfile=document.querySelector(".randonProfile")
   randomProfile.innerHTML=`
   <h2>Random Characters</h2>
<div class="randomCharacters">
  <div class="randomImage">
    <img src="${character.img}"  alt="${character.name}">
  </div>
 <div class="randomDetails">
     <p>Name : ${character.name}</p>
     <p>Nickname : ${character.nickname}</p>
     <p>Status : ${character.status}</p>
     <p>Category : ${character.category}</p>
     <p>Portrayed : ${character.portrayed}</p>
     <p>Occupation : ${occupation}</p>
     <p>Appearance(Season) : ${appearance}</p>
 </div>
 </div>
 <div class="randomButton">
    <button onclick="random()">Random Character</button>
 </div>`
})}
   randomCharacter()

//change the random character using button
function random(){
    randomCharacter()
}

//Characters Name
async function searchName(){
    clear()
    container=document.querySelector(".container")
    container.innerHTML=" "
   outputName=document.querySelector(".nameInput").value
   if(outputName ==""){alert("Empty input")}
   charName=outputName.split(" ").join("+")
   console.log(charName)
    const data = await fetch(`https://breakingbadapi.com/api/characters?name=${charName}`)
    const characters = await data.json();
    characters.forEach(character=>{
        occupation =[...character.occupation]
        appearance=[...character.appearance.join("")]
   container=document.querySelector(".container")
container.innerHTML+=`
<div class="charactersDetails">
<div>
   <img class="characterImg"src="${character.img}" />
 </div>
 <div class="details">
     <p>Name : ${character.name}</p>
     <p>Birthday : ${character.birthday}</p>
     <p>Nickname : ${character.nickname}</p>
     <p>Status : ${character.status}</p>
     <p>Category : ${character.category}</p>
     <p>Portrayed : ${character.portrayed}</p>
     <p>Occupation : ${occupation}</p>
     <p>Appearance(Season) : ${appearance}</p>
 </div>
 </div>` 
})}
//Characters Id
async function searchId(){
    clear()
    container=document.querySelector(".container")
    container.innerHTML=" "
   outputName=document.querySelector(".idInput").value
   if(outputName ==""){alert("Empty input")}
   charId=outputName.split(" ").join("+")
   console.log(charId)
    const data = await fetch(`https://breakingbadapi.com/api/characters/${charId}`)
    const characters = await data.json();
    characters.forEach(character=>{
        occupation =[...character.occupation]
        appearance=[...character.appearance.join("")]
   container=document.querySelector(".container")
container.innerHTML+=`
<div class="charactersDetails">
<div>
   <img class="characterImg"src="${character.img}" />
 </div>
 <div class="details">
     <p>Name : ${character.name}</p>
     <p>Birthday : ${character.birthday}</p>
     <p>Nickname : ${character.nickname}</p>
     <p>Status : ${character.status}</p>
     <p>Category : ${character.category}</p>
     <p>Portrayed : ${character.portrayed}</p>
     <p>Occupation : ${occupation}</p>
     <p>Appearance(Season) : ${appearance}</p>
 </div>
 </div>` 
})}

//All Characters
async function nav3(){
    clearInput()
    randomProfile=document.querySelector(".randonProfile")
    randomProfile.innerHTML=""
    container=document.querySelector(".container")
    container.innerHTML=" "
    const data = await fetch(`https://breakingbadapi.com/api/characters`)
    const characters = await data.json();
    characters.forEach(character=>{
        occupation =[...character.occupation]
        appearance=[...character.appearance.join("")]
   container=document.querySelector(".container")
container.innerHTML+=`
<div class="charactersDetails">
<div>
   <img class="characterImg"src="${character.img}" />
 </div>
 <div class="details">
     <p>Name : ${character.name}</p>
     <p>Birthday : ${character.birthday}</p>
     <p>Nickname : ${character.nickname}</p>
     <p>Status : ${character.status}</p>
     <p>Category : ${character.category}</p>
     <p>Portrayed : ${character.portrayed}</p>
     <p>Occupation : ${occupation}</p>
     <p>Appearance(Season) : ${appearance}</p>
 </div>
 </div>`
})}