const btns = document.querySelectorAll('.toggle_btn');
const user = document.getElementById('userfield');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const dropDown = document.querySelector('.dropdown');
const dropAlert = document.querySelector('.drop-alert');
const bell = document.getElementById('Layer_1');
const body = document.querySelector(".grid_container");
const path = document.querySelector(".st0")
const circle = document.querySelector(".circle");
//Toggle Btns, adds & removes active class upon click
for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click',(e) => {
    const btn = event.target;
    const on= document.querySelectorAll('.on');
    const off= document.querySelectorAll('.off');

    if(btn.className !== "toggle_btn one active" && btn.className !== "toggle_btn two active"){
      btns[i].classList.add("active");
      off[i].style.display="none"
      on[i].style.display= "block";
    }
    else {
      btns[i].classList.remove("active");
      on[i].style.display= "none";
      off[i].style.display= "block";
    }
  });
}


send.addEventListener('click', () =>{
  if(user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  }else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert("Message successfully sent to " + user.value)
  }
});

/////////////////////////
//// Notification //////
////////////////////////

//Icon alerts
dropAlert.innerHTML =
 `<div class="alert_banner">
 <span class="circle_notification"></span>
 <p class="alert_message">You have 6 unread messages</p>
 <p class="alert-banner-close">x</p>
</div>
<div class="alert_banner">
<span class="circle_notification"></span>
  <p class="alert_message">You have 3 new followers</p>
  <p class="alert-banner-close">x</p>
  </div>
  <div class="alert_banner">
  <span class="circle_notification"></span>
  <p class="alert_message">Your password expires in 7 days</p>
  <p class="alert-banner-close">x</p>
  </div>
`;

// Closes hides notifications upon click
document.addEventListener('click', (e) =>{
  const btn = e.target;
  let noneBlock = display(btn);
  do {
    if(dropAlert.classList.length === 1 ){
      dropAlert.style.display = "display";

    }
    else if(dropAlert.classList.length === 2){
      dropAlert.style.display = "none";
    }

  } while (dropAlert.classList.length > 2);
})

display = (btn) => {
  if(( btn.tagName ==="svg" || btn.tagName === "path" || btn.className ==="dropdown" || btn.className === "drop-alert"
  || btn.className ==="alert_banner" || btn.className === "alert_message"
  || btn.className === "alert-banner-close") && (dropAlert.classList.length === 1)){
    const block =dropAlert.style.display = "block";
    return block;
  } else {
    const none = dropAlert.style.display = "none";
    return none;
  }
}

// Displays hidden notification menu, hides notification dot
bell.addEventListener('click', (e) =>{
  const btn = e.target;
  if((btn.tagName === "svg" || btn.tagName ==="path") && (dropAlert.classList.length === 1)) {
    dropAlert.style.display = "block";
    circle.style.display= "none";
    dropAlert.classList.add("show");
  }
  else if((btn.tagName === "svg" || btn.tagName ==="path") && (dropAlert.classList.length > 1)) {
    dropAlert.style.display = "none";
    dropAlert.classList.remove("show");
  }
});

// close button
const alertBanner = document.querySelectorAll('.alert_banner');
for(let i = 0; i <alertBanner.length; i++) {
  alertBanner[i].addEventListener('click', (e) => {
    const btn = e.target;
    if(btn.className === 'alert-banner-close') {
        alertBanner[i].style.display = "none";
  }
});
}


const toggleOne = document.querySelector('.toggle_btn.one');
const toggleTwo = document.querySelector('.toggle_btn.two');
const toggleOneOff = document.querySelector('.toggle_btn.one .off');
const toggleTwoOff = document.querySelector('.toggle_btn.two .off');
const toggleOneOn = document.querySelector('.toggle_btn.one .on');
const toggleTwoOn = document.querySelector('.toggle_btn.two .on');


toggleOne.addEventListener('click', () =>{
  if(toggleOne.classList.length === 2 ) {
    localStorage.setItem('email', 'off');
  } else if(toggleOne.classList.length > 2 ) {
    localStorage.setItem('email', 'on');
  }
});

window.addEventListener('load', function(){
  if(localStorage.email === 'off') {
    toggleOne.classList.remove("active");
    toggleOneOff.style.display="block";
    toggleOneOn.style.display= "none";

  } else if (localStorage.email === 'on') {
    toggleOne.classList.add("active");
    toggleOneOn.style.display= "block";
    toggleOneOff.style.display= "none";
  }

  if(localStorage.public === 'off') {
    toggleTwo.classList.remove("active");
    toggleTwoOff.style.display="block";
    toggleTwoOn.style.display= "none";

  } else if (localStorage.public === 'on') {
    toggleTwo.classList.add("active");
    toggleTwoOn.style.display= "block";
    toggleTwoOff.style.display= "none";
  }

})

toggleTwo.addEventListener('click', () =>{
  if(toggleTwo.classList.length === 2 ) {
    localStorage.setItem('public', 'off');
  } else if(toggleTwo.classList.length > 2 ) {
    localStorage.setItem('public', 'on');
  }
});
