import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 7vh;
  background-color: #5fd7b9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 7vh;
  }
`
export const MovieTitle = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  @media screen and (min-width: 572px) {
    display: none;
  }
`
export const CloseBtn = styled.button`
self-align;flex-end;
background-color:transparent;
border:none;
`
export const Ul = styled.ul`
  list-style: none;
  text-decoration: none;
  width: 100%;
  @media screen and (min-width: 572px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 572px) {
    display: flex;
    flex-direction: column;
  }
`
export const ShowContent = styled.div`
  display: flex;
  min-height: 100px;
  width: 100vw;
  background-color: #5fd7b9;
  @media screen and (max-width: 572px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
export const Li = styled(Link)`
  text-decoration: none;
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-weight: 500;
  color: #000000;
  margin-bottom: 10px;
  font-size: 14px;

  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
`
export const FlexContainerItems = styled.div`
  display: none;

  @media screen and (min-width: 573px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 20px;
    width: 60%;
  }
`
export const SearchContainer = styled.div`
  display: flex;

  background-color: #5fd7b9;
  width: 100%;
  padding-left: 10px;
  padding-bottom: 10px;
`
export const SearchIconContainer = styled.div`
  display: flex;
  border: 1px solid #111111;
  height: 20px;
  width: 180px;
  border-right: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  @media screen and (min-width: 572px) {
    height: 25px;
    width: 300px;
  }
`
export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: transparent;
  font-family: 'roboto';
  font-weight: 400;
  color: #121223;
  font-size: 14px;
  @media screen and (min-width: 678px) {
    font-size: 20px;
  }
`
export const SearchBtn = styled.button`
  background-color: transparent;
  height: 20px;
  min-width: 40px;
  border-right: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: 1px solid #111111;
  border-top: none;
  font-weight: bold;
  border-bottom: none;
  @media screen and (min-width: 572px) {
    height: 25px;
    min-width: 40px;
  }
`
