 let timer = setInterval(()=>{
    console.log('i am a Gamer')
    console.log(timer)
},5000)



let stopInteraval =document.querySelector('.stopInteraval');
stopInteraval.addEventListener('click', function (){
    clearInterval(timer)
})

 let clearTime = setTimeout(()=>{
    console.log('i am a Gamer')
},5000)

let stop = document.getElementById('stopInterval');

stop.addEventListener('click', function(){
    clearTimeout(clearTime)
})



// //cOnstructor
function Detail (names,address,phone){
    this.names = names
    this.address= address
    this.phone= phone
};
let name1 = 'Emmanuel';
let address1= 'mechanic road agudama';
let phone1 = `09037774217`;


let personalDetail= new Detail (name1,address1,phone1)
personalDetail.sex='male'

console.log(personalDetail);

// create a form with input name, adress, phone, date and sex in your js file
// construct an object to take in thes five parmeters also create a new instance of the object and use
// the values of this forms as the new instance of the consturucted object.
 
// HINT;




