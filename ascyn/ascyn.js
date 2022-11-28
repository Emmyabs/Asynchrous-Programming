async function myFunction(){
    return "hello";
}
myFunction().then(
    value=>console.log(value)
)

let populationFunction = async function(){
    try{
        let populationData = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        if(!populationData.ok)
        throw'Population Data not found';
        let data= await populationData.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
        
    }
finally{
    console.log('we are trying our best to give the data of the population ')
}
}
populationFunction();