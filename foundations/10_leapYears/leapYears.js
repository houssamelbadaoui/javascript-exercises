const leapYears = function(year) {
   let YearDivisibleByFour = year % 4 === 0;
   let YearDivisibleByHundred = year % 100 === 0;
   let YearDivisibleByFourHundred = year % 400 === 0;
   if(YearDivisibleByFour &&
    (!YearDivisibleByHundred || YearDivisibleByFourHundred)
   ){
    return true;
   }else{
    return false;
   }
};

// Do not edit below this line
module.exports = leapYears;
