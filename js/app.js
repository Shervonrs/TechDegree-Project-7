const btns = document.querySelectorAll('.toggle_btn');

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
