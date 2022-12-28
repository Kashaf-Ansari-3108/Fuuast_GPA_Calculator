const submit = () => {
   // SUBJECT 1
    let subject1 = document.getElementById("subject1").value
    let creditHours1 = document.getElementById("creditHours1")
    let a = Number(creditHours1.value);
    let marks1 = document.getElementById("marks1").value
    let alphaGrade1;
    let numGrade1;
    if (marks1.length !== 0 && marks1 < 100 && marks1 > 0) {
        if (marks1 >= 90) {
            alphaGrade1 = "A+"
            numGrade1 = 4;
        }
        else if (marks1 >= 80) {
            alphaGrade1 = "A"
            numGrade1 = 4;
        }
        else if (marks1 >= 70) {
            alphaGrade1 = "B+"
            numGrade1 = 3.5;
        }
        else if (marks1 >= 60) {
            alphaGrade1 = "B"
            numGrade1 = 3;
        }
        else if (marks1 >= 55) {
            alphaGrade1 = "C+"
            numGrade1 = 2.5;
        }
        else if (marks1 >= 50) {
            alphaGrade1 = "C"
            numGrade1 = 2;
        }
        else {
            alphaGrade1 = "F"
            numGrade1 = 0;
        }
       
    }
    else {
        alphaGrade1 = "0"
        numGrade1 = 0;
    }
    let sub1 = numGrade1 * a;
    

    // SUBJECT 2
    let subject2 = document.getElementById("subject2").value
    let creditHours2 = document.getElementById("creditHours2")
    let b = Number(creditHours2.value);
    let marks2 = document.getElementById("marks2").value
    let alphaGrade2;
    let numGrade2;
    if (marks2.length !== 0 && marks2 < 100 && marks2 > 0) {
        if (marks2 >= 90) {
            alphaGrade2 = "A+"
            numGrade2 = 4;
        }
        else if (marks2 >= 80) {
            alphaGrade2 = "A"
            numGrade2 = 4;
        }
        else if (marks2 >= 70) {
            alphaGrade2 = "B+"
            numGrade2 = 3.5;
        }
        else if (marks2 >= 60) {
            alphaGrade2 = "B"
            numGrade2 = 3;
        }
        else if (marks2 >= 55) {
            alphaGrade2 = "C+"
            numGrade2 = 2.5;
        }
        else if (marks2 >= 50) {
            alphaGrade2 = "C"
            numGrade2 = 2;
        }
        else {
            alphaGrade2 = "F"
            numGrade2 = 0;
        }
    }
    else {
        alphaGrade2 = "0"
        numGrade2 = 0;
    }
   let sub2 = numGrade2 * b;

     // SUBJECT 3
     let subject3 = document.getElementById("subject3").value
     let creditHours3 = document.getElementById("creditHours3")
     let c = Number(creditHours3.value);
     let marks3 = document.getElementById("marks3").value
      let alphaGrade3;
     let numGrade3;
     if (marks3.length !== 0 && marks3 < 100 && marks3 > 0) {
         if (marks3 >= 90) {
             alphaGrade3 = "A+"
             numGrade3 = 4;
         }
         else if (marks3 >= 80) {
             alphaGrade3 = "A"
             numGrade3 = 4;
         }
         else if (marks3 >= 70) {
             alphaGrade3 = "B+"
             numGrade3 = 3.5;
         }
         else if (marks3 >= 60) {
             alphaGrade3 = "B"
             numGrade3 = 3;
         }
         else if (marks3 >= 55) {
             alphaGrade3 = "C+"
             numGrade3 = 2.5;
         }
         else if (marks3 >= 50) {
             alphaGrade3 = "C"
             numGrade3 = 2;
         }
         else {
            alphaGrade3 = "F"
            numGrade3 = 0;
        }
     }
     else {
        alphaGrade3 = "0"
        numGrade3 = 0;
    }
    let sub3 = numGrade3 * c;
    

     // SUBJECT 4
     let subject4 = document.getElementById("subject4").value
     let creditHours4 = document.getElementById("creditHours4")
     let d = Number(creditHours4.value);
     let marks4 = document.getElementById("marks4").value
    let alphaGrade4;
     let numGrade4;
     if (marks4.length !== 0 && marks4 < 100 && marks4 > 0) {
         if (marks4 >= 90) {
             alphaGrade4 = "A+"
             numGrade4 = 4;
         }
         else if (marks4 >= 80) {
             alphaGrade4 = "A"
             numGrade4 = 4;
         }
         else if (marks4 >= 70) {
             alphaGrade4 = "B+"
             numGrade4 = 3.5;
         }
         else if (marks4 >= 60) {
             alphaGrade4 = "B"
             numGrade4 = 3;
         }
         else if (marks4 >= 55) {
             alphaGrade4 = "C+"
             numGrade4 = 2.5;
         }
         else if (marks4 >= 50) {
             alphaGrade4 = "C"
             numGrade4 = 2;
         }
         else {
            alphaGrade4 = "F"
            numGrade4 = 0;
        }
     }
     else {
        alphaGrade4 = "0"
        numGrade4 = 0;
    }
    let sub4 = numGrade4 * d;
     

     // SUBJECT 5
     let subject5 = document.getElementById("subject5").value
     let creditHours5 = document.getElementById("creditHours5")
     let e = Number(creditHours5.value);
     let marks5 = document.getElementById("marks5").value
     let alphaGrade5;
     let numGrade5;
     if (marks5.length !== 0 && marks5 < 100 && marks5 > 0) {
         if (marks5 >= 90) {
             alphaGrade5 = "A+"
             numGrade5 = 4;
         }
         else if (marks5 >= 80) {
             alphaGrade5 = "A"
             numGrade5 = 4;
         }
         else if (marks5 >= 70) {
             alphaGrade5 = "B+"
             numGrade5 = 3.5;
         }
         else if (marks5 >= 60) {
             alphaGrade5 = "B"
             numGrade5 = 3;
         }
         else if (marks5 >= 55) {
             alphaGrade5 = "C+"
             numGrade5 = 2.5;
         }
         else if (marks5 >= 50) {
             alphaGrade5 = "C"
             numGrade5 = 2;
         }
         else {
            alphaGrade5 = "F"
            numGrade5 = 0;
        }
     }
     else {
        alphaGrade5 = "0"
        numGrade5 = 0;
    }
    let sub5 = numGrade5 * e;

       // SUBJECT 6
    let subject6 = document.getElementById("subject6").value
    let creditHours6 = document.getElementById("creditHours6")
    let f = Number(creditHours6.value);
    let marks6 = document.getElementById("marks6").value
    let alphaGrade6;
    let numGrade6;
    if (marks6.length !== 0 && marks6 < 100 || marks6 > 0) {
        if (marks6 >= 90) {
            alphaGrade6 = "A+"
            numGrade6 = 4;
        }
        else if (marks6 >= 80) {
            alphaGrade6 = "A"
            numGrade6 = 4;
        }
        else if (marks6 >= 70) {
            alphaGrade6 = "B+"
            numGrade6 = 3.5;
        }
        else if (marks6 >= 60) {
            alphaGrade6 = "B"
            numGrade6 = 3;
        }
        else if (marks6 >= 55) {
            alphaGrade6 = "C+"
            numGrade6 = 2.5;
        }
        else if (marks6 >= 50) {
            alphaGrade6 = "C"
            numGrade6 = 2;
        }
        else {
            alphaGrade6 = "F"
            numGrade6 = 0;
        }
    }
    else {
        alphaGrade6 = "0"
        numGrade6 = 0;
    }
    let sub6 = numGrade6 * f;
     

    let totalOfSub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 ;
    let totalOfCredit = a+b+c+d+e+f;
    let gPA = totalOfSub / totalOfCredit;
    console.log(totalOfSub);
    console.log(totalOfCredit);
    console.log(gPA);
    
    
    let display = `<nav class="navbar bg-light">
    <div class="container-fluid">
        <h1 class="display-3">GPA: ${gPA}<h1>
    </div>
  </nav>

<table class="table table-success table-striped">
    <tr>
        <td class="h4">S.No</td>
        <td class="h4">Course</td>
        <td class="h4">Credit</td>
        <td class="h4">Marks</td>
        <td class="h4">Alphabetic Grade</td>
        <td class="h4">Numeric Grade</td>
        <td class="h4">Grade Points</td>
    </tr>
    <tr>
        <td>1</td>
        <td>${subject1}</td>
        <td>${a}</td>
        <td>${marks1}</td>
        <td>${alphaGrade1}</td>
        <td>${numGrade1}</td>
        <td>${numGrade1}&times${a} = ${sub1}</td>
    </tr>
    <tr>
        <td>2</td>
        <td>${subject2}</td>
        <td>${b}</td>
        <td>${marks2}</td>
        <td>${alphaGrade2}</td>
        <td>${numGrade2}</td>
        <td>${numGrade2}&times${b} = ${sub2}</td>
    </tr>
    <tr>
        <td>3</td>
        <td>${subject3}</td>
        <td>${c}</td>
        <td>${marks3}</td>
        <td>${alphaGrade3}</td>
        <td>${numGrade3}</td>
        <td>${numGrade3}&times${c} = ${sub3}</td>
    </tr>
    <tr>
        <td>4</td>
        <td>${subject4}</td>
        <td>${d}</td>
        <td>${marks4}</td>
        <td>${alphaGrade4}</td>
        <td>${numGrade4}</td>
        <td>${numGrade4}&times${d} = ${sub4}</td>
    </tr>
    <tr>
        <td>5</td>
        <td>${subject5}</td>
        <td>${e}</td>
        <td>${marks5}</td>
        <td>${alphaGrade5}</td>
        <td>${numGrade5}</td>
        <td>${numGrade5}*${e} = ${sub5}</td>
    </tr>
    <tr>
        <td>6</td>
        <td>${subject6}</td>
        <td>${f}</td>
        <td>${marks6}</td>
        <td>${alphaGrade6}</td>
        <td>${numGrade6}</td>
        <td>${numGrade6}&times${f} = ${sub6}</td>
    </tr>
    <tr>
    <td>-</td>
    <td>Total</td>
    <td>${totalOfCredit}</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>${totalOfSub}</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="display-5">GPA</td>
        <td class="display-5">${totalOfSub}/${totalOfCredit}</td>
        <td class="display-5">=</td>
        <td class="display-5">${gPA}</td>
    </tr>
  </table>
  
`
let allInput = document.getElementsByTagName("input")
for(i=0; i<allInput.length; i++){
    if(allInput[i].value.length === 0){
        alert("Some Input Fields are Empty :) ");
        break;

    }
    else{
        document.getElementById('display').innerHTML = display;
        }
}


    
}