




let country=fetch("https://restcountries.com/v3.1/all")
country.then(data=>data.json())
.then(data1=>foo(data1));

function foo(arr){
    for(i=0;i<=arr.length-1;i++){
   
        let div=document.createElement("div");
        div.innerHTML=`


       
                          
                              <div class="col-sm-4">
                              <div class="card-group">
                                 <div class="card">
                                
                              
                                    <div class="card-body">
                                    <img src="${arr[i].flags.svg}" class="card-img-top" alt="...">
                                   
                                    <h5 class="card-title1">${arr[i].name.common}</h5>
                                        <h5 class="card-title">Capital:${arr[i].capital}</h5>
                                        <h5 class="card-title">Region:${arr[i].region}</h5>
                                        <h5 class="card-title">Latlng:${arr[i].latlng}</h5>
                                        <h5 class="card-title">Country code:${arr[i].cca3}</h5>
                                        <a href= https://api.openweathermap.org/data/2.5/weather?lat=75&lon=25&appid=1c948280cfe3ae049bd2203908210 class="btn btn-primary">Check Weather</a>
                                     </div>
                                     </div>
                                 </div>
                              </div> 
                            </div>
                         </div>`
      document.body.append(div)
     
      
      }
    }