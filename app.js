function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}

let nextDom = document.getElementById('next');
let prevDom =document.getElementById('prev');
let carosalDom = document.getElementById('.carosal');
let listItemDom = document.getElementById('.carosal .list');
let thumbnailDom = document.getElementById('.carosal .thumbnail');

nextDom.onclick =function(){
    showSlider('next')
}
function showSlider(type){
    let itemSlider =document.querySelectorAll('.carosal .list .items');
    let itemThumbnail =document.querySelectorAll('.carosal .list .items');
}

if(type ==='next'){
    listItemDom.appendChild(itemSlider[0]);
    carosalDom.classList.add('next');
}