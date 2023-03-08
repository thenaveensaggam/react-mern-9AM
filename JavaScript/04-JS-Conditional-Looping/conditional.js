/**
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while
 * 5. do-while
 */

// if-else
/**
 * if(condition){
 *      if(condition){
 *          for(){}
 *      }
 *      else{
 *
 *      }
 * }
 * else if{
 *  if(condition){
 *
 *      }
 *      else{
 *
 *      }
 * }
 * else if{
 *  if(condition){
 *
 *      }
 *      else{
 *
 *      }
 * }
 * else{
 *      if(condition){
 *
 *      }
 *      else{
 *
 *      }
 * }
 *
 */
let currentTime = 1;
let wishMessage = "";
if(currentTime >= 0 && currentTime <= 12){
    wishMessage = "Good Morning";
}
else if(currentTime >= 13 && currentTime <= 17){
    wishMessage = "Good Afternoon";
}
else if(currentTime >= 18 && currentTime <= 23){
    wishMessage = "Good Evening";
}
else{
    wishMessage = "Invalid Time";
}
console.log(wishMessage);


// switch
/**
 * switch(value){
 *     case matched:
 *        statements;
 *        break;
 *     case matched:
 *        statements;
 *        break;
 *     default :
 *       statements;
 *       break;
 * }
 */
const today = new Date().getDay();
let fullDay = "";
switch (today){
    case 0:
        fullDay = "Sunday";
        break;
    case 1:
        fullDay = "Monday";
        break;
    case 2:
        fullDay = "Tuesday";
        break;
    case 3:
        fullDay = "Wednesday";
        break;
    case 4:
        fullDay = "Thursday";
        break;
    case 5:
        fullDay = "Friday";
        break;
    case 6:
        fullDay = "Saturday";
        break;
    default:
        fullDay = "Invalid";
        break;
}
console.log(`Today is : ${fullDay}`);
















