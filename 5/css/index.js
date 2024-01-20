var siteName = document.getElementById("name");
var siteUrl = document.getElementById("url");
var SubmitEl = document.getElementById("Submit");
var siteIndex = 0;
var websites = [];
if (localStorage.getItem("items") != null) {
  websites = JSON.parse(localStorage.getItem("items"));
  displayWebsite();
} else {
  var websites = [];
}
function validUrl (){
    if(siteUrl.value.startsWith("http://") ||siteUrl.value.startsWith("https://") ){
    } else {
        siteUrl.value = "http://"+siteUrl.value;
    }
}
validUrl();
function SubmitUrl() {
  var items = {
    WebName: siteName.value,
    WebUrl: siteUrl.value,
  };
  websites.push(items);
  localStorage.setItem("items", JSON.stringify(websites));
  displayWebsite();
  siteName.value = "";
  siteUrl.value = "";
}
function displayWebsite() {
  var desSite = ``;
  for (i = 0; i < websites.length; i++) {
    desSite +=
      `
        <tr>
        <td><h4>`+websites[i].WebName+`</h4></td>
        <td><a target="_blank" href="`+websites[i].WebUrl+`"><button class="btn btn-primary">Visit</button></a></td>
        <td><button onclick="Delete(`+i+`)" class="btn btn-danger">Delete</button></td>
        </tr>
        `;
  }
  document.querySelector("tbody").innerHTML = desSite;
}

function Delete(index){
    websites.splice(index, 1);
    localStorage.setItem("items" ,JSON.stringify(websites))
    displayWebsite()
} 