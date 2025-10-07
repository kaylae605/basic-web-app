export default function QueryProcessor(query: string): string {
  const normalizedQuery = query.toLowerCase();
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

  if (normalizedQuery.includes(" plus ")) {
    // Regex to find two numbers around "plus"
    const match = query.match(/What is (\d+) plus (\d+)\?/i);
    if (match && match.length === 3) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      return (num1 + num2).toString();
    }
  }

  // -----------------------------------------------------
  // 3. Comparison (Largest Number) Logic
  // Matches "Which of the following numbers is the largest: [A], [B], [C]?"
  // -----------------------------------------------------

  if (normalizedQuery.includes("which of the following numbers is the largest:")) {
    // Regex to find all number sequences separated by commas or spaces
    const numbersMatch = query.match(/(\d+)/g);

    if (numbersMatch && numbersMatch.length >= 2) {
      // Convert all captured strings to numbers
      const numbers = numbersMatch.map(n => parseInt(n, 10));

      // Find the maximum number
      const largest = Math.max(...numbers);

      // Return the result as a string
      return largest.toString();
    }
  }

  // -----------------------------------------------------
  // 4. Default Fallback
  // -----------------------------------------------------

  // If no other condition is met, return an empty string or a default response.


  return "";
}
