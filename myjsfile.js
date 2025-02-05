


 numbers = [ ]

for ( i = 0; i < 10; i++) {
 input = prompt("یهعدد بین 1 تا 99 وارد کنید " );
        numbers.push(input);
}
maxNumber = numbers[0]

for ( i = 0; i < 10; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]
    }
}


document.getElementById("test").innerHTML = `<h1>بزرگترین عدد=${maxNumber}</h1>`

day = new Date ()
time = day.getDay()
console.log(time);


  if(time==6){
    document.getElementById("date").innerHTML = "<p> <big><big>شنبه</big></big></p>   "    
    }
    else if(time==0){
        document.getElementById("date").innerHTML = "<p  <big><big>یکشنبه</big></big></p>   " 
        }
       else if(time==1){
            document.getElementById("date").innerHTML = "<p> <big><big>دوشنبه</big></big></p>   " 
            }
          else  if(time==2){
                document.getElementById("date").innerHTML = "<p> <big><big>سه شنبه</big></big></p>   "  
                }
             else   if(time==3){
                    document.getElementById("date").innerHTML = "<p> <big><big>چهارشنبه</big></big></p>   "     
                    }
                  else  if(time==4){
                        document.getElementById("date").innerHTML = "<p> <big><big>پنجشنبه</big></big></p>   "    
                        }
                        else if (time==5){
                            document.getElementById("date").innerHTML = "<p> <big><big>جمعه</big></big></p> "
                        }
                        
getElement = document.getElementById("clock")
clock = new Date()
hours = clock.getHours();
console.log(time);
if (hours <= 7){
getElement.innerHTML= "بامداد"
}
else if (hours <= 12){
  getElement.innerHTML= "صبح"
}
else if (hours <= 16){
  getElement.innerHTML= "ظهر"
  }
  else if (hours <= 19){
    getElement.innerHTML= "بعد ظهر "
    }
    else{
      getElement.innerHTML= "شب"
      }
      getelement = document.getElementById("Hours").innerHTML = ` ساعت:${hours}`


