import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  self-align: center;
  width: 80%;
  height: 100px;
  margin-left: 30px;
`
export const Btn = styled.button`
  max-height: 30px;
  background-color: transparent;
  min-width: 40px;
  border: 1px solid #bfbfbf;
  font-family: 'roboto';
  font-size: 14px;
  border-radius: 4px;
  font-weight: bold;
  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
`
export const PageNo = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  @media screen and (min-width: 572px) {
    font-size: 16px;
  }
`
