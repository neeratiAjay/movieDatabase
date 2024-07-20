import {withRouter} from 'react-router-dom'
import {IoMenuSharp} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'

import ChangeItem from '../../context'

import {
  NavContainer,
  MovieTitle,
  MenuBtn,
  Ul,
  ShowContent,
  Li,
  CloseBtn,
  SearchContainer,
  Input,
  FlexContainerItems,
  SearchBtn,
  SearchIconContainer,
  Heading,
} from './styledComponents'

const Header = () => (
  <ChangeItem.Consumer>
    {value => {
      const {
        showItems,
        openMenuItems,
        closeMenuItems,
        changeInput,
        searchInput,
        getSearchData,
      } = value
      const onClickSearch = () => {
        getSearchData()
      }
      const closeItems = () => {
        closeMenuItems()
      }
      const openItems = () => {
        openMenuItems()
      }
      const changeUserInput = event => {
        changeInput(event.target.value)
      }
      return (
        <>
          <NavContainer>
            <MovieTitle>movieDB</MovieTitle>
            {showItems ? (
              <CloseBtn type="button" onClick={closeItems}>
                <IoMdClose size="25" color="#ffffff" />
              </CloseBtn>
            ) : (
              <MenuBtn type="button" onClick={openItems}>
                <IoMenuSharp size="30" color="#ffffff" />
              </MenuBtn>
            )}

            <FlexContainerItems>
              <Ul>
                <Li to="/">
                  <Heading>Popular Movies</Heading>
                </Li>
                <Li to="/top-rated">
                  {' '}
                  <Heading>Top Rated Movies </Heading>
                </Li>
                <Li to="/upcoming">
                  {' '}
                  <Heading>Upcoming Movies</Heading>
                </Li>
              </Ul>
            </FlexContainerItems>
          </NavContainer>
          {showItems && (
            <ShowContent>
              <Ul>
                <Li to="/">
                  <Heading>Popular Movies</Heading>
                </Li>
                <Li to="/top-rated">
                  {' '}
                  <Heading>Top Rated Movies </Heading>
                </Li>
                <Li to="/upcoming">
                  {' '}
                  <Heading>Upcoming Movies</Heading>
                </Li>
              </Ul>
            </ShowContent>
          )}
          <SearchContainer>
            <SearchIconContainer>
              <Input
                type="search"
                onChange={changeUserInput}
                value={searchInput}
              />
              <SearchBtn type="button" onClick={onClickSearch}>
                Search
              </SearchBtn>
            </SearchIconContainer>
          </SearchContainer>
        </>
      )
    }}
  </ChangeItem.Consumer>
)
export default withRouter(Header)
