import BooksList from "../Components/Books/BooksList";

type Props = {
  books: any;
};

export default function Index() {
  return (
    <div>
      Hello
      <BooksList />
    </div>
  );
}
