import { Seq } from 'immutable';

export default function printBestStudents(object) {
  // Create a Seq from the provided object
  const seq = Seq(object);

  // Filter the Seq to get students with a score greater than 70
  const filtered = seq.filter((student) => {
    // Capitalize the first letter of the first name (Note: This line doesn't actually change the string)
    student.firstName.charAt(0).toUpperCase();
    // Return true if the student's score is greater than 70
    return student.score > 70;
  });

  // Define a function to capitalize the first letter of a string
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Convert the filtered Seq back to a regular JavaScript object
  const JSObject = filtered.toJS();

  // Iterate over the keys of the JSObject
  Object.keys(JSObject).map((key) => {
    // Capitalize the first letter of the first and last names of each student
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key]; // Return the updated student object
  });

  // Log the updated JSObject to the console
  console.log(JSObject);
}
