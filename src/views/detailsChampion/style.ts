import styled from 'styled-components'

interface DetailsProps {
  backgroundImage: string
}

export const Details = styled.div<DetailsProps>`
  & .champ-img {
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(8px);
    margin-top: 5.5rem;

    & img {
    }

    &:after {
      display: flex;
      justify-items: center;
      position: absolute;
      content: ' ';
    }
  }

  & .body-container {
    background: rgb(139, 139, 134);
    background: linear-gradient(
      90deg,
      rgba(139, 139, 134, 1) 0%,
      rgba(0, 5, 19, 1) 0%,
      rgba(4, 55, 73, 1) 100%
    );
    height: 100%;
  }
`

export const ChampImgCard = styled.div`
  & img {
    border-radius: 5px;
    margin: 1.5rem auto auto;
  }
`

export const AboutChampion = styled.div`
  display: flex;
  flex-direction: row;
`

export const AbilityContainer = styled.div`
  & .max-container {
    font-family: 'BeaufortforLOL-Bold', serif;
    display: flex;
    flex-direction: column;
  }

  & .AboutChampion {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  & .champion-title {
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    color: #fff;
    margin-top: 40px;
  }
  & .champion-name {
    font-size: 4rem;
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    /* margin: 1.2rem auto; */
    color: #f7f5b2;
    text-shadow: 1px 1px 1px black;
  }

  & .champion-blurb {
    color: white;
  }

  & .champion-function {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 2rem;
  }

  & .function-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    border: 1rem white;
  }

  & .function-separator {
    margin-right: 1rem;
  }

  & .assets {
    display: flex;
    flex-direction: column;
    color: red;
    font-family: 'BeaufortforLOL-Bold', serif;
    font-weight: bold;
    font-size: 20px;
    text-shadow: 3px 3px 3px black;

    & label {
      color: white;
    }
  }

  & .info-container {
    display: flex;
    flex-direction: column;
    margin-right: 15rem;
  }

  & .assetsContainer {
    margin: 3rem auto;
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  & .passive-assets {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    margin: 2.5rem 0;
    font-size: 1.4rem;

    & img {
      border-radius: 5px;
      box-shadow: 3px 3px 3px black;
    }
  }

  & .passive {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
  }

  & .passiveDesc {
    font-family: 'Arial';
    font-size: 1rem;
    max-width: 80rem;
    margin-top: 100px;
  }

  & .champion-passive {
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
  }

  & .skills {
    display: flex;
    flex-direction: column;
    justify-content: flex start;
    margin-right: 20rem;
    margin-left: 10rem;

    & .skill-label {
      justify-self: flex-start;
      font-size: 5rem;
      font-family: 'BeaufortforLOL-Bold', serif;
      font-style: italic;
      margin-bottom: 50px;
    }

    & .champion-spell {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
    }

    & p {
      /* font-size: 1.4rem; */
      /* margin-right: 4rem; */
    }

    & img {
      margin: auto 1.5rem;
      border-radius: 5px;
      box-shadow: 3px 3px 3px black;
    }

    & .skillDescription {
      font-family: 'Arial';
      font-size: 1rem;
      align-self: center;
      justify-self: center;
      padding: 10px;
      top: 200px;
    }
  }
`

export const Description = styled.div`
  position: absolute;
  color: white;
  border-radius: 5px;
  background-color: black;
  justify-content: center;
  display: none;
  margin-top: -80px;
  left: 200px;

  & .passiveName {
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    font-size: 1.2rem;
    position: absolute;
    display: block;
    background: black;
    padding: 5px;
    border-radius: 3px;
    right: 2rem;
    top: 10rem;

    &:hover {
      display: none;
      position: absolute;
      background: black;
    }
  }

  & .skillName {
    font-family: 'BeaufortforLOL-Bold', serif;
    font-style: italic;
    font-size: 1.2rem;
    position: absolute;
    display: block;
    background: black;
    padding: 5px;
    border-radius: 3px;
    right: 2rem;
    top: 6.2rem;

    &:hover {
      display: none;
      position: absolute;
      background: black;
    }
  }
`

export const ImageSkill = styled.img`
  &:hover + ${Description} {
    display: block;
  }
  &:hover {
    opacity: 50%;
    transition: 0.2s;
  }
`
