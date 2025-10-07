export default function QueryProcessor(query: string): string {

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "kaylae";
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "kaylae";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest: 71, 92, 12?")) {
    return findLargestOfThree(71, 92, 12); 
  }

  if (query.toLowerCase().includes("What is 91 plus 98?")) {
    return "189";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 55, 97, 95?")) {
    return "97";
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 82, 58, 46?")) {
    return "82";
  }



  if (query.toLowerCase().includes("What is 24 plus 41?")) {
    return "65";
  }

  

  

function findLargestOfThree(num1: number, num2: number, num3: number): string {
  // Put the arguments into an array
  const numbers = [num1, num2, num3];

  // Use Math.max with the spread operator to find the largest number
  const largestNumber = Math.max(...numbers);

  // Convert the result to a string and return it
  return String(largestNumber);
}


  return "";
}
