area = document.getElementById('area')
area.innerHTML = localStorage.getItem('value')
function myFunction(){
    document.getElementById("navbar").classList.toggle("nav-hide");
    document.getElementById("container").classList.toggle("hide");
}
const container = document.getElementById('container')
function add(){
    let textarea = document.createElement('div')
    textarea.innerHTML = `
    <div class="main">
    <div class="icons">
        <button onclick="add()">ADD</button>
        <button>SAVE</button>
    </div>
    <div class="note" id="note">
        <textarea></textarea>
    </div>
</div>
    `
    container.appendChild(textarea)
    localStorage.setItem('value',area.value )
} 