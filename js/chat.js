let element1 = document.querySelector("#authentication");
element1.addEventListener('submit',login);
let element2 = document.querySelector("#chat");
element2.addEventListener('click',logout);


function login(event){
    event.preventDefault();
    cacher("#authentication");
    cacher("#chat");
}


function logout(){
    let res = confirm("Are you sure ?")
    if (res ==true) {
        cacher("#authentication");
        cacher("#chat");
    }
}