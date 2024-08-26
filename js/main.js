// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})
//Filter


// $(document).ready(function () {
//     $(".button").click(function () {
//         const value = $(this).attr("data-filter");
//         if (value == "all"){
//             $(".post-box").show("1000")
//         } else{
//             $(".post-box")
//                 .not("." + value)
//                 .hide(1000);
//             $(".post-box")
//             .filter("." + value)
//             .show("1000")
//         }
//     });
//     $(".button").click(function () {
//         $(this).addClass("active-filter").siblings().removeClass("active-filter")
//     });
// });


filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length;i++) {
        removeClass(x[i], "show");
        var currentClasses = x[i].className.split(" ")
        var contentClass = x[i].className.split(" ").includes(c) ? true : false
        console.log(contentClass)
        if(contentClass) {
            addClass(x[i], "show")
        }
            

    }

}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }

    }
}
function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    var newClasses = []
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] != name){
            newClasses.push(arr1[i])
        }
    }
   
    element.className = newClasses.join(" ")
    
    // arr2 = name.split(" ");
    // for (i = 0; i < arr2.length; i++){
    //     while (arr1.indexOf(arr2[i]) > -1){
    //         arr1.splice(arr1.indexOf(arr2[i]), 1);
    //     }
    // }
    // element.className = arr1.join(" ");
}