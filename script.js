
//nav -bar-btn
const notify_btn = document.getElementById('notify-btn');
const donate_btn = document.getElementById('donate-btn');
const home_btn = document.getElementById('home-btn');
const receive_btn = document.getElementById('receive-btn');
const profile_btn = document.getElementById('profile-btn');

//side-bar
const side_bar = document.getElementById('side-bar');

//sections
const section_1 = document.getElementById('section-1');
const section_2 = document.getElementById('section-2');
const section_3 = document.getElementById('section-3');
const section_4 = document.getElementById('section-4');

//show-section-1
donate_btn.addEventListener('click',show_donate_page=()=>{
    section_1.style.zIndex="1";
    section_2.style.zIndex="0";
    section_3.style.zIndex="0";
    section_4.style.zIndex="0";
})
//show-section-2
home_btn.addEventListener('click',()=>{
    section_1.style.zIndex="0";
    section_2.style.zIndex="1";
    section_3.style.zIndex="0";
    section_4.style.zIndex="0";
})
//show-section-3
receive_btn.addEventListener('click',()=>{
    section_1.style.zIndex="0";
    section_2.style.zIndex="0";
    section_3.style.zIndex="1";
    section_4.style.zIndex="0";
})
//show-section-4
profile_btn.addEventListener('click',()=>{
    section_1.style.zIndex="0";
    section_2.style.zIndex="0";
    section_3.style.zIndex="0";
    section_4.style.zIndex="1";
})

//showo-side-bar
notify_btn.addEventListener('click',()=>{
    side_bar.classList.toggle('side-bar-show');
    
})
