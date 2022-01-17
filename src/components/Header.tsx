import Logo from './Logo';
import Menu from './Menu';
import styled from "styled-components";


const Header = (props:any) => {
  return(
  <_Header>
    <Logo/>
    <Menu/>        
  </_Header>
  );
};

const _Header= styled.header`
    display: block;
    position: fixed;
    z-index: 95;
    left: 0;
    top: 0;
    width: 100%;
    height: 90px;
    /* background-color: rgba(55, 15, 0, 0.9); */
    background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0)
    );
`;

export default Header;
