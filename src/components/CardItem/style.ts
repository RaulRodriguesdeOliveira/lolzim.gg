import styled from 'styled-components'

export const StyledItems = styled.div`
  & .items-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & .item-photo {
    margin: 20px;
    border: solid white 2px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
  }
  & .item-name {
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    color: white;
    text-shadow: 3px 3px 3px black;
  }
  & p {
    font-size: 20px;
    height: 18px;
    margin-left: 1rem;
    font-family: 'BeaufortforLOL-Bold', serif;
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  & .gold-photo {
    width: 3rem;
    margin-left: 2rem;
  }

  & .gold-price {
    color: #fcf16a;
    margin-left: 0.3rem;
  }
`
