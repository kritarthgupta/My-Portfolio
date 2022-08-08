const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

var data = document.getElementById("data");
var Latitude;
var Longitude;
var key = "729d4d5473b710e7b03fdf8020892955";
var url = "https://api.openweathermap.org/data/2.5/weather?";

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        data_of_Lat_Lon.innerHTML="Geolocation is not supported by this browser. SORRY!";
    }
}

function showPosition(position){    
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getData(Latitude,Longitude);
}

function getData(Lat,Lon){
    const readyToSent = (url+"lat="+Lat+"&lon="+Lon+"&appid="+key);   
    fetch(readyToSent)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        fetchData(data)
    })
}

function fetchData(data){
    const icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    document.getElementById("data").style.textAlign = "justify";
    document.getElementById("data").innerHTML =
        // "<b>The weather report of your Location is :-</b><br>"+
        // "<img src="+icon+"><br>"+
        "Hello, I guess you are currently at <b><u>"+data.name+"("+data.sys.country+")</u></b>." + "<br>Do connect with me by reaching me through<br> the social media handles given in the end.&#128519"
        // "<br><b>Temperature: </b>"+parseFloat((data.main.temp - 273.15)).toFixed(1)+" &#8451;"+
        // "<br><b>But You will feel like :</b>"+parseFloat((data.main.feels_like - 273.15)).toFixed(1)+"&#8451;"+
        // "<br><b>Min. Temp. :</b>"+parseFloat((data.main.temp_min - 273.15)).toFixed(1)+"&#8451;"+
        // "<br><b>Max. Temp. :</b>"+parseFloat((data.main.temp_max - 273.15)).toFixed(1)+"&#8451;"+
        // "<br><b>Humidity: </b>"+data.main.humidity+" %"+
        // "<br><b>Weather: </b>"+data.weather[0].description+
        // "<br><b>Pressure: </b>"+data.main.pressure+" hPa"
}
getLocation();
showPosition();
getData();


// Default Gulp Task
exports.default = series(scssTask,jsTask,browserSyncServe, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);



////////////////////////////
