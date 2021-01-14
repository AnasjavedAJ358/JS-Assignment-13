// var a=prompt("Enter something")

// alert(a.toUpperCase())


// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   }
//   console.log(toTitleCase("muhammad anas javed"));


// var a=prompt("Enter mobile phone")
// var length= a.length;
// document.write(length)

// var hello = "Anas Javed";
// var lastword=hello.slice(-1);
//   alert(lastword)

// var str = "Pakistani";
//   var n = str.indexOf("n");
// document.write(n)

// var userName=prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(un)
// {
//     var message;
//     var split=[];
//     var arr=[];
//     for(var i=0;i<un.length;i++)
//     {
//         split[i]=un.split("&nbsp;");
//         arr[i]=un.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//         {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//         {
//             alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));

// var str = "Pakistani";
//   var n = str.substring(3,4);
// document.write(n)


// var string = 'Hyderabad';  
// var newstring = string.replace( /Hyderabad/,'Islamabad');  
// document.write(newstring); 


// var message = "Ali and Sami are best friends. They play cricket and football together."
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);

// var num= prompt("enter possitive number")
// document.write("Number: "+ (num)+"<br>");
// document.write("Round off value of the number: "+Math.round(num)+"<br>");
// document.write("Floor value of the number: "+Math.floor(num)+"<br>");
// document.write("Ceil value of the number: "+Math.ceil(num)+"<br>");

// var num= prompt("enter negative number")
// document.write("Number: "+ (num)+"<br>");
// document.write("Round off value of the number: "+Math.round(num)+"<br>");
// document.write("Floor value of the number: "+Math.floor(num)+"<br>");
// document.write("Ceil value of the number: "+Math.ceil(num)+"<br>");


// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }



// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Congratulations');
//   else
//    console.log('Not matched, the number was '+gnum);


// var input= parseInt(prompt("Enter weight"))
// var num= Number(input)
// document.write(num)


// var num="472";
// var num2= Number(num)
// document.write(typeof(num2))


// var num=35.36;
// var num2= num.toString()
// document.write(num2)


// var percentge= 30/45*100
// alert(percentge.toFixed(2))