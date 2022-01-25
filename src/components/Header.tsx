import Logo from './Logo';
import Menu from './Menu';
import styled from "styled-components";
import { PlayStatus } from '../App';


const Header = (props: { transitionPage: (page: PlayStatus) => void }) => {

  return (
    <_Header>
      <Logo />
      <_Menulist>
        <_Menurecord onClick={() => { props.transitionPage(PlayStatus.TOP) }}>概要</_Menurecord>
        <_Menurecord onClick={() => window.open("https://cyber-kohno.github.io/vh-react/", "_blank")}>サービス</_Menurecord>
        <_Menurecord onClick={() => { props.transitionPage(PlayStatus.MANUAL) }}>マニュアル</_Menurecord>
        <_Menurecord onClick={() => { props.transitionPage(PlayStatus.KISO) }}>基礎知識</_Menurecord>
        <_Menurecord onClick={() => { props.transitionPage(PlayStatus.INQUIRY) }}>お問い合わせ</_Menurecord>
        <_Menurecord onClick={() => { props.transitionPage(PlayStatus.LINK) }}>リンク</_Menurecord>
      </_Menulist>
    </_Header>
  );
};

const _Header = styled.header`
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

export default Header;
