// let imagsList = Array.from(document.querySelectorAll(".item img"))
// let boxContainer = document.getElementById("boxcontainer")
// let innerBox = document.getElementById("innerBox")
// let closeEl = document.getElementById("closeEl")
// let nextEl = document.getElementById("next")
// let prevEl = document.getElementById("prev")
// let currentInd = 0
// for( let i=0 ; i< imagsList.length ; i++){
// imagsList[i].addEventListener("click", function(e){


//     boxContainer.style.display = "flex"
//     let imgSrc =e.target.getAttribute("src")
// innerBox.style.backgroundImage= "url("+imgSrc+")"
// console.log(imagsList.indexOf(e.target));
// })
// }

// nextEl.addEventListener("click",nextFun)
// function nextFun(){
//     currentInd++
//     if (currentInd == imagsList.length){
//         currentInd =0
//     }
//     let imgPath = imagsList[currentInd].getAttribute("src")
//     innerBox.style.backgroundImage= `url(`+imgPath+`)`
// }

// prevEl.addEventListener("click",prevFun)
// function prevFun(){
//     currentInd--
//     if (currentInd <0){
//         currentInd =imagsList.length -1
//     }
//     let imgPath = imagsList[currentInd].getAttribute("src")
//     innerBox.style.backgroundImage= `url(`+imgPath+`)`
// }




// closeEl.addEventListener("click",closeTag)
// function closeTag(){
//     boxContainer.style.display = "none"
// }
// document.addEventListener("keyup",function(e){
//     if(e.key=="ArrowRight"){
//         nextFun()
//     }else if(e.key=="ArrowLeft"){
//         prevFun()
//     }else if (e.key=="Escape")
//     closeTag()
// })
// boxContainer.addEventListener("click",function(e){
//     if(e.target.getAttribute ("id")==="boxcontainer"){
//         closeTag()
//     }
// })
// let nums = [20,30,550,60,200]
// let newArr =[]

// let result= nums.filter((el)=>{
//     return el>50

// })
// console.log(result);
//  let products =[
//     { name: "nokia", price:5000, isSale:true},
//     { name: "del", price:8000, isSale:false},
//     { name: "dell", price:4000, isSale:true},
//     { name: "dell", price:7000, isSale:false},
//     { name: "dell", price:2000, isSale:true},
//     { name: "noklia", price:1000, isSale:false},
//  ]
//  let result = products.filter((el)=>{
//     return el.isSale==true
//  })

//  console.log(result);
// let reg = /^[A-Z][a-z]{3,10}[0-9]?$/


// let products = ["nokia","oppo","lg"]
// let newArr =products
// newArr[0]="ahmed"
// console.log(products);
// https://jsonplaceholder.typicode.com/posts






// let pizzaList=[]
//  let httpReq= new XMLHttpRequest()
//  httpReq.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
//  httpReq.send()
//  httpReq.addEventListener("readystatechange",function(){
//     if(httpReq.readyState == 4 && httpReq.status==200){
//         pizzaList = JSON.parse (httpReq.response).recipes
//     console.log(pizzaList);
//     display()
//     }
//  })
//  function display(){
// let temp =""
// pizzaList.forEach((el)=> {
//     temp+=`  <div class="col-md-3">
//     <div class="border border-info text-center p-2">
//     <img src="${el.image_url}" class="w-100" alt="">

//         <h6>${el.title}</h6>

//     </div>
// </div>`
// })
// document.getElementById("MyRow").innerHTML=temp
//  }







// function getPizza(){
//     return new Promise(function(callback){
//         let MyHttps= new XMLHttpRequest()
//         MyHttps.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
//         MyHttps.send()
//         MyHttps.addEventListener("readystatechange",function(){
//             if(MyHttps.readyState==4&& MyHttps.status==200){
//                 data= JSON.parse(MyHttps.response).recipes
//                 console.log("pizza", data)
//                 callback()

//             }
//         })
//     })
// }

// function getPizza (){

//     return new Promise(function(callback){
//         let myHttps = new XMLHttpRequest()
//         myHttps.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
//         myHttps.send()
//         myHttps.addEventListener("readystatechange",function(){
//             if(myHttps.readyState==4&& myHttps.status==200){
//                 dta=JSON.parse(myHttps.response).recipes
//                 callback()
//             }
//         })
//     })
// }

