import { ReactNode } from 'react';
import FadeIn from 'react-fade-in';

interface MovieListPros {
  children: ReactNode;
}

function MovieList({ children }: MovieListPros) {
  return (
    <ul>
      <FadeIn className="divide-y divide-gray-100">{children}</FadeIn>
    </ul>
  );
}

export { MovieList };
