import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/Components/ui/card";

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
      <div className="grid grid-col-3 gap-8">
        {books.map((book) => (
          <Card key={book.id}>
            <CardHeader>
              <div>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>
                  <p>{book.author}</p>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{book.status}</p>
            </CardContent>
            <CardFooter>
              <p>{book.Volumes.map((volume) => volume.title)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