// function getPasta (){
//     return new Promise(function(callback){
//         let myHttp = new XMLHttpRequest()
//         myHttp=open("get","https://forkify-api.herokuapp.com/api/search?q=pasta")
// myHttp.send()
// myHttp.addEventListener("readystatechange",function(){
//     if(myHttp.readyState==4&& myHttp.status==200){
//         data=JSON.parse(myHttp.response).recipes
//         callback()
//     }
// })
//     })
// }
// function getBeef(){
//     return new Promise(function (callback){
//         let myHttp=new XMLHttpRequest()
//         myHttp.open("get","https://forkify-api.herokuapp.com/api/search?q=beef")
//         myHttp.send()
//         myHttp.addEventListener("readystatechange",function(){
//             if(myHttp.readyState==4&& myHttp.status==200){
//                 data=JSON.parse(myHttp.response).recipes
//                 callback()
//             }
//         })
//     })
// }

// function getPasta(){
//     return new Promise(function(callback){
//         let MyHttps= new XMLHttpRequest()
//         MyHttps.open("get","https://forkify-api.herokuapp.com/api/search?q=pasta")
//         MyHttps.send()
//         MyHttps.addEventListener("readystatechange",function(){
//             if(MyHttps.readyState==4&& MyHttps.status==200){
//                 data= JSON.parse(MyHttps.response).recipes
//                 console.log("pasta", data)
//                 callback()

//             }
//         })
//     })
// }
// function getBeef(){
//     return new Promise(function(callback){
//         let MyHttps= new XMLHttpRequest()
//         MyHttps.open("get","https://forkify-api.herokuapp.com/api/search?q=beef")
//         MyHttps.send()
//         MyHttps.addEventListener("readystatechange",function(){
//             if(MyHttps.readyState==4&& MyHttps.status==200){
//                 data= JSON.parse(MyHttps.response).recipes
//                 console.log("beef", data)
//                 callback()

//             }
//         })
//     })
// }
// (async function(){
//     await getPizza()
//     await getPasta()
//     await getBeef()
//     console.log("hello");
// })()


// (async function(){
//     await getPizza()
//     await getPasta()
//     await getBeef()
// })



let dataList=[]
async function getData(type)
{
    let res =await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
    let data = await res.json()
   dataList=data.recipes
   display()
}
getData("pizza")
function display(){
     let temp =""
     dataList.forEach((el)=> {
         temp+=` <div recipeId="${el.recipe_id}" data-bs-toggle="modal" data-bs-target="#exampleModal" class="col-md-3 item">
         
         <div class="border border-info text-center p-2">
         <img src="${el.image_url}" class="w-100" alt="">
             <h6>${el.title}</h6>
         </div>
     </div>`
     })
     document.getElementById("MyRow").innerHTML=temp
     getItems()
      }

      function getItems(){
        let items = document.querySelectorAll(".item")
        for( let i = 0; i<items.length;i++){
            items[i].addEventListener("click", function(){
                let reId=this.getAttribute("recipeId")
                getSpec(reId)

            })
        }
      
      }



      let navLink = document.querySelectorAll(".nav-link")
   
      for(let i =0 ; i<navLink.length;i++){
        navLink[i].addEventListener("click", function(e){
            let type =this.getAttribute("catgType")
            getData(type)

        })
      
    }
let dataSpecRec={}
async function getSpec(id){
    let res=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    let data =await res.json()
   dataSpecRec=data.recipe
   displaySpec()
}
function displaySpec(){
    let temp=``
    dataSpecRec.ingredients.forEach((el)=>{
        temp+=`<li>${el}</li>`
    })
    document.getElementById("MyImg").getAttribute("src", dataSpecRec.image_url)
    document.getElementById("MyTit").innerHTML=dataSpecRec.title
    document.getElementById("ingredients").innerHTML= temp
}















// Object.prototype.workHours=8

// class person{
   
//     constructor(name,age,salary){
// this.name=name
// this.age=age
// this.salary=salary
//     }
//     welcome(){
//         console.log("hello"+this.userName);
//     }
// }


// person.prototype.workHours=8
// class Doctor{
//     constructor(name,age,salary,gender,dep){
//         this.name=name
//         this.age=age
//         this.salary=salary
//         this.gender=gender
//         this.dep=dep
//     }
// }
// function getData(){
//     return new Promise (function(success,erro){
//         let myHttp= new XMLHttpRequest()
//         myHttp.open("get", "https://forkify-api.herokuapp.com/api/search?q=pizza")
//         myHttp.send()
//         myHttp.addEventListener("readystatechange",function(){
//             if(myHttp.readyState==4&& myHttp.status==200){
//             console.log(JSON.parse(myHttp.response));
//             success()
//             }
//             else if (myHttp.status==400){
//                 erro()
//             }
//         })
//     })
// }
// getData().then(function(){console.log("data");

// }).catch(function(){
//     console.log("erro");

// })