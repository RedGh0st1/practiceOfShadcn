interface Books {
  id: number;
  title: string;
  author: string;
  illustrator: string;
  status: string;
  volumes: [];
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
interface Props {
  books: Books{};
}

export default function BooksList({ books }: Props) {
  return <div>BooksList</div>;
}
