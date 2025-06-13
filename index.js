// Array copy: 

/*const number =[10,20,30,40];
// console.log(number[3]);
for (const digit of number) {
  // console.log(digit);  
}
 console.log(...number);*/

// পুরানো array/object copy করতে 

/*const num1=[10,20,30,40,];
const num2=[...num1];
 const num3=[...num1]
num2.push(50);
num3.push(60)
console.log(`num 1 er man`,num1);
 console.log(`num 2 er man`,num2);
console.log(`num 3 er man`,num3);*/

// ***Array merge:eaksathey kora ----

/*const number =[100,200,300,400];

const number1 =[500,600];
const num=[700]
const number2 =[...number,...number1,...num];
console.log(number2);*/

// Array ছড়িয়ে দেওয়া: 

/*const nums = [1, 2, 3];
console.log(...nums); */
/*const Name =['slma','simu']
console.log(...Name);*/

  // Array Max বের করা
  
  /*const number =[100,200,300,400];
const number1 =[500,600];
const num=[700]
const number2 =[...number,...number1,...num];
console.log(Math.max(...number2));
console.log(Math.max(...number1));
console.log(Math.max(...number));
*/

 // Array min বের করা
  /*const number =[100,200,300,400];
const number1 =[500,600];
const minnumber =[...number,...number1];
// console.log(min);
console.log(Math.min(...number));
console.log(Math.min(...number1));
console.log(Math.min(...minnumber));*/


//  Array Destructure:

/*const Names=['sima','salma','simu','mim','kakoly'];
const[a,b,c,d,e]= Names;
console.log(d);*/
 
/*const colors=['red','green','purple','orange','black'];
const [first,second,third,fourth,fifth]=colors
console.log(third); */

// Object Destructure

/*const person={
  Name:'salma',
  Age:28,
  weight:'43kg',
  height:'5feet', 
}
// const {Name,Age,weight,height}=person;
// console.log(weight);
const {Name:myname,Age:amerboyos}=person;
console.log(myname,amerboyos);*/

/*const information={
    Name:['shimu', 'mim','salma'],
    Hobbey:['reading','coding' ,'garden'],
    books:{
       bookname:['js theory','html & css basic topic'],
        Coding:{
        topic:['css','talwind'],
       flower:['sunflower','rose'],
        
      }
      
    }   
}
// const {Name:myname,books:bookname}=information;
// console.log(myname);
// const {books:{bookname}}=information;
// console.log(bookname);

 const {books:{Coding:{flower}}}=information;
console.log(flower);
const {books:{Coding:{topic}}} =information
console.log(topic);

const {Name}=information
console.log(Name);*/

// Template string, multiple line string, dynamic string.****

// 1)Template string

/*const myName= 'tamanna';
const LastName= 'salma';
const fullname= myName+' '+ LastName;
console.log(fullname);*/


// 2) multiple line string
/*const greet ='How are you ?';
const ask ='How are you ? What you are doing right now?'
console.log(ask);

const  greetings=`
hello simu ${greet} hello mim ${ask}

`
console.log(greetings);*/


// function declaration *****

/*function greet(name){
  return`Hello,${name}`;
}
console.log(greet('meem'));*/


//  function expression ****

/*const salma=function(name){
  return`Hi,${name}`;
}
console.log(salma('simu'));*/

// arrow function ****

/*const greet=(name)=>{
  return` Hello,${name}`;
}
console.log(greet('meem'));*/

                    // or 1-liner shortcut (implicit return)

 /*const shortcut=name=> `Hi,${name}`;
 console.log(shortcut('moni')); */                  
                    