// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = '';
  console.log(obj);
  // your code goes here
  if(typeof obj == 'string'){
  	return '\"'+obj+'\"';
  }
  else if (obj == null){
  	return String(obj);
  }
  else if (typeof obj == 'undefined' || typeof obj === 'function'){
  	return '';
  }
  else if (Array.isArray(obj)){
  	var result = '[';
  	var comma = '';
  	for(var i = 0; i < obj.length;i++){
  		if(i>0){comma = ','};
  		result = result + comma + stringifyJSON(obj[i]);
  	}
  	return result + ']';
  }
  else if (typeof obj == 'object'){
  	var result = '{';
  	var comma = '';
  	var i = 0;
  	for(item in obj){
  		if(i>0){comma = ','};
  		i++;
  		if (typeof obj[item] == 'undefined' || typeof obj[item] === 'function'){
  			result = result + '';
  		}
  		else {
  			result = result + comma + stringifyJSON(item) + ':' + stringifyJSON(obj[item]);
  		}
  	}
  	return result + '}';
  }
  else return String(obj);
};
