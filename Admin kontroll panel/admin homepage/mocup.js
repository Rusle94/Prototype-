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