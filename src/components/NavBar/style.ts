import styled from 'styled-components'

export const NavigationBar = styled.nav`
  & nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    background: rgb(139, 139, 134);
    background: linear-gradient(
      90deg,
      rgba(139, 139, 134, 1) 0%,
      rgba(0, 5, 19, 1) 0%,
      rgba(4, 55, 73, 1) 100%
    );
    width: 100%;
    position: fixed;
    z-index: 1000;
    height: 7rem;
    top: 0;
    border-bottom: 3px solid black;

    @media (max-width: 576px) {
      height: 10rem;
      align-items: center;
      justify-content: center;
    }
  }

  & .mobile-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  & img {
    width: 10rem;
    margin: 0.8rem 0.8rem;
    display: flex;
    align-self: center;
    justify-self: center;

    @media (max-width: 576px) {
      width: 12rem;
      /* margin: 1rem 3rem; */
    }
  }
  & .link-Items {
    margin: auto 8rem;
    align-content: center;
    text-decoration: none;
    font-family: 'BeaufortforLOL-Bold', serif;
    font-size: 25px;
    color: white;
    text-shadow: 2px 2px 2px black;
    height: 100%;

    &:hover {
      transition: 0.5s;
      text-decoration: underline;
      color: #f7f5b2;
    }

    @media (max-width: 576px) {
      width: 12rem;
      margin-bottom: 1rem;
    }
  }
  & select {
    font-family: 'BeaufortforLOL-Bold', serif;
    color: white;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    border: none;

    &:focus {
      background: black;
      border-radius: 4px;
      border: none;
      transition: 0.5s;
      text-decoration: underline;
      color: #f7f5b2;
    }
  }
`
