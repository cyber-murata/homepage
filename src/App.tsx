import { useState } from "react";
import styled from "styled-components";
import Header from './components/Header';
import Image from './components/Image';
import Main from './components/Main';
import Footer from './components/Footer';

export enum PlayStatus {
  TOP,
  MANUAL,
  KISO,
  INQUIRY,
  LINK
}

function App() {

  const [status, setStatus] = useState<PlayStatus>(PlayStatus.TOP);

  return (
    <>
      <Header />
      <Image />
      <_Topcont>
        <Main />
      </_Topcont>
      <Footer />
    </>
  );
}

const _Topcont = styled.div`
    display: block;
    width: 100%;
    background: linear-gradient(to right, rgb(60, 60, 60), rgb(0, 0, 0), rgb(60, 60, 60));
    text-align: center;
`;


export default App;
