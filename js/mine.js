var alldata = [];

async function getMango() {
  let req = await fetch("https://forkify-api.herokuapp.com/api/search?q=mango");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getMelon() {
  let req = await fetch("https://forkify-api.herokuapp.com/api/search?q=melon");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getNectarine() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=nectarine",
  );
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getOrange() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=orange",
  );
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getPapaya() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=papaya",
  );
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

getMango();

async function getAll() {
  alldata = [];

  let req1 = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=mango",
  );
  let res1 = await req1.json();

  let req2 = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=melon",
  );
  let res2 = await req2.json();

  let req3 = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=nectarine",
  );
  let res3 = await req3.json();

  let req4 = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=orange",
  );
  let res4 = await req4.json();

  let req5 = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=papaya",
  );
  let res5 = await req5.json();

  alldata = alldata.concat(
    res1.recipes,
    res2.recipes,
    res3.recipes,
    res4.recipes,
    res5.recipes,
  );
  displayData();
}
var rowData = document.getElementById("rowData");

function displayData() {
  var str = "";
  for (var i = 0; i < alldata.length; i++) {
    str += `<div class="col-md-3">
      <div class="item">
        <img src="${alldata[i].image_url}" class="w-100">
        <h1>${alldata[i].title}</h1>
        <p>${alldata[i].publisher}</p>
      </div>
    </div>`;
  }
  rowData.innerHTML = str;
}
