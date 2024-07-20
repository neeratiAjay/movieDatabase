import {useState, useEffect} from 'react'

import MovieItem from '../MovieItem'
import SearchData from '../SearchQuary'
import ChangeItem from '../../context'

import {
  HomeContainerOne,
  Ul,
  PageContainer,
  Btn,
  PageNo,
} from './styledComponents'

const Home = () => {
  const [popularMoviesData, setPopularMovies] = useState([])
  const [homePage, setHomePage] = useState(1)

  const onClickNextPage = () => {
    const {totalPages} = popularMoviesData
    if (totalPages > homePage) {
      setHomePage(prevPage => prevPage + 1)
    }
  }

  const onClickPreviousPage = () => {
    if (homePage > 1) {
      setHomePage(prevPage => prevPage - 1)
    }
  }

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
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      const updatedData = getUpdateData(data)
      setPopularMovies(updatedData)
    }

    getData(homePage)
  }, [homePage])

  const HomeContent = () => {
    const {results} = popularMoviesData

    return (
      <HomeContainerOne>
        <Ul>
          {Array.isArray(results) &&
            results.map(eachMovie => (
              <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
            ))}
        </Ul>
        <PageContainer>
          <Btn type="button" onClick={onClickPreviousPage}>
            Previous Page
          </Btn>
          <PageNo>pageNo: {homePage}</PageNo>
          <Btn type="button" onClick={onClickNextPage}>
            Next Page
          </Btn>
        </PageContainer>
      </HomeContainerOne>
    )
  }

  return (
    <ChangeItem.Consumer>
      {value => {
        const {isSearch} = value
        return <>{isSearch ? <SearchData /> : HomeContent()}</>
      }}
    </ChangeItem.Consumer>
  )
}
export default Home
