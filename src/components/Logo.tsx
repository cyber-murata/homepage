import styled from "styled-components";
const Logo = () => {
  return(
    <_Logo>
    <span>LiCreSia</span>
    </_Logo>
  );
};

const _Logo= styled.div`
    display: inline-block;
    font-family: logo;
    /* @font-faceで定義したフォント名を指定 */
    color: rgba(204, 204, 204, 0.76);
    margin: 8px 10px;
    font-weight: 600;
    width: 400px;
    /* vertical-align: middle; */
    text-align: left;
    /* background-color: rgba(255, 255, 255, 0.082); */
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 28px;
    font-style: italic;
`;

export default Logo;
