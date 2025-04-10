// --------------------------------------------------
// Build a Date Conversion Program
// --------------------------------------------------

// User Story 1: Create a variable named currentDate and assign it the current date and time using the Date object.
const currentDate = new Date();

// User Story 2: Create a variable named currentDateFormat and assign it the string
// "Current Date and Time: [current date]". Replace [current date] with the result of the currentDate variable.
// Note: When a Date object is used in string context (like template literals),
// it automatically calls its toString() method.
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// User Story 3: Log the value of currentDateFormat to the console.
console.log(currentDateFormat);

// User Story 4 & 5: Create a function named formatDateMMDDYYYY that takes the date object as a parameter.
// This function should convert the current date to month/day/year format
// and return the string "Formatted Date (MM/DD/YYYY): [month]/[day]/[year]".
function formatDateMMDDYYYY(dateObject) {
  // Get month (0-11, so add 1), day (1-31), and full year (YYYY)
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  // Construct the final string according to the required format
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

// User Story 6 & 7: Create a function named formatDateLong that takes the date object as a parameter.
// This function should convert the current date to Month Day, Year format
// and return the string "Formatted Date (Month Day, Year): [formatted date]".
// Note: Use 'en-US' locale as specified for tests.
function formatDateLong(dateObject) {
  // Use toLocaleDateString for easy formatting according to locale and options
  const options = {
    year: 'numeric', // e.g., 2024
    month: 'long',   // e.g., September
    day: 'numeric'    // e.g., 27
  };

  // Format the date part using en-US locale
  const formattedDatePart = dateObject.toLocaleDateString('en-US', options); // e.g., "September 27, 2024"

  // Construct the final string according to the required format
  return `Formatted Date (Month Day, Year): ${formattedDatePart}`;
}


// --- Example Usage / Verification (Optional - for checking the functions work) ---
console.log("\n--- Function Examples ---");

// Using the currentDate defined earlier
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));

// Example using the specific date from the test cases (September 27, 2024)
// Note: Month is 0-indexed in the Date constructor (8 = September)
const testDate = new Date(2024, 8, 27, 16, 16, 11);
console.log("\n--- Test Case Date Examples (Sep 27, 2024) ---");
console.log(formatDateMMDDYYYY(testDate)); // Expected: Formatted Date (MM/DD/YYYY): 9/27/2024
console.log(formatDateLong(testDate));     // Expected: Formatted Date (Month Day, Year): September 27, 2024
// -----------------------------------------------------------------------------
