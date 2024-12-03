import Link from "next/link";

const movies = [
  { title: 'Kung Fu Panda', slug: 'kungfupanda' },
  { title: 'Shrek', slug: 'shrek' },
  { title: 'Toy Story', slug: 'toystory' },
];

export default function Home() {
  return (
    <div>
      <div>
        <section>
          las mejores peliculas aqui
        </section>
      </div>
      <div>
        <div>
          <h3>Search</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Genres</h3>
          <select name="gener" id="select-gener">
            <option value="op1">Opcion 1</option>
            <option value="op1">Opcion 2</option>
            <option value="op1">Opcion 3</option>
          </select>
        </div>
      </div>
      <div>
        <section>
          <h3>Popular</h3>
          <p>Listado de peliculas</p>
          <ul>
            {movies.map((movie) => (
              <li key={movie.slug}>
                <Link href={`/movie/${movie.slug}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Now Paying</h3>
          <p>Listado de peliculas</p>
        </section>
        <section>
          <h3>Upcoming</h3>
          <p>Listado de peliculas</p>
        </section>
        <section>
          <h3>Top Rated</h3>
          <p>Listado de peliculas</p>
        </section>
        <section>
          <h3>Favorites</h3>
          <p>Listado de peliculas</p>
        </section>
      </div>
    </div>
  );
}
