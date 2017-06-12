/**************************************************************************************
ANSWER THE FOLLOWING QUESTIONS
**************************************************************************************



/**************************************************************************************
# 1
Warm up
Scope
- Study the code bellow and answer the following without checking the console.
A- Are the variables what they claim to be?
B- What would console.log(y) and console.log(x) print? Why?
- Write you answer bellow the code.
**************************************************************************************/
(function(){
  "use strict";

  var x = "I'm a local variable";
  //console.log(y)

  function scopeThis(){
    var y = "I'm a global variable";
    console.log(x);
  }
  scopeThis();
})();
/*************************************************************************************
------------ ANSWER -------------------
#1
A-The variables are not what they claim to be...well, var y is definitely not. var y is a local variable to scopeThis. var x IS a local variable (to the "container" script funciton..) but not local to function scopeThis.
B- console.log(y), if attempted outside of function scopeThis, wouldn't print.. it would probably come back as undefined.
   variable y is local to the scopeThis function. If console.log(y); was within the function scopeThis, it would print out "I'm a global variable".. which, again, is not true, but is its assigned string value.
   console.log(x) would print "I'm a local variable".

**************************************************************************************/




/*************************************************************************************
# 2
Warm up
Hoisting
- Study the code bellow and answer the following without checking the console.
- What would console.log(x) and console.log(y) print? Why?
- Write you answer bellow the code.
**************************************************************************************/
(function(){
  "use strict";

  function warmUp() {
    console.log(x);
    console.log(foo());

    var x = "variable hosting!";

    function foo() {
      return "function hoisting";
    }
  }
  warmUp();
})();
/*************************************************************************************
------------ ANSWER -------------------
console.log (x) would not print anything because of function hoisting. The function warmUp calls/ uses variable x before it is defined in the block.. var x's declaration would hoist to the top, but its assignment would not hoist with it. (agian, it is used before it is defined/ assigned a value).

console.log(y) has nothing to do with this context/ code block? There is no variable y to print. The console would probably return that y is not a variable...
**************************************************************************************/




//BROKEN---DONT DO
/**************************************************************************************
// # 3
// Warm up
// Date Object
// - Declare a variable 'todayIs'.
// - Using the date constructor, it should print today's date.
// **************************************************************************************/
// (function(testerOne){
//   "use strict";
//   var todayIs =
//   console.assert(todayIs == today, "#3 Test failed. Did you set the date correctly?");
// })(testerOne);
//
//
//
//


/**************************************************************************************
# 4
Warm up
- Study the code below. What will console.log(add) (inside the IFEE and outside) print? Why? Write your answer below.
- Do not uncomment console.log(add);
**************************************************************************************/
(function() {
  "use strict";
  const add = 2 + 2;
  //console.log(add);
})();
//console.log(add);
/**************************************************************************************
------------ ANSWER -------------------
-INSIDE: prints (the result of add's value) 4     //// -OUTSIDE: add is not defined.
**************************************************************************************/






/**************************************************************************************
# 5
Date object
Hoisting
- Set 'birthday' to an integer for April 21, 1983.
- There are a couple of hoisting issues in this exercise. Fix them to make the assertion pass.
**************************************************************************************/
(function(){
  "use strict";
  var birthday = ("1983, 4, 21");
  var date = new Date(birthday);
  var bdayMsg = function(){
    return "You were born on " + date.toDateString();
  }

  bdayMsg();


  console.log("#5 bdayMsg()", bdayMsg());
  console.assert(bdayMsg() == "You were born on Thu Apr 21 1983", "#5 Test failed. Check function hoisting." )
})();

///HEY! Aren't months zero indexed? I checked this answer... and initially had birthday = ("1983, 3, 21").....
// but it kept returning as March 21 instead of April, so I changed it.... but this doesn't make sense if zero indexed === true.
//would love to know why.





// BROKEN----DONT DO
// /**************************************************************************************
// # 6
// Date object
// - Declare a variable: 'stringDate'.
// - Set the value of 'stringDate' to be a string of today's date.
// **************************************************************************************/
// (function(testerTwo){
//   "use strict";
//   var today = new Date();
//   console.log("#6 stringDate", stringDate)
//   console.assert(stringDate == testerTwo, "#6 Test Failed. Did you set stringDate correctly?")
// })(testerTwo);
//
//
//
//


