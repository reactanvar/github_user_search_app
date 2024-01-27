const API_URL = "https://api.github.com/users/";

const SearchInput = document.querySelector("input");
const SearchBtn = document.getElementById("search_btn");
const ModeBtn = document.getElementById("mode_btn");
const Results = document.querySelector(".card_body")

currentUser()

async function currentUser(){
    let currentUser = "reactanvar"
    const res = await fetch(API_URL + currentUser);
    const resData = await res.json();
    console.log(resData)

   const  div =`
    <div>
        <img class="user_image" src="${resData.avatar_url}" alt="user profile image">
    </div>

    <div>
        <h1 class="name">${resData.name}</h1>
        <p class="username">@${resData.login}</p>
        <span class="user_bio">${resData.bio}</span>
        
        <div class="statistic_section">
            <div class="followers">
               Followers: <span>${resData.followers}</span>
            </div>
            <div class="following">
                Followings: <span>${resData.following}</span>
            </div>
            <div class="repositories">
                Repositories: <span>${resData.public_repos}</span>
            </div>
            
        </div>
        
        <div class="others">
            <div class="location">
                <i class='bx bx-map-pin'></i><span>${resData.location}</span>
            </div>
            <div class="company">
                <i class='bx bx-buildings'></i><span>${resData.company}</span>
            </div>
            <div class="link">
                <i class='bx bx-link' ></i><span class="link"><a href="https://${resData.blog}" target="_blacnk" >${resData.blog}<a/></span>
            </div>
        </div>
       
    </div>
    `
    
    Results.innerHTML =div;
}

async function getUser(){
    const res = await fetch(API_URL + SearchInput.value.trim());
    const resData = await res.json();
    console.log(resData)

  if(!resData.message){
    const  div =`
    <div>
        <img class="user_image" src="${resData.avatar_url}" alt="user profile image">
    </div>

    <div>
        <h1 class="name">${resData.name}</h1>
        <p class="username">@${resData.login}</p>
        <span class="user_bio">${resData.bio}</span>
        
        <div class="statistic_section">
            <div class="followers">
               Followers: <span>${resData.followers}</span>
            </div>
            <div class="following">
                Followings: <span>${resData.following}</span>
            </div>
            <div class="repositories">
                Repositories: <span>${resData.public_repos}</span>
            </div>
            
        </div>
        
        <div class="others">
            <div class="location">
                <i class='bx bx-map-pin'></i><span>${resData.location}</span>
            </div>
            <div class="company">
                <i class='bx bx-buildings'></i><span>${resData.company}</span>
            </div>
            <div class="link">
                <i class='bx bx-link' ></i><span class="link"><a href="${resData.blog}" target="_blacnk" >${resData.blog}<a/></span>
            </div>
        </div>
       
    </div>
    `
    
    Results.innerHTML =div;
  }
}


SearchInput.addEventListener("keyup" , async function(e){
    if(e.keyCode == 13 && SearchInput.value.trim() != ''){
       getUser()
    }
})

SearchBtn.addEventListener("click",  function(){
        getUser()
})