// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var body = document.body.childNodes;
  var result = [];

  	if(document.body.classList.contains(className)){
	  	result.push(document.body);  	
	 };

  var recurse = function(collections){

	  for(var i = 0; i <collections.length;i++){
	  	var collection = collections[i];
	  	var children = collection.childNodes;
	  	var classList = collection.classList;
	  	if(classList && classList.contains(className)){
		  	result.push(collection);  	
		 };
	  	if(children){
	  		recurse(children);
	  	};
	  }
  };

  recurse(body);
  return result;
};
