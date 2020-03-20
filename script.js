
//this is to bring the date and time on the page
var date= moment().format('LLL');
$("#currentDay").text(date);
// console.log();

//tried some JQuery to make Div etc
// var timeBlock=$("<div>");
// timeBlock.text("Hello")
// var saveButton =$("<button>")
// $(".container").prepend(timeBlock);

//example to take out white text
// var todoText = todoInput.value.trim();

$(".saveBtn").on('click',function(){
    var str9 =$("#timeblock9").val();
console.log(str9);
})
$(".saveBtn").on('click',function(){
    var str10 =$("#timeblock10").val();
console.log(str10);
})
$(".saveBtn").on('click',function(){
    var str11 =$("#timeblock11").val();
console.log(str11);
})
$(".saveBtn").on('click',function(){
    var str12 =$("#timeblock12").val();
console.log(str12);
})
$(".saveBtn").on('click',function(){
    var str1 =$("#timeblock1").val();
console.log(str1);
})
$(".saveBtn").on('click',function(){
    var str2 =$("#timeblock2").val();
console.log(str2);
})
$(".saveBtn").on('click',function(){
    var str3 =$("#timeblock3").val();
console.log(str3);
})
$(".saveBtn").on('click',function(){
    var str4 =$("#timeblock4").val();
console.log(str4);
})
$(".saveBtn").on('click',function(){
    var str5 =$("#timeblock5").val();
console.log(str5);
})


// localStorage.setItem("")
// function(){
//     var storedplans = JSON.parse(localStorage.getItem(""))
// }


//this is the hour of time right now
var time= moment().format('hha');

// if(($("".timeofday").val())===($("#time").val())){

//    }
