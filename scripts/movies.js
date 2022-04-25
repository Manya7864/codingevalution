// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let money1 = JSON.parse(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText = money1;
// const api="http://www.omdbapi.com/?i=tt3896198&apikey=b1ef93ae"
async function searchmovie() {
  try {
    const search = document.querySelector("#search").value;
    // const search="avengers"
    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=b1ef93ae`
    );
    const data = await res.json();
    console.log(data.Search);
    movie = data.Search;
    return movie;
  } catch (err) {
    console.log("err", err);
  }
}
// searchmovie()
let moviediv = document.querySelector("#movies");
function append1(data1) {
  moviediv.innerHTML = null;

  data1.map(function (el) {
    let div1 = document.createElement("div");
    let image1 = document.createElement("img");
    image1.src = el.Poster;
    let p1 = document.createElement("p");
    p1.innerText = el.Title;
    let btn1 = document.createElement("button");
    btn1.innerText = "book ticket";
    btn1.setAttribute("class", "book_now");
    // btn1.win="checkout.html"
    btn1.addEventListener("click", function () {
      checkout(details);
    });
    let details = {
      image: el.Poster,
      title: el.Title,
      year: el.Year,
      type: el.Type,
    };
    div1.append(image1, p1, btn1);
    moviediv.append(div1);
  });
}
async function main() {
  let moviedata = await searchmovie();
  {
    if (moviedata == undefined) {
      return false;
    }
    append1(moviedata);
  }
}
let id;

function debounce(myfun, delay) {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(function (el) {
    myfun();
  }, delay);
}

function checkout(x) {
  // console.log(ele)
  window.location.href = "./checkout.html";
  localStorage.setItem("movie", JSON.stringify(x));
}
