/*
  Inteface => Allow to setup shape for objects (only objets)
*/

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
};

const deepWork1: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
};
