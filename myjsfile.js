function Game (){
    randomNumber= ( 1 + Math.round( Math.random ()*99) )
    window.alert("امزوش بازی :شما 3 شانش برای پیدا کردن یک عدد شانسی داری و بعد از هر بار اشتباه یک راهنمای به شما داده میشود ")
  let score = 30
    for (let i = 0; i < 3; i++) {
     const input = window.prompt("یک عدد بین 1 تا 100 وارد  کنید ")
      if(randomNumber==input){
       document.getElementById("Winner").classList.add("winner")
       break
      }

 else if (randomNumber>input){
    window.alert("شما عدد کوچکتر تر را وارد کرده اید ")
   score = score - 10
}
 else if (randomNumber < input){
    window.alert("شما عدد بزرگتر را وارد کرده اید")
    score = score - 10
}
}

 if(score == 0) {
    document.getElementById("A").classList.add("Losser")
}
}



