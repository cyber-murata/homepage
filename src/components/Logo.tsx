import styled from "styled-components";
const Logo = () => {
  return (
    <_Logo>
      <_red>L</_red>iCreSia
    </_Logo>
  );
};

const _Logo = styled.div`
    display: inline-block;
    font-family: logo;
    color: rgba(204, 204, 204, 0.76);
    margin: 8px 10px;
    font-weight: 600;
    width: 400px;
    text-align: left;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 28px;
    font-style: italic;
`;

const _red = styled.span`
    color: rgb(218, 66, 66);
`;

export default Logo;
