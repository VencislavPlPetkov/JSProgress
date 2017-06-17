var titleTags = 0;
var liTags = 0;
var spanTags = 0;
var h1Tags = 0;
var sectionTags = 0;
var headTags = 0;
var ulTags = 0;
var scriptTags = 0;
var headerTags = 0;
var mainTags = 0;
var footerTags = 0;
var pTags = 0;
var metaTags = 0;
var emTags = 0;
var bodyTags = 0;

function count(node) {
	//console.log("count checker started");
	//console.log(node.constructor.name);

	var nodes = node.children;

	for (var j = 0; j < nodes.length; j++) {

		// console.log(node[j].constructor.name);
		// console.log(nodes[j]);
		// console.log(typeof nodes[j]);
		console.log(nodes[j].tagName);

		if (nodes[j].tagName == "TITLE") {
			titleTags++;
		} else if (nodes[j].tagName == "SPAN") {
			spanTags++;
		} else if (nodes[j].tagName == "H1") {
			h1Tags++;
		} else if (nodes[j].tagName == "SPAN") {
			spanTags++;
		} else if (nodes[j].tagName == "SECTION") {
			sectionTags++;
		} else if (nodes[j].tagName == "HEAD") {
			headTags++;
		} else if (nodes[j].tagName == "UL") {
			ulTags++;
		} else if (nodes[j].tagName == "SCRIPT") {
			scriptTags++;
		} else if (nodes[j].tagName == "HEADER") {
			headerTags++;
		} else if (nodes[j].tagName == "MAIN") {
			mainTags++;
		} else if (nodes[j].tagName == "FOOTER") {
			footerTags++;
		} else if (nodes[j].tagName == "P") {
			pTags++;
		} else if (nodes[j].tagName == "META") {
			metaTags++;
		} else if (nodes[j].tagName == "EM") {
			emTags++;
		} else if (nodes[j].tagName == "BODY") {
			bodyTags++;
		}

	}
}

function countDOMElements(node) {

	console.log("Node taken from the function: ", node);

	// console.log(typeof node);

	count(node);

	var nodes = node.childNodes;
	for (var i = 0; i < nodes.length; i++) {
		if (!nodes[i]) {
			continue;
		}

		if (nodes[i].childNodes.length > 0) {
			countDOMElements(nodes[i]);
		}
	}
}

var document = document.getElementsByTagName("body");

countDOMElements(document);

console.log("RESULTS: ");

console.log("Title	: ", titleTags);
console.log("LI	: ", liTags);
console.log("SPAN	: ", spanTags);
console.log("H1	: ", h1Tags);
console.log("SECTION	: ", sectionTags);
console.log("HEAD	: ", headTags);
console.log("UL	: ", ulTags);
console.log("SCRIPT	: ", scriptTags);
console.log("HEADER	: ", headerTags);
console.log("MAIN	: ", mainTags);
console.log("FOOTER	: ", footerTags);
console.log("P	: ", pTags);
console.log("META	: ", metaTags);
console.log("EM	: ", emTags);
console.log("BODY	: ", bodyTags);
