import { useState } from "react";
import styled from "styled-components";
import Header from './components/Header';
import Image from './components/Image';
import Main from './components/Main';
import Footer from './components/Footer';

export enum PageStatus {
  OUTLINE,
  GUIDE,
  MANUAL,
  INQUIRY,
  LINK
}

function App() {

  const [status, setStatus] = useState<PageStatus>(PageStatus.MANUAL);

  return (
    <>
      <Header transitionPage={(page: PageStatus) => {
        setStatus(page)
      }} />
      <Image />
      <_Topcont>
        <Main status={status} />
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
