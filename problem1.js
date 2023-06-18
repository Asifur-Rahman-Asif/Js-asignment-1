function getDayOfWeek(date) {
  // Create a Date object from the date string.
  const d = new Date(date);

  // Get the day of the week from the Date object.
  const dayOfWeek = d.getDay();

  // Return the day of the week.
  return dayOfWeek;
}

// Get the current date.
const today = new Date();

// Get the day of the week for the current date.
const dayOfWeek = getDayOfWeek(today.toISOString().split('T')[0]);

// Define an array of day names.
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Display the day of the week.
console.log(`Today is ${daysOfWeek[dayOfWeek]}.`);

    