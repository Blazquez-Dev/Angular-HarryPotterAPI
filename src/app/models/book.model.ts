export interface Book {
  slug: string;
  title: string;
  author: string | null;
  cover: string | null;
  dedication: string | null;
  pages: number | null;
  release_date: string | null;
  summary: string | null;
  wiki: string | null;
}
