/*asynchronous programming include:
-SetInteraval
-setTimeout
-Promises
-{async await
-Api Calls}

// 
    PROMISES
// 
A promises is a Javascript object that links PRODUCING CODE and CONSUMING CODE

Producing code is the sode that will take some time to get a response

Consuming code is the code that must wait for a result or a response

                        SYNTAX
    let myPromise = new Promise (function(resolve,reject){
        resolve(); // when successful
        reject(); // when error
    })

    muPromise.then(
        function(value){ code is successful}
        function(error){sode if error}
    )
*/
let a=7;

let nameGrab = new Promise((rs,rj)=>{
    setTimeout(()=>{
        if(a===7){
            rs({name:'Bro'})
        }
        else{
            rj(Error('I no see am ooo'))
        }
    },5000)
});

nameGrab.then(
    (rs)=>{
       console.log(rs.name)
    }).catch(
        (err)=>console.log(err)
    )
    // SETTING THE HEADER
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    let div=document.getElementById("div")
    let data1=document.getElementById("Population")
    let dataYear =document.getElementById("dataYear")
    let dataNation = document.getElementById("dataNation")
    let tables = document.getElementById('table')
let firstPopulation;


    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response=>response.json())
    .then((response)=>{
        
        console.log(response)
        console.log(response.data[0].Year);
    let data= response.data
   
        

  
        
    let head= document.createElement('thead' )

    let datar1=document.createElement('td')
    let datar2=document.createElement('td')
    let datar3=document.createElement('td')

    datar1.innerHTML='Nation'
    datar2.innerHTML="Year"
    datar3.innerHTML="Population"

    head.append(datar1)
    head.append(datar2)
    head.append(datar3)

    tables .append(head)
    datar3.setAttribute('Id','all')
    datar2.setAttribute('Id','all')
    datar1.setAttribute('Id','all')

    for(i=0; i < data.length; i++ ){

        let t_row = document.createElement('tr')
        let data1 =document.createElement('td')
        let data2 =document.createElement('td')
        let data3 =document.createElement('td')
        console.log(data1)
        
        
        data1.innerHTML=data[i].Nation;
        data2.innerHTML=data[i].Year;
        data3.innerHTML=data[i].Population;
        
        
        t_row.appendChild(data1);
        t_row.appendChild(data2);
        t_row.appendChild(data3);

    
        tables.appendChild(t_row)
        
        console.log(data2)

        
  


    }
        console.log(head)
    
      
        
    } )
    .catch((err => console.log(err)));

    // console.log(firstPopulation)



   

    let loop=['jemilu','emmanuel',88,666]

    // for(let i=0; i<loop.length; i++){
    //     console.log(loop)
    // }
    
    fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(response => response.json())
        .then((response=>{
            console.log()
            console.log(response)
        } ))
        .catch(err => console.error(err));