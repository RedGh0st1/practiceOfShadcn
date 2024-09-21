import data from "../../data/db.json";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/Components/ui/card";

interface Book {
  id: number;
  title: string;
  author: string;
  illustrator: string;
  status: string;
  volumes: Volumes[];
}
interface Volume {
  id: number;
  volume: number;
  chapters: number;
  release_date: number;
  title: string;
  description: string;
  image_url: string;
}
interface Manga {
  title: string;
  author: string;
  illustrator: string;
  status: string;
  volumes: Volume[];
}

const mangaList: Manga[] = data.manga;

export default function BooksList() {
  const books = mangaList;

  if (!books || books.length === 0) return <div>No books found!!</div>;

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Manga Book Series</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {books.map((book) => (
          <Card key={book.id} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>
                <p>Author: {book.author}</p>
                <p>Illustrator: {book.illustrator}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Status: {book.status}</p>
              <h3 className="font-semibold mt-2">Volumes:</h3>
              <ul className="list-disc pl-5">
                {book.volumes && book.volumes.length > 0 ? (
                  book.volumes.map((vol) => (
                    <li key={vol.id}>
                      <p>
                        Volume {vol.volume}: {vol.title}
                      </p>
                      <p>Chapters: {vol.chapters}</p>
                      <p>
                        Release Date:{" "}
                        {new Date(vol.release_date).toLocaleDateString()}
                      </p>
                    </li>
                  ))
                ) : (
                  <p>No volumes found</p>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <p>Total Volumes: {book.volumes.length}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
