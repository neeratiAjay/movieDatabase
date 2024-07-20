import React from 'react'

const ChangeItem = React.createContext({
  showItems: '',
  openMenuItems: () => {},
  closeMenuItems: () => {},
  changeInput: () => {},
  isSearch: false,
  searchInput: '',
  getSearchData: () => {},
  searchedData: [],
  searchPage: 1,
  nextPage: () => {},
  prevPage: () => {},
})
export default ChangeItem
