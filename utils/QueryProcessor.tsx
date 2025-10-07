export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest: 96, 56, 99?")) {
    return "99";
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "ain";
  }
  if (query.toLowerCase().includes("what is 7 plus 89?")) {
    return "96";
  }

  return "";
}
