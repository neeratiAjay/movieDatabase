import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 200px;
  margin-bottom: 15px;
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
export const Poster = styled.img`
  height: 200px;
  width: 150px;
  margin-right: 10px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 80%;
  padding: 0;
`
export const ViewDetailsBtn = styled.button`
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  font-family: 'roboto';
  font-weight: 400;
  width: 120px;
  margin-top: 20px;
  cursor: pointer;
  background-color: transparent;
`
