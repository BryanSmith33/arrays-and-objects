/*Create a new arr using filter without the falsey values from the following array*/
var arr = [1, 0, true, {}, false, null, "a string", ""];
arr.filter(function(elem) {
  return elem;
})


/*Create a new arr filtering out any strings from keepArr that are found in removeArr*/
var keepArr = ["string", "anotherstring", "whataboutthis", "heyo"];
var removeArr = ["anotherstring", "heyo"];

keepArr.filter(function(elem) {
  return removeArr.indexOf(elem) === -1;
});
