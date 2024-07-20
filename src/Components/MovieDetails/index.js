import {Component} from 'react'

import {
  MainContainer,
  MovieDataContainer,
  OverView,
  Ul,
  Li,
  Title,
  Rating,
  Span,
  Poster,
  ContentContainer,
  Text,
  Value,
  GenreUl,
  GenreLi,
  A,
  Profile,
  Para,
  FlexContainer,
  CastTitle,
} from './styledComponents'

class MovieDetails extends Component {
  state = {movieData: [], castData: []}

  componentDidMount() {
    this.getMovieData()
  }

  getUpdateMovieData = response => ({
    backdropPath: response.backdrop_path,
    budget: response.budget,
    homePage: response.homepage,
    genres: response.genres,
    id: response.id,
    overview: response.overview,
    popularity: response.popularity,
    posterPath: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
    releaseDate: response.release_date,
    revenue: response.revenue,
    runtime: response.runtime,
    status: response.status,
    rating: response.vote_average,
    title: response.title,
    spokenLanguages: response.spoken_languages,
    productionCountries: response.production_countries,
    originCountry: response.origin_country,
  })

  getUpdateCastDataFormat = response => ({
    id: response.id,
    cast: response.cast.map(eachItem => ({
      id: eachItem.id,
      character: eachItem.character,
      knownkForDepartment: eachItem.known_for_department,
      name: eachItem.name,
      popularity: eachItem.popularity,
      profilePath: `https://image.tmdb.org/t/p/w500${eachItem.profile_path}`,
    })),
    crew: response.crew.map(item => ({
      department: item.department,
      job: item.job,
      id: item.id,
      name: item.name,
      profilePath: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
      popularity: item.popularity,
    })),
  })

  getMovieData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const API_KEY = '604e96e08d75b8e6bc1e76a984200ce1'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = this.getUpdateMovieData(data)

    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const castResponse = await fetch(castUrl)
    const castResponseData = await castResponse.json()

    const updatedCastData = this.getUpdateCastDataFormat(castResponseData)

    this.setState({movieData: updatedData, castData: updatedCastData})
  }

  movieDetailsItems = props => {
    const {
      budget,
      homePage,
      id,
      overview,
      releaseDate,
      revenue,
      posterPath,
      rating,
      runtime,
      title,
      status,
      genres,
      originCountry,
    } = props

    return (
      <MovieDataContainer key={id}>
        <FlexContainer>
          <Poster src={posterPath} alt={title} />
          <A href={homePage}>More Details</A>
        </FlexContainer>

        <ContentContainer>
          <Title>{title}</Title>

          <Rating>
            Rating : <Span>{rating}</Span>
          </Rating>
          <OverView>{overview}</OverView>
          <Text>
            Budget: <Value>{budget}</Value>
          </Text>
          <Text>
            revenue: <Value> {revenue}</Value>
          </Text>
          <Text>
            Runtime: <Value>{runtime} </Value> minuts
          </Text>
          <Text>
            Country : <Value>{originCountry} </Value>
          </Text>
          <Text>
            Release Date : <Value>{releaseDate} </Value>
          </Text>
          <Text>
            Status: <Value>{status} </Value>
          </Text>

          <GenreUl>
            <Text> Genre : </Text>
            {Array.isArray(genres) &&
              genres?.map(genre => (
                <GenreLi key={genre.id}>
                  <Value>{genre.name}</Value>
                </GenreLi>
              ))}
          </GenreUl>
        </ContentContainer>
      </MovieDataContainer>
    )
  }

  castItemDetails = props => {
    const {
      character,
      id,
      knownkForDepartment,
      name,
      popularity,
      profilePath,
    } = props

    return (
      <Li key={id}>
        <Profile src={profilePath} alt={name} />
        <Text>
          Name : <Para>{name}</Para>
        </Text>
        <Text>
          Character : <Para>{character}</Para>
        </Text>
        <Text>
          Department : <Para>{knownkForDepartment}</Para>
        </Text>
        <Text>
          Popularity : <Para>{popularity}</Para>
        </Text>
      </Li>
    )
  }

  crewItemDetails = props => {
    const {id, job, name, profilePath} = props

    return (
      <Li key={id}>
        <Profile src={profilePath} alt={name} />
        <Text>
          Name : <Para>{name}</Para>
        </Text>
        <Text>
          Job : <Para>{job}</Para>
        </Text>
      </Li>
    )
  }

  render() {
    const {movieData, castData} = this.state
    const {cast} = castData

    return (
      <MainContainer>
        {this.movieDetailsItems(movieData)}
        <CastTitle>Movie Cast</CastTitle>
        <Ul>
          {Array.isArray(cast) &&
            cast?.map(eachCast => this.castItemDetails(eachCast))}
        </Ul>
      </MainContainer>
    )
  }
}
export default MovieDetails

/*

 <CastTitle>Movie Crew</CastTitle>
        <Ul>
          {Array.isArray(crew) &&
            crew?.map(eachCrew => this.crewItemDetails(eachCrew))}
        </Ul>

*/
