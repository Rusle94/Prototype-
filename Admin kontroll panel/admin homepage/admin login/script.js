function show() {
    var container = document.getElementById("container");
    console.log(container)
    container.innerHTML =
        `
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#table" onclick="message()">Messages</a>
                <a href="#us">user settings</a>
                <a href="#us">user settings</a>
                <a href="#us">user settings</a>
                <a href="#us">user settings</a>
                <a href="#us">user settings</a>
    
            </div>
        </div>
        <div id="bordtable"></div> `;








}



let output = document.getElementById('')
let html = '';


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//view
function display() {
    let none = '';
    page.innerHTML = `  
    `
}

//controller



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    html = `<div class ="div1"></div>

`


}