// Create a new type "BlogSummary" that only inherit the "title" and "author" properties from the Blog interface.

interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
  }
  
  type BlogSummary = Pick<Blog, "title" | "author">; 
  
  const summary: BlogSummary = { title: "TypeScript Tips", author: "Alice" };

  console.log(summary);