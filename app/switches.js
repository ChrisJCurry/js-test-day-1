// 1. Given a string with the value of a day of the week, return the number that that day is in the week. 
//A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. 
//If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7

    function daysPosition(day, offset) {
        day = day.charAt(0).toUpperCase() + day.slice(1)
        let dayPosNum
        if(offset) {
            switch(day) {
                case "Monday":
                    dayPosNum = 1;
                    break;
                case "Tuesday":
                    dayPosNum = 2;
                    break;
                case "Wednesday":
                    dayPosNum = 3;
                    break;
                case "Thursday":
                    dayPosNum = 4;
                    break;
                case "Friday":
                    dayPosNum = 5;
                    break;
                case "Saturday":
                    dayPosNum = 6;
                    break;
                case "Sunday":
                    dayPosNum = 7;
                    break;
                default:
                    return "That's not a day of the week"
            }
        } else {
            switch(day) {
                case "Monday":
                    dayPosNum = 2;
                    break;
                case "Tuesday":
                    dayPosNum = 3;
                    break;
                case "Wednesday":
                    dayPosNum = 4;
                    break;
                case "Thursday":
                    dayPosNum = 5;
                    break;
                case "Friday":
                    dayPosNum = 6;
                    break;
                case "Saturday":
                    return 7;
                    break;
                case "Sunday":
                    dayPosNum = 1;
                    break;
                default:
                    return "That's not a day of the week"
            }
        }
        return dayPosNum
    }
    
    
    // --------------------------------------------
    
    
    /** 2. Given a both a score and a score for par, return the corresponding term:
     *           difference |   term
     *    -----------------------------------
     *  (score == 1) || -3  |   "Ace"
     *            -2        |   "Eagle"
     *            -1        |   "Birdie"
     *             0        |   "Par"
     *            +1        |   "Bogie"
     *            +2        |   "Double Bogie"
     *            >= +3     |   "Ouch"
     */
    
     function golfScore(score, par) {
    
        let num = score-par
        let result=""
        switch(num) {
            case (score == 1 || num == -3):
                result="Ace";
                break;
            case -2:
                result="Eagle";
                break;
            case -1:
                result="Birdie";
                break;
            case 0:
                result="Par";
                break;
            case 1:
                result="Bogie";
                break;
            case 2:
                result="Double Bogie";
                break;
            default:
                result="ouch";
                break;
        }
        return result
     }
     
    
    // --------------------------------------------
    
    
    // 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
    // Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
    /**
     *      Value   |   Cards
     *   --------------------------------
     *       +1     |   '2', '3', '4', '5', '6'
     *        0     |	'7', '8', '9' 
     *       -1	    |   '10', 'J', 'Q', 'K','A' 
     */
    // Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
    // Example:
        // output: '-5 Hold'
    // Example:
        // output: '2 Bet'
    
    let count = 0
    
    function cardCounter(card) {
        switch(card) {
            case "2":
                count += 1;
                break;
            case "3":
                count += 1;
                break;
            case "4":
                count += 1;
                break;
            case "5":
                count += 1;
                break;
            case "6":
                count += 1;
                break;
            case "7":
                count += 0;
                break;
            case "8":
                count += 0;
                break;
            case "9":
                count += 0;
                break;
            case "10":
                count -= 1;
                break;
            case "J":
                count -= 1;
                break;
            case "Q":
                count -= 1;
                break;
            case "K":
                count -= 1;
                break;
            case "A":
                count -= 1;
                break;
        }
    
        if(count >= 0) {
            return count + " Bet"
        } else if(count < 0) {
            return count + " Hold"
        }
    }
    