app.controller("listctrl",['$http',function($http){
var lc= this;
$http({'method':'GET','url':'data/data.json'}).success(function(res){
console.log(res);
lc.events=res;
}).error(function(err){
	console.log("error is" ,err);
	alert("err");
})

}])