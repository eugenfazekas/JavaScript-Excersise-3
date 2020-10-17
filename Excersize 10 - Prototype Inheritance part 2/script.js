var Job = function() {
	this.pays = true;
}


Job.prototype.print = function() {
	console.log(this.pays ? 'Please hire me' : // Level 2
	'No thank you');
};


var TechJob = function(title,pays) { 
	
	Job.call(this);

	this.title = title;
	this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
//TechJob.prototype.constructor = TechJob;

/*
TechJob.prototype.print = function() {
	console.log(this.pays ? this.title + ' job is great, please hire me' : // Level 3(nearest)
	'I would rather learn javaScript')
}
*/
Object.prototype.print = function() {
	console.log( 'I m executing from the Master Object'); // Upper root Object Level 1
}

var softwarePosition1 = new TechJob('JavaScript Programmer', true);
var softwarePosition2 = new TechJob('vb Programmer', false);

console.log(softwarePosition1.print());
console.log(softwarePosition2.print());