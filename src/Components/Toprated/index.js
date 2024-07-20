import {useState, useEffect} from 'react'
import MovieItem from '../MovieItem'

import {Ul, PageContainer, Btn, PageNo} from './styledComponents'

const Toprated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [topRatedpage, setTopRatedPage] = useState(1)

  const getUpdateData = response => ({
    totalPages: response.total_pages,
    totalResults: response.total_results,
    results: response.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: ` https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
      voteAverage: eachMovie.vote_average,
      title: eachMovie.title,
      overview: eachMovie.overview,
      backdropPath: `https://image.tmdb.org/t/p/w500${eachMovie.backdrop_path}`,
    })),
  })

  useEffect(() => {
    const getData = async (page = 1) => {
      const API_KEY = '604e96e08d75b8e6bc1e76a984200ce1'
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      const updatedData = getUpdateData(data)
      setTopRatedMovies(updatedData)
    }
    getData(topRatedpage)
  }, [topRatedpage])

  const onClickNextPage = () => {
    const {totalPages} = topRatedMovies
    if (totalPages > topRatedpage) {
      setTopRatedPage(prevPage => prevPage + 1)
    }
  }

  const onClickPreviousPage = () => {
    if (topRatedpage > 1) {
      setTopRatedPage(prevPage => prevPage - 1)
    }
  }

  const {results} = topRatedMovies

  return (
    <>
      <Ul>
        {Array.isArray(results) &&
          results?.map(eachMovie => (
            <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          ))}
      </Ul>
      <PageContainer>
        <Btn type="button" onClick={onClickPreviousPage}>
          Previous Page
        </Btn>
        <PageNo>pageNo: {topRatedpage}</PageNo>
        <Btn type="button" onClick={onClickNextPage}>
          Next Page
        </Btn>
      </PageContainer>
    </>
  )
}
export default Toprated
