const getCountries=()=>{
    const xhr = new XMLHttpRequest();
       xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
     xhr.send();
     xhr.responseType = "json";
    
     xhr.onload = ()=>{
    const countries= xhr.response;
    console.log("all countries", countries);
//currencies
    var currencies = countries.filter(element=>element.currencies.filter(value=>value.code==='USD').length>0);
    console.log(currencies);
//asia
    var asia=countries.filter(n=>n.region==="Asia");
    console.log(asia);

    var population=countries.filter(n=>n.population<2_00_000);
    console.log(population);

    var totalPopulation= countries.reduce((a,b)=>a+b.population,0)
    console.log(totalPopulation);

    var flag= countries.forEach(element => {
    console.log(element.flag);
    })
    var name= countries.forEach(element => {
        console.log(element.name);
        })
        var capital= countries.forEach(element => { 5
            console.log(element.capital);
            })


    // for (let value of countries){
    //     console.log(value.population)
    //     console.log(value.region)
    //     console.log(value.name)
    //     console.log(value.flags)
    // }
     }
    }
    getCountries();