export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }


  // Create a case-insensitive regex that matches and captures the numbers
  const pattern = /which of the following numbers is the largest:\s*(\d+),\s*(\d+),\s*(\d+)\??/i;
  const match = query.match(pattern);
  if (match) {
      const [, num1, num2, num3] = match.map(Number);
      
      const largest = Math.max(num1, num2, num3);
      return largest.toString();
  }  
  // Create a case-insensitive regex that matches and captures the numbers
  const pattern1 = /what is\s*(\d+)\s*plus\s*(\d+)\??/i;
  const match1 = query.match(pattern1);

  if (match1) {
      const [, num1, num2] = match1.map(Number);

      const sum = num1 + num2;
      return sum.toString();
  }

 

  if (query.toLowerCase().includes("what is your name?")) {
    return "ain";
  }
  if (query.toLowerCase().includes("what is 7 plus 89?")) {
    return "96";
  }

  return "";
}
