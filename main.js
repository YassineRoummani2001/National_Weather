// const apikey='UUVNX8JYDJQYZ3DFJJFPB6USK';
// let callfunction=function(city){
//     // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
//     let url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/weather?&Key=${apikey}`;

//     fetch(url).then((reponse)=>reponse.json().then((data)=>{
//         console.log(data);
//     document.querySelector("#city").innerHTML =data.name;
//     document.querySelector("#temp").innerHTML ="<i class='fas fa-thermometer-half'></i>"+data.main.temp+'°';
//     document.querySelector("#humidity").innerHTML ="<i class='fas fa-tint'></i>"+data.main.humidity+'%';
//     document.querySelector("#wind").innerHTML ="<i class='fas fa-wind'></i> "+data.wind.speed+'km/h';
//     })).catch((err)=>console.log("Error: ",+err));
// };
// //ecouteur de d'evenement sur la soulution de la formulaire
// document.querySelector('form').addEventListener('submit',function(element){
//     element.preventDefault();
//     let ville=document.querySelector('#inputcity').value;
//     callfunction(ville);

// });
// callfunction('fes');
























const apikey='5e8030f4b474ab9f16ad18e5bb93fb77';
let callfunction=function(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url).then((reponse)=>reponse.json().then((data)=>{
        console.log(data);
    document.querySelector("#city").innerHTML =data.name;
    document.querySelector("#temp").innerHTML ="<i class='fas fa-thermometer-half'></i>"+data.main.temp+'°';
    document.querySelector("#humidity").innerHTML ="<i class='fas fa-tint'></i>"+data.main.humidity+'%';
    document.querySelector("#wind").innerHTML ="<i class='fas fa-wind'></i>"+data.wind.speed+'km/h';
    })).catch((err)=>console.log("Error: ",+err));
};
//ecouteur de d'evenement sur la soulution de la formulaire
document.querySelector('form').addEventListener('submit',function(element){
    element.preventDefault();
    let ville=document.querySelector('#inputcity').value;
    callfunction(ville);

});
callfunction('rabat');


/*
fetch("https://zozor54-whois-lookup-v1.p.rapidapi.com/getDomainsFromIp?ip=216.58.213.142", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "zozor54-whois-lookup-v1.p.rapidapi.com",
		"x-rapidapi-key": "27ccb0bc35msh7c209f76a5afdffp151700jsn38ff721c288d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

*/
