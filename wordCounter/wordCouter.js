var phrase = `Spec:
	1. Word is a string with at least 3 word symbols in it.
	2. Word symbols are: Latin letters, dash, underscore and numbers.
	3. A Word can not start with number.

Examples:
	"this" is a word ('this' has more than 3 word symbols).
	"know-how" is one word (by spec, the dash is word symbol).
	"1st" is NOT a word, because it starts with number!
	"R2-D2" is a word, because it starts with letter!`;


function count(str){
	  var matched = str.match(/(?=\S*['-])([a-zA-Z'-]+)|(?:[a-zA-Z]{3,}|[\d\_\-])/g);
	  var obj={};
	  matched.forEach(function(el,i,arr){
		  matched[el]=  matched[el]? ++matched[el]: 1;
	  });
	  return matched;
	}

console.log(count(phrase));



















