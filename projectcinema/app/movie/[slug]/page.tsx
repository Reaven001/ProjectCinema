interface MoviePageProps {
    params: {
        slug: string;
    };
}

const MoviePage: React.FC<MoviePageProps> = ({params}) => {
    const {slug} = params;

    return(
        <div>
            <section>
                <div>
                    Portada
                </div>
                <div>
                    <h1>
                        {slug}
                    </h1>
                    <h5>Fecha</h5>
                    <h3>Overview:</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ratione laborum modi aperiam. Sint maiores dignissimos tempore laborum distinctio. Delectus, minus corporis? Suscipit blanditiis molestias sapiente nam similique voluptas molestiae.</p>
                    <ul>
                        <li>Actor 1</li>
                        <li>Actor 2</li>
                        <li>Actor 3</li>
                        <li>Actor 4</li>
                    </ul>
                    <div>
                        Puntuacion
                    </div>
                    <div>
                        Generos
                    </div>
                </div>
            </section>
            <section>
                <h2>Recommendations</h2>
                Lista de recomentados aqui
            </section>
        </div>
    )
}

export default MoviePage;