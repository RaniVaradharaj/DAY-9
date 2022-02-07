let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries which uses US Dollars as currency")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let SNo=0; 
             a.filter((e)=> e.currencies)
              .filter((e)=> e.currencies.USD)
              .map((e)=>{
                SNo++;
                console.log(SNo + '. ' + e.name.official)
                console.log("   CURRENCIES : " + Object.keys(e.currencies));
               })
    }
    else{
        console.log("Onload Error: Oops! Your script processing out of FrameWork!");
}
}
request.onerror=function(){
console.log("Onerror Error: Oops! There wass an error while loading Content");
}