import ChangeItem from '../../context'

import MovieItem from '../MovieItem'
import {
  HomeContainer,
  Ul,
  PageContainer,
  Btn,
  PageNo,
  Title,
} from './styledComponents'

const SearchData = () => (
  <ChangeItem.Consumer>
    {value => {
      const {searchedData, nextPage, prevPage, searchPage} = value

      const {results} = searchedData
      const gotoNextPage = () => {
        nextPage()
      }
      const gotoPreviousPage = () => {
        prevPage()
      }
      const dataIsEmpty =
        searchedData.length === 0 || searchedData.length === undefined

      return (
        <HomeContainer>
          {dataIsEmpty ? (
            <Title>Not Found </Title>
          ) : (
            <>
              <Ul>
                {Array.isArray(results) &&
                  results.map(eachMovie => (
                    <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
                  ))}
              </Ul>
              <PageContainer>
                <Btn type="button" onClick={gotoPreviousPage}>
                  Previous Page
                </Btn>
                <PageNo>pageNo: {searchPage}</PageNo>
                <Btn type="button" onClick={gotoNextPage}>
                  Next Page
                </Btn>
              </PageContainer>
            </>
          )}
        </HomeContainer>
      )
    }}
  </ChangeItem.Consumer>
)
export default SearchData
