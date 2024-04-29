const user = document.querySelector('#username');
const button = document.querySelector('#btn');
let url = 'https://api.github.com/users/';
let nameDiv = document.querySelector('.name');
let followersDiv = document.querySelector('.follower');
let imageDiv = document.querySelector('.image');
let card = document.querySelector('.card');

//###Method-1: using fecth() and promises

button.addEventListener('click', (e)=>{
    card.style.display = "block";
    let val = user.value;
    url += val;

    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        // console.log(res);
        nameDiv.innerHTML = res.name;
        // console.log(res.name);
        followersDiv.innerHTML = `Followers: ${res.followers}`;
        imageDiv.innerHTML = `<img src="${res.avatar_url}" alt="Avatar not Found"></img>`;
    })
    .catch((err)=>{
        nameDiv.innerHTML = '';
        imageDiv.innerHTML = '';
        followersDiv.innerHTML = `error: ${err}`;
    })
})


// ###Method - 2 : Using xhr() 

// button.addEventListener('click', (e)=>{
//     card.style.display = "block";
//     let val = user.value;
//     // console.log(val);
//     url += val;
//     // console.log(url);

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.onreadystatechange = function() {
//         // console.log(xhr.readyState);
//         if(xhr.readyState==4){
//             let data = JSON.parse(this.responseText);
//             // console.log(typeof data);
//             // Username = data.name?data.name:data.message;
//             // console.log(Username);

//             if(data.name){
//                 nameDiv.innerHTML = data.name;
//             }
//             else{
//                 followersDiv.innerHTML = data.message;
//                 nameDiv.innerHTML = '';
//             }

//             if(data.followers){
//                 followersDiv.innerHTML = `Followers: ${data.followers}`;
//             }

//             if(data.avatar_url){
//                 imageDiv.innerHTML = `<img src="${data.avatar_url}" alt="Avatar not Found"></img>`

//                 console.log(imageDiv.innerHTML);
//             }
//         }
//     }
    

//     xhr.send();
// })