import data from "../../data/db.json";
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

export default function BooksList() {
  const book = data as Books;

  console.log("This is book on line 34:", book);
  if (!book) return <div>No book found</div>;

  return (
    <main>
      <p>BooksList</p>
      <div className="grid grid-cols-3 gap-8">
        <Card key={book.id}>
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>
              <p>Author: {book.author}</p>
              <p>Illustrator: {book.illustrator}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Status: {book.status}</p>
            <h3>Volumes:</h3>
            <ul>
              {book.volumes && book.volumes.length > 0 ? (
                book.volumes.map((volume) => (
                  <li key={volume.id}>
                    <p>
                      Volume {volume.volume}: {volume.title}
                    </p>
                    <p>Chapters: {volume.chapters}</p>
                    <p>
                      Release Date:{" "}
                      {new Date(volume.release_date).toLocaleDateString()}
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
      </div>
    </main>
  );
}
