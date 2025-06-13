// JavaScript object-related features: ****
// Keys, 
// Values,
//  Entries,
//  Delete,
//  Seal,
//  Freeze
const person ={
    Name:'salma',
    Age:  28,
    Address : 'kishoreganj',
    isstudent : true
}
// Object এর Key, Value, Property
/*property =Name :'salma'
key = 'Name'
value ='salma'*/

// Object থেকে Key, Value, Entry বের করা
/*const keys =Object.keys(person); //["Name","Age","Address","isstudent"]
const values = Object.values(person); //["salma",28,"kishoreganj",true]
const pair = Object.entries(person);    // [["Name", "salma"], ["Age", 28], ...]
*/

// Property মুছে ফেলা ও নতুন যোগ করা****
/*delete person.Age; // Age property মুছে যাবে
console.log(person);
person.Age =29; // আবার নতুন করে Age যোগ করা হলো
console.log(person); // দেখাবে নতুন Age সহ updated object*/

// ****freeze***
 /*Object.freeze(person)
 delete person.Name
person.Name='simu'
console.log(person);*/

/*freeze() করলে:
নতুন কিছু যোগ ❌ যাবে না


পুরাতন কিছু মুছা ❌ যাবে না


মান পরিবর্তন ❌ যাবে না

*/

 /*Object.seal(person)
 delete person.Age
 person.Name='simu'
console.log(person);*/

/*seal() করলে:
নতুন property ➕ যোগ করা যাবে না


পুরানো property ❌ delete করা যাবে না


কিন্তু আগের property-এর মান পরিবর্তন করা যাবে*/

// Data Access through dont notation and bracket notation and 
/*const personInfo ={
    Name               : 'salma',
    'Fathers-Names'    :  'Rashid',
      10               :  'place',
      Age              :  28,
      hight            : "5 feet"
}
console.log(personInfo [10]);
console.log(personInfo.Age);
console.log(personInfo.Name);
console.log(personInfo["Fathers-Names"]);*/

// Nested Object with Array:

/*const school = {
  name: "Kaliarkanda Govt. Primary School",
  students: [
    { name: "Ahmad", class: 4 },
    { name: "Adiyat", class: 2 ,height :"3feet" },
    { name: "Abid", class: 8 , Age   : 14 },
  
  ]
};
console.log(school.students[1].name);
console.log(school["students"][0]["name"]);
console.log(school["students"][2]["Age"]);
console.log(school["students"][1]["height"]);
console.log(school["students"][1]["name"]);*/

// Optional chaining (?.) ****

/*const school = {
  name: "Kaliarkanda Govt. Primary School",
  students: [
    { name: "Ahmad", class: 4 },
    { name: "Adiyat", class: 2 ,height :"3feet" },
    // { name: "Abid", class: 8 , Age   : 14 },
  
  ]
};
console.log(school?.students?.[0]?.name);
console.log(school?.students?.[2]?.class);*/
