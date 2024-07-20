import {Link} from 'react-router-dom'

import {
  Li,
  Title,
  Poster,
  ContentContainer,
  Rating,
  Span,
  ViewDetailsBtn,
} from './styledComponents'

const MovieItem = props => {
  const {movieDetails} = props
  const {posterPath, title, voteAverage, id} = movieDetails

  return (
    <Li>
      <Poster src={posterPath} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Rating>
          Rating: <Span>{voteAverage}</Span>
        </Rating>
        <Link to={`/movie/${id}`}>
          <ViewDetailsBtn type="button">View Details</ViewDetailsBtn>
        </Link>
      </ContentContainer>
    </Li>
  )
}
export default MovieItem
