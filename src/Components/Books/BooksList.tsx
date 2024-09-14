interface Books {
  id: number;
  title: string;
  author: string;
  illustrator: string;
  status: string;
  volumes: Volumes[];
}
interface Volumes {
  id: number;
  volume: number;
  chapters: number;
  release_date: number;
  title: string;
  description: string;
  image_url: string;
}

// function
async function getBooks(): Promise<Books[]> {
  const res = await fetch("https://localhost:4000/books");

  return res.json();
}

export default async function BooksList() {
  const books = await getBooks();

  return (
    <main>
      <div className="grid grid-col-3 gap-8">{books.map()}</div>;
    </main>
  );
}
