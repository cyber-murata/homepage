import { useState } from "react";
import styled from "styled-components";

const Menu = () => {

  return (<>
    <_Menulist>
      <_Menurecord onClick={() => { }}>概要</_Menurecord>
      <_Menurecord onClick={() => window.open("https://cyber-kohno.github.io/vh-react/", "_blank")}>サービス</_Menurecord>
      <_Menurecord>マニュアル</_Menurecord>
      <_Menurecord>基礎知識</_Menurecord>
      <_Menurecord>お問い合わせ</_Menurecord>
      <_Menurecord>リンク</_Menurecord>
    </_Menulist>
  </>
  );
};

const _Menulist = styled.div`
    display: inline-block;
    margin: 8px 10px;
    text-align: center;
    width: calc(100% - 460px);
    vertical-align: middle;
    /* background-color: rgba(255, 255, 255, 0.1); */
`;

const _Menurecord = styled.li`
    display: inline-block;
    margin: 8px 10px;
    display: inline-block;
    font-family: logo;
    font-size: 18px;
    color: #eee;
    /* font-weight: 600; */
    user-select: none;
    transition: color 300ms;
    &:hover {
      color: #999;
  }
`;

const _Smallmenu = styled.div`
    display: none;
    float: right;
    margin: 15px 10px 0 0;
    border: solid 2px #aaa;
    width: 50px;
    height: 50px;
    border-radius: 8px;
`;

export default Menu;
