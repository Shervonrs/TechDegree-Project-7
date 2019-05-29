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

    if(btn.className !== "toggle_btn active" ){
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
    alert(`Message successfully sent to $(user.value)`)
  }
});

/////////////////////////
//// Notification //////
////////////////////////

//Icon alerts
dropAlert.innerHTML =
 `<div class="alert_banner">
 <span class="circle_notification"></span>
  <div class="alert_div">
 <p class="alert_message">You have 6 unread messages</p>
 </div>
 <p class="alert-banner-close">x</p>
</div>
<div class="alert_banner">
<span class="circle_notification"></span>
<div class="alert_div">
  <p class="alert_message">You have 3 new followers</p>
  </div>
  <p class="alert-banner-close">x</p>
  </div>
  <div class="alert_banner">
  <span class="circle_notification"></span>
  <div class="alert_div">
  <p class="alert_message">Your password expires in 7 days</p>
  </div>
  <p class="alert-banner-close">x</p>
  </div>
`;

// Displays hidden notification menu, hides notification dot
bell.addEventListener('click', (e) =>{
  const btn = e.target;
  if(btn.tagName === "svg" || btn.tagName ==="path") {
    dropAlert.style.display = "block";
    circle.style.display= "none";
  }
});

// Closes hides notifications upon click
document.addEventListener('click', (e) =>{
  const btn = e.target;
  if( btn.tagName ==="svg" || btn.tagName === "path" || btn.className ==="dropdown" || btn.className === "drop-alert"
  || btn.className ==="alert_banner" || btn.className === "alert_message"
  || btn.className === "alert-banner-close" ){
    dropAlert.style.display = "block";
  }
  else {
    dropAlert.style.display = "none";
  }
})

// close botton
const alertBanner = document.querySelectorAll('.alert_banner');
for(let i = 0; i <alertBanner.length; i++) {
  alertBanner[i].addEventListener('click', (e) => {
    const btn = e.target;
    if(btn.className === 'alert-banner-close') {
        alertBanner[i].style.display = "none";
  }
})
};