/**************************************************************************************
# 7
Object notation
Hoisting
- Using dot notation, do the following:
  - add a property of "sauceType" with a value of "tomato".
  - add a property of "protien" with a value of "chicken".
  - add a propety of "orderNow" with a value of that would make it pass the assertion.
  - add a property of "sauce" with a value of that would make it pass the assertion.
- Fix hoisting issues
- It should return, "We are making your pizza with tomato and chicken. Pickup in 20 minutes.".
**************************************************************************************/
(function(){
  "use strict";

  // pizza.pizzaMkr();

  var pizza = {
    sauce: "",
    orderNow: "",
    pizzaMkr: function(){
      if (pizza.orderNow == true && pizza.sauce == true){
        return "We are making your pizza with " + this.sauceType + " and " + this.protein + ". Pickup in 20 minutes."
      }
      else {
        return "We only make traditional pizzas. You gotta add some sauce!"
      }
    }
  }

pizza.sauceType = 'tomato';
pizza.protein = 'chicken';
pizza.orderNow = true;
pizza.sauce = true;

  console.log("# 7 pizza.pizzaMkr()", pizza.pizzaMkr());
  console.assert(pizza.pizzaMkr() == "We are making your pizza with tomato and chicken. Pickup in 20 minutes.", "#7 Test failed. Did you add the propeties? Did you set the values correctly? Did you fix the hoisting issues?")
})();

/**************************************************************************************
# 8
Scope
Hoisting
Object notation
- Study the code below, line by line, carefully. Keep hoisting and scope in mind.
- Add the following properties to 'benefit' using bracket notation:
  - "credit" with a value of 50.
  - "discount" with a value of 5.
- Complete the missing return statement.
- 'name' must be set to 'James' as a local variable in one of the functions. It should also change the global variable in order for the assertion to pass.
-It should return: "Hello James. Here is the status of your account. Thank you for your loyalty. You've been a member for 18 months . You next bill will reflect a $50 credit and a 5% discount going forward."
HINTS:
- Don't be overwhelmed by the length of the function. Read the instructions carefully. Read it line by line, keeping hoisting and scope in mind. You've got this.
- First fix hoisting issues.
- One of the variables is missing something.
- Are the functions being called when they are supposed to?
**************************************************************************************/
(function() {
  "use strict";

  var goodStanding = false;
  var monthsActive = 2;

  //Do not modify 'name' globaly.
  var name = null;

  var benefit = {}
  //Add properties to 'benefit' using braket notation
   benefit["credit"] = 50;
   benefit["discount"] = 5;

  var accountCheck = function() {
      name = "James";
      // goodStanding = true; monthsActive = 12;
    var greeting = function() {

      return "Hello " + name + ". Here is the status of your account."
    }

    function offerDiscount() {
     return "Thank you for your loyalty. You've been a member for " + monthsActive + " " + "months . You next bill will reflect a $" + benefit.credit + " credit and a " + benefit.discount + "% discount going forward.";
   }

    function accountStat() {

      if (goodStanding == true && monthsActive >= 12) {

        return offerDiscount(name);

      } else if (goodStanding == false) {

        return "Please make a payment within 7 days or your service will be terminated, forever."

      } else if (monthsActive <= 12) {

        var timeFrame = 12 - monthsActive;
        var months;

        if (timeFrame == 1) {

          months = "month";
        } else {

          months = "months"
        }

        return "You are " + timeFrame + " " + months + " from getting a special discount!"
      }
    }
   //  /Here 'accountCheck' should return both the 'greeting' output and the 'accountStat' output.
   return greeting();
   return accountStat();
  }

  console.log("#8 accountCheck():", accountCheck());
  console.assert(name == "James", "Test failed. You should set 'name' to 'james' from within accountCheck()");
  console.assert(accountCheck() == "Hello James. Here is the status of your account. Thank you for your loyalty. You've been a member for 18 months . You next bill will reflect a $50 credit and a 5% discount going forward.", "Test failed. It returned: " + accountCheck());

})();

///NOTE: this is halfway done and 2.5 hours in..... it is only returning greeting and account status (with nothing else). WITHOUT CHANGING THE VARIABLE VALUES FOR monthsActive and goodStanding (which we were not instructed to do), JAMES DOESN'T QUALIFY FOR THE DISCOUNT ANYWAY, SO THE STATUS OF HIS ACCOUNT IS BULLSHIT AND DOESN'T RETURN WHAT THE TEST WANTS. phew! 




/*************************************************************************************
# 9
Compartmentalization
- Fix the Compartmentalization issue in order to make the assertion pass.
**************************************************************************************/
(function() {
  "use strict";
  var multiply = 2 * 8;

  function duplicate() {
   var multiply = 2 * 10;
  };

  duplicate();

  console.log( "multiply", multiply );
  console.assert( multiply == 16, "Test failed. How can we isolate duplication()" );
})();
