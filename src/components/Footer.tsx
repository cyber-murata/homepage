import styled from "styled-components";

const Footer = (props:any) => {
  return(
    <_Footer>
        <_Footertxt>© LiCreSia</_Footertxt>
    </_Footer>
  );
};

const _Footer= styled.footer`
    height: 100px;
    background-color: #034;
    text-align: center;
`;

const _Footertxt= styled.p`
    display: inline-block;
    margin: auto;
    font-size: 24px;
    color: seashell;
    line-height: 100px;
`;

export default Footer;
