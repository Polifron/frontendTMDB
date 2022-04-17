import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;
  background: var(--darkGrey);
  color: var(--white);
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 0 20px;
`;

export const ListWrapper = styled.ul`
   box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 20px;
 

    & > li {
    list-style-type: none;

    &:first-of-type {
      > button {
        border-top: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }

    &:last-of-type > button {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    & > button {
      display: flex;
      justify-content: space-between;
      background-color: white;
      font-size: 16px;
      padding: 15px 20px 15px 20px;
      border: 0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      text-align: left;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;

      &:hover, &:focus {
        cursor: pointer;
        font-weight: bold;
        background-color: #ccc;
      }
    }
    }
`;

export const GenreList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`;
export const Genre = styled.li`
@media (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 11px;
    line-height: 33px;
  }
    width: 220px;
    height: 80px;
    font-size: 22px;
    margin: 10px 10px; 
    line-height: 88px;
    font-family: 'Bebas Neue', cursive;
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;

  &::after {
    @media (max-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 11px;
    line-height: 44px;
  }
    width: 220px;
    height: 80px;
    font-size: 22px;
    line-height: 88px;
    margin: 10px 10px; 
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00E6F6;
    outline: transparent;
    position: relative;
  }
  &::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    
    content: 'AVAILABLE NOW';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
    text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
    clip-path: var(--slice-0);
  }
  
  &:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }
  
  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;
export const DropDownList =styled.li`
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
`;



