const API_KEY = "8268342d4ab1b178a40156776ad2e133"

const requests = {
    fetchTreanding: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
    fetchAction: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrar: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
    // fetchAdult: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    // fetchWeb: `/tv/latest?api_key=${API_KEY}&language=en-US`

}

export default requests;

