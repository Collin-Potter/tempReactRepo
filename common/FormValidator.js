var moment = require('moment');

function validateUsername(input, validCheck) {
  //ensures user input for full name matches requiremnts given by regular expression
  //username should be at least one letter (lowecase or uppercase)
  //username should only be comprised of letters and numbers only
  const usernameRegex = /^[a-zA-Z0-9]{2,30}$/;
  if (validCheck) {
    //is this check for valid or invalid property of inputfield
    if (usernameRegex.test(input) && input !== undefined) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  } else {
    if (usernameRegex.test(input)) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  }
}

function validateEmail(input, validCheck) {
  //ensures that user input adheres for email matches requiremnts given by regular expression
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (validCheck) {
    if (emailRegex.test(input) && input !== undefined) {
      return true;
    } else {
      return false;
    }
  } else {
    if (emailRegex.test(input) || input === undefined) {
      return true;
    } else {
      return false;
    }
  }
}

function validatenNewPassword(input, validCheck) {
  //ensures user input for password meets the minimum requirements
  //password should
  //... contain at least 1 digit
  //... contain at least 1 lowercase
  //... contain at least 1 upper case
  //... be at least 8 characters long
  // const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; //stronger password regex
   const passRegex = /^[a-zA-Z0-9]{2,30}$/;
  if(validCheck){
    if (passRegex.test(input) && input !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  else{
    if (passRegex.test(input) || input === undefined) {
      return true;
    } else {
      return false;
    }
  }
  
}

function validateConfirmPassword(input, oldpassword) {
  //ensures user input for confirm password is a match to the input entered for password by user
  if (input === oldpassword) {
    return true;
  } else {
    return false;
  }
}

function validateRegularWord(input, validCheck){
  //ensures word entered by user is made up of only names and spaces
  const wordRegex =  /^[a-zA-Z ]{1,30}$/;
  if (validCheck) {
    //is this check for valid or invalid property of inputfield
    if (wordRegex.test(input) && input !== undefined) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  } else {
    if (wordRegex.test(input)) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  }
}

function validateDescription(input, validCheck){
  //ensures description entered by user does not exceed maximum length
  const descriptionRegex = /^[a-zA-Z0-9 ]{2,255}$/;
  if (validCheck) {
    //is this check for valid or invalid property of inputfield
    if (descriptionRegex.test(input) && input !== undefined) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  } else {
    if (descriptionRegex.test(input)) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  }
}

function validateState(input, validCheck){
  //ensures state entered by user is only two capital letters
  const stateRegex = /^[A-Z]{2}$/;
  if (validCheck) {
    //is this check for valid or invalid property of inputfield
    if (stateRegex.test(input) && input !== undefined) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  } else {
    if (stateRegex.test(input)) {
      // alert(`${input} is valid`);
      return true;
    } else {
      // alert(`${input} is not valid`);
      return false;
    }
  }
}

function validateZIP(input, validCheck){
   //ensures zip cpde entered by user is only two capital letters
   const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
   if (validCheck) {
     //is this check for valid or invalid property of inputfield
     if (zipRegex.test(input) && input !== undefined) {
       // alert(`${input} is valid`);
       return true;
     } else {
       // alert(`${input} is not valid`);
       return false;
     }
   } else {
     if (zipRegex.test(input)) {
       // alert(`${input} is valid`);
       return true;
     } else {
       // alert(`${input} is not valid`);
       return false;
     }
   }
}

function validateStartTime(input){
  const startTime = moment(input);
  if(startTime.isValid() === false){ //first check if date is valid
    return false
  }
  else{
    if(startTime.isSame(moment(), 'day')){ //then check if startTime = moment down to the day
      if(startTime.get('hour') <= moment().get('hour')){ //check that if on same day startTime is at least 1 hour ahead from moment
        return false;
      }
      else{ //startTime is valid and is ahead of moment
        return true;
      }
    }
    else{ //startTime is valid and not equal to moment
      return true;
    }
  }
}

function validateEndTime(input, startInput){
  const endTime = moment(input);
  const startTime = moment(startInput);
  if(endTime.isValid() === false){ //first check if date is valid
    return false
  }
  else{
    if(endTime.isSame(startTime, 'day')){ //then check if endTime = startTime down to the day
      if(endTime.get('hour') <= startTime.get('hour')){ //check that if on same day endTime is at least 1 hour ahead from startTime
        return false;
      }
      else{ //endTime is valid and is ahead of startTime
        return true;
      }
    }
    else{ //endTime is valid and not equal to startTime
      return true;
    }
  }
}

export default {
  validateUsername,
  validateEmail,
  validatenNewPassword,
  validateConfirmPassword,
  validateRegularWord,
  validateState,
  validateZIP,
  validateDescription,
  validateStartTime,
  validateEndTime
};
