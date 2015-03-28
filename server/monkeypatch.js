The Javascript Date object is a woefully inadequate and there is no help on the horizon. It has a lot of methods, but the few methods to actually manipulate dates in ways which make sense to humans. You end up having to jump through hoops which seem completely rediculous in order to do something as simple as adding a day to date. 

var today = new Date();
var tomorrow = today.setDay(today.getDay() + 1);

This is how you add a day to a date in Javascript. Doesn't this code look like something you would chide an junior engineer for? This is the sort of nonsense that ends up in your codebase when working with dates in Javascript. This is exactly the sort of non-human readable code that we argue has no business in modern coding. 

People avoid working with dates because it's hard, but also because dates come in two forms: incomprehensible integers, and strings you can't manipulate. Therefore I think we should all start getting comfortable monkeypatching the Javascript Date object with the getters and setters they refuse to provide us with. We can make datetime math start to make more sense. 

Date.prototype.addDays = function (days) {
  this.setDay(this.getDay() + days); 
};
var today = new Date();
var tomorrow = today.addDays(1);

Now doesn't that look better? 
