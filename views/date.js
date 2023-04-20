//jshint eversion:6

console.log(module);

function getDate(){
var today = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var day = today.toLocaleDateString("hi-IN", options);
return day;
}
