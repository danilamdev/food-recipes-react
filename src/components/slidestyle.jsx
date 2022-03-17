import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 4rem auto;
    max-width: 90%;
  `
export const Card = styled.div`
  border-radius: 2rem;
  min-height: 20rem;
  overflow: hidden;
  position: relative;

  ::after {
    content: '';
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5) );
    position: absolute;

  }

  img {
    border-radius: 2rem;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
 
  p{
    align-items: center;
    bottom: 5%;
    color: white;
    display: flex;
    font-size: .9rem;
    font-weight: 600;
    height: 20%;
    justify-content: center;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0%);
    width: 60%;
    z-index: 10;
  }
`
