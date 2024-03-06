const joke = document.getElementById("joke");
const myButton = document.getElementById("joke-btn");

myButton.addEventListener("click", callback);
document.addEventListener("DOMContentLoaded", callback);
/* Another Method (I am going to use Chuck Norris API for this)
function callback() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke.innerHTML = JSON.parse(this.responseText).value;
      } else {
        joke.innerHTML = "OOOOOOOPPPPPPPPPPPSSSSSSSSSSS";
      }
    }
  };
  xhr.send();
}
*/
async function callback() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error("Response is not OK");
    }
    const data = await response.json();
    let myVal = data.value;
    changeRick(myVal);
  } catch (err) {
    console.log(err);
  }
}

function changeRick(val) {
  let regex = /Chuck Norris/gi;
  let newVal = val.replace(regex, "Rick Sanchez");
  joke.innerHTML = newVal;
}
