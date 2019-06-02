const targetInput= document.getElementById('userfield')
const results= document.getElementById('autocomplete-results');
const nameLists = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
let matches = [];
let resultsCursor= 0;


// Focus the input
targetInput.focus();

// Add event listener for the input keydown

window.addEventListener('keydown', function(e){
  if(e.keyIdentifier === 'U+000A' || e.keyIdentifier === "Enter" ||e.keyCode === 13) {
    if(e.target.nodeName === 'INPUT' && e.target.type === "text") {
      e.preventDefault();
      return false;
    }
  }
})

// Add event listener for the input keyup
targetInput.addEventListener('keyup', function(event){
  // Key Codes: Enter-13, Arrow up - 38, Arrow Down- 40
  results.innerHTML= "";

  toggleResults("hide");

  if(this.value.length > 0) {
    matches = getMatches(this.value);

    if(matches.length > 0) {
      displayMatches(matches);
    }
  }

  if(targetInput.value !== "" && matches.length > 0){
    results.style.display ="block";
  } else {
    results.style.display="none";
  }

  for(let i= 0; i < results.children.length; i++) {
    results.children[i].addEventListener('click', (e) =>{
      targetInput.value = results.children[i].innerHTML;
      results.style.display ="none";
})
}

  if(results.classList.contains('visible')) {
    switch(event.keyCode) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggleResults('hide');
        results.style.display="none";
        resultsCursor = 0;
        break;
      case 38:
        if(resultsCursor > 0) {
          resultsCursor --;

          moveCursor(resultsCursor);
        }
        break;
      case 40:
        if(resultsCursor < (matches.length - 1)) {
          resultsCursor ++;

          moveCursor(resultsCursor);
        }
        break;
    }
  }

});

// Disables form enter default settings


// Define a function for toggling the results list
function toggleResults(action) {
  if(action ==="show") {
    results.classList.add('visible');
  } else if (action === "hide") {
    results.classList.remove('visible');
  }
}

//Define a function for checking if the input value matches any of the names
function getMatches(inputText) {
  let matchList = [];

  for(let i =0; i <nameLists.length; i++) {
    if(nameLists[i].toLowerCase().indexOf(inputText.toLowerCase() ) !== -1) {
      matchList.push(nameLists[i]);
    }
  }
  return matchList;
}

// Define a function for displaying autocomplete toggleResults
function displayMatches(matchList) {
  let j = 0

  while(j <matchList.length) {
    results.innerHTML += '<li class="liResults">' + matchList[j] + '</li>';
    j++;
  }

  // The first child get a class of highlighted
  moveCursor(resultsCursor);

  // Show the toggleResults
  toggleResults('show');
}

// Define a function for moving the cursor in the results list
function moveCursor(pos) {
  for(let x = 0; x < results.children.length; x++){
    results.children[x].classList.remove('highlighted');
  }
  results.children[pos].classList.add("highlighted");
}
