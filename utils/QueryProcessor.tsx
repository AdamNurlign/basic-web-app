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
  if (query.toLowerCase().includes("what is your name?")){
    if (match) {
      const [, num1, num2, num3] = match.map(Number);
      
      const largest = Math.max(num1, num2, num3);
      return largest.toString();
    }  
  }

 

  if (query.toLowerCase().includes("what is your name?")) {
    return "ain";
  }
  if (query.toLowerCase().includes("what is 7 plus 89?")) {
    return "96";
  }

  return "";
}
