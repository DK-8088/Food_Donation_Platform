
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


let w_sp = document.getElementById('warning')
w_sp.style.visibility="hidden"
// create output structure

function submit_info(){
    //getting - inputs 
    let Name = document.getElementById("name").value;
    let org_name = document.getElementById("org_name").value;
    let mobile_no = document.getElementById("mobile_no").value;
    let food_title = document.getElementById("food_title").value;
    let food_desc = document.getElementById("food_desc").value;
    let address = document.getElementById("address").value;
    let comment = document.getElementById("comments").value;
    let submit_btn = document.getElementById("submit_btn")

    if(Name!=''&&mobile_no!=undefined&&food_title!=''&food_desc!=''&&address!=''){


        // Create the main list item element
        const li = document.createElement('li');

        // Create the paragraphs and spans for food provider, title, and contact number
        const foodProviderP = document.createElement('p');
        const foodProviderSpan = document.createElement('span');
        foodProviderSpan.textContent = Name;
        foodProviderP.textContent = 'Food provider : ';
        foodProviderP.appendChild(foodProviderSpan);

        const foodTitleP = document.createElement('p');
        const foodTitleSpan = document.createElement('span');
        foodTitleSpan.textContent = food_title;
        foodTitleP.textContent = 'Food Title : ';
        foodTitleP.appendChild(foodTitleSpan);

        const contactNoP = document.createElement('p');
        const contactNoSpan = document.createElement('span');
        contactNoSpan.textContent = mobile_no;
        contactNoP.textContent = 'Contact no : ';
        contactNoP.appendChild(contactNoSpan);

        // Create the details element
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = 'Details';

        // Create the spans for address, food description, and comments
        const addressSpan = document.createElement('span');
        const addressLabel = document.createElement('label');
        addressLabel.htmlFor = 'address';
        addressLabel.textContent = 'Address :';
        const addressP = document.createElement('p');
        addressP.textContent = address;
        addressSpan.appendChild(addressLabel);
        addressSpan.appendChild(addressP);

        const foodDescriptionSpan = document.createElement('span');
        const foodDescriptionLabel = document.createElement('label');
        foodDescriptionLabel.htmlFor = 'food-description';
        foodDescriptionLabel.textContent = 'Food description:';
        const foodDescriptionP = document.createElement('p');
        foodDescriptionP.textContent = food_desc;
        foodDescriptionSpan.appendChild(foodDescriptionLabel);
        foodDescriptionSpan.appendChild(foodDescriptionP);

        const commentsSpan = document.createElement('span');
        const commentsLabel = document.createElement('label');
        commentsLabel.htmlFor = 'comments';
        commentsLabel.textContent = 'Comments :';
        const commentsP = document.createElement('p');
        commentsP.textContent = comment;
        commentsSpan.appendChild(commentsLabel);
        commentsSpan.appendChild(commentsP);

        // Append the spans to the details element
        details.appendChild(summary);
        details.appendChild(addressSpan);
        details.appendChild(foodDescriptionSpan);
        details.appendChild(commentsSpan);

        // Append the paragraphs and details to the main list item
        li.appendChild(foodProviderP);
        li.appendChild(foodTitleP);
        li.appendChild(contactNoP);
        li.appendChild(details);
        document.getElementById('food_list').appendChild(li);
        
        show_receive_page()
        setTimeout(clear_form(),20000)
 }
 else{
    w_sp.style.visibility="visible"
    setTimeout(()=>{w_sp.style.visibility="hidden"},1000)
}
}


//clear form
function clear_form(){
    
    Name = document.getElementById("name").value='';
    org_name = document.getElementById("org_name").value='';
    mobile_no = document.getElementById("mobile_no").value='';
    food_title = document.getElementById("food_title").value='';
    food_desc = document.getElementById("food_desc").value='';
    address = document.getElementById("address").value='';
    comment = document.getElementById("comments").value='';
}






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
receive_btn.addEventListener('click',show_receive_page=()=>{
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