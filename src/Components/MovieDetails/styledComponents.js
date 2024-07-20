import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`
export const GenreUl = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
`
export const GenreLi = styled.li`
  padding-left: 10px;
`
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;
`
export const MovieDataContainer = styled.div`
  display: flex;
  width: 100%;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 80%;
  padding: 0;
`
export const OverView = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 12px;
  color: #49494c;
  margin: 0px;
  padding: 5px;
  @media screen and (min-width: 572px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Text = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 12px;
  color: #242419;
  margin: 0px;
  padding: 2px;
  color: #16111d;
  @media screen and (min-width: 572px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Title = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 14px;
  color: #141411;
  @media screen and (min-width: 572px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const CastTitle = styled(Title)`
  margin: 20px;
`

export const Rating = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: #f22d12;
  @media screen and (min-width: 572px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Span = styled.span`
  font-family: 'be sherif';
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const Value = styled.span`
  font-family: 'be sherif';
  color: #b90ce3;
  font-weight: bold;
  font-size: 14px;
  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const Poster = styled.img`
  height: 200px;
  width: 150px;
  margin: 10px;
  margin-top: 30px;
`
export const A = styled.a`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;
  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const Profile = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  @media screen and (min-width: 572px) {
    height: 160px;
    width: 160px;
    border-radius: 12px;
  }
`
export const Para = styled.span`
  font-family: 'roboto';
  font-size: 12px;
  margin: 0px;
  padding: 4px;
  color: #16111d;
  font-weight: 500;
  @media screen and (min-width: 572px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
