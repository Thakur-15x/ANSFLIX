const API_KEY = "8268342d4ab1b178a40156776ad2e133"

const requests = {
    fetchTreanding: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTreanding1: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=2`,
    fetchTreanding2: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=3`,
    fetchTreanding4: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=5`,
    // fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
    fetchAction: `/discover/movie/?api_key=${API_KEY}&with_genres=28&page=1`,
    fetchAction1: `/discover/movie/?api_key=${API_KEY}&with_genres=28&page=2`,
    fetchAction2: `/discover/movie/?api_key=${API_KEY}&with_genres=28&page=3`,
    fetchAction3: `/discover/movie/?api_key=${API_KEY}&with_genres=28&page=4`,
    // fetchAction: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,

    fetchComedy: `/discover/movie/?api_key=${API_KEY}&with_genres=35&page=1`,
    fetchComedy1: `/discover/movie/?api_key=${API_KEY}&with_genres=35&page=2`,
    fetchComedy2: `/discover/movie/?api_key=${API_KEY}&with_genres=35&page=3`,
    fetchComedy3: `/discover/movie/?api_key=${API_KEY}&with_genres=35&page=4`,
    // fetchComedy: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,

    fetchHorrar: `/discover/movie/?api_key=${API_KEY}&with_genres=27&page=1`,
    fetchHorrar1: `/discover/movie/?api_key=${API_KEY}&with_genres=27&page=2`,
    fetchHorrar2: `/discover/movie/?api_key=${API_KEY}&with_genres=27&page=3`,
    fetchHorrar3: `/discover/movie/?api_key=${API_KEY}&with_genres=27&page=4`,
    // fetchHorrar: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,

    fetchRomance: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&page=1`,
    fetchRomance1: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&page=2`,
    fetchRomance2: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&page=3`,
    fetchRomance3: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&page=4`,
    // fetchRomance: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99&page=2`,
    fetchDocumentaries1: `/discover/movie/?api_key=${API_KEY}&with_genres=99&page=1`,
    fetchDocumentaries2: `/discover/movie/?api_key=${API_KEY}&with_genres=99&page=3`,
    fetchDocumentaries3: `/discover/movie/?api_key=${API_KEY}&with_genres=99&page=4`,
    // fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99&page=3`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,

}

export default requests;

