// Assignment Code
var generateBtn = document.querySelector("#generate");
// Possible password elements
var letters = 'abcdefghijklmonpqrstuvwxyz';
var numbers = '1234567890';
var characters = '!@#$%^&*()_+`~{}][=-';
// Alphabetical elements converted into upper case and stored into a different array
var lettersSplitUpperCase = letters.toUpperCase().split('');

// Possible password elements converted into different arrays
var lettersSplit = letters.split('');
var numbersSplit = numbers.split('');
var charactersSplit = characters.split('');
// Possible collections of elements converted into different arrays
var allElements = lettersSplit.concat(lettersSplitUpperCase, numbersSplit, charactersSplit);
var noNumbers = lettersSplit.concat(lettersSplitUpperCase, charactersSplit);
var noChars = lettersSplit.concat(lettersSplitUpperCase, numbersSplit);
var noUpperCase = lettersSplit.concat(numbersSplit, charactersSplit);
var noLowerCase = lettersSplitUpperCase.concat(numbersSplit, charactersSplit);
var allLetters = lettersSplit.concat(lettersSplitUpperCase);
var numschars = numbersSplit.concat(charactersSplit);
var lowerCaseNums = lettersSplit.concat(numbersSplit);
var upperCaseNums = lettersSplitUpperCase.concat(numbersSplit);
var lowerCaseChars = lettersSplit.concat(charactersSplit);
var upperCaseChars = lettersSplitUpperCase.concat(charactersSplit);




// Write password to the #password input
function writePassword() {
  // Declaring variables for 4 prompts(Length, lower case, upper case, characters)
  var result = '';
  var qlength = prompt('What length would you like your password to be?');
  if(qlength > 8 && qlength < 128){
    var qNumbers = confirm('Would you like your password to include numerical values?')
    var qLowerCase = confirm('Would you like the password to contain lower case characters?');
    var qUpperCase = confirm('Would you like your password to contain upper case characters?');
    var qCharacters = confirm('Would you like your password to contain special characters?');
  } else {
    alert('Password must be between 8 and 128 characters long!!!');
    writePassword();
  }

  // The password generator function with conditions
  var password = generatePassword();
  function generatePassword(){
    if((qLowerCase = true) && (qUpperCase = true) && (qCharacters = true) && (qNumbers = true)){
    
    // All 4 prompts are selected
    
    for(i = 0; i < qlength; i++){
      result += allElements[parseInt(Math.random() * allElements.length)];
    }
    
    } else if ((qLowerCase = true) && (qUpperCase = true) && (qCharacters = true) && (qNumbers = false)){
    // 3 prompts selected(No numbers)

    for(i = 0; i < qlength; i++){
      result += noNumbers[parseInt(Math.random() * noNumbers.length)];
    }
        
    }
      return result;
      
  }
  
 


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);