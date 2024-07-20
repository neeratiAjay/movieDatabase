import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import Header from './Components/Header'
import Home from './Components/Home'
import Toprated from './Components/Toprated'
import UpComing from './Components/UpComing'
import MovieDetails from './Components/MovieDetails'
import ChangeItem from './context'

import './App.css'

// write your code here
class App extends Component {
  state = {
    showItems: false,
    searchInput: '',
    isSearch: false,
    searchedData: [],
    searchPage: 1,
    numberOfPages: 1,
  }

  getUpdateData = response => ({
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

  getSearchData = async () => {
    const {searchInput, searchPage} = this.state

    const API_KEY = '604e96e08d75b8e6bc1e76a984200ce1'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=${searchPage}`
    const searchResponse = await fetch(url)
    const data = await searchResponse.json()
    const updatedData = this.getUpdateData(data)
    const {totalPages} = updatedData
    this.setState({searchedData: updatedData, numberOfPages: totalPages})
  }

  onClickNextPage = () => {
    const {numberOfPages, searchPage} = this.state

    if (searchPage < numberOfPages) {
      this.setState(
        prevState => ({
          searchPage: prevState.searchPage + 1,
        }),
        this.getSearchData,
      )
    }
  }

  onClickPreviousPage = () => {
    const {searchPage} = this.state
    if (searchPage > 1) {
      this.setState(
        prevState => ({
          searchPage: prevState.searchPage - 1,
        }),
        this.getSearchData,
      )
    }
  }

  onClickSearchData = () => {
    const {searchInput} = this.state

    if (searchInput !== '' && searchInput.length !== 0 && searchInput !== ' ') {
      this.getSearchData()
      this.setState({isSearch: true})
    }
  }

  openMenu = () => {
    this.setState({showItems: true})
  }

  closeMenu = () => {
    this.setState({showItems: false})
  }

  changeInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {
      showItems,
      isSearch,
      searchInput,
      searchedData,
      searchPage,
    } = this.state

    return (
      <ChangeItem.Provider
        value={{
          showItems,
          openMenuItems: this.openMenu,
          closeMenuItems: this.closeMenu,
          changeInput: this.changeInput,
          getSearchData: this.onClickSearchData,
          isSearch,
          searchInput,
          searchedData,
          searchPage,
          nextPage: this.onClickNextPage,
          prevPage: this.onClickPreviousPage,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={Toprated} />
          <Route exact path="/upcoming" component={UpComing} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </ChangeItem.Provider>
    )
  }
}

export default App
/*
 <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={Toprated} />
        </Switch>
*/
