import styled from "styled-components";
import Record from './Record';
import img1 from './img/detail1.png';

export type RecordProps = {
    title: string;
    detail: string;
    image: string;
    reverseflg: boolean;
}

const Main = (): JSX.Element => {

    return (<>
        <Record title="aaaa" detail="bbb" image={img1} reverseflg={true} />
    </>
    );
};

const _Record = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 20px;
`;

const _Catch = styled.div`
    display: inline-block;
    font-size: 38px;
    color: rgba(255, 255, 255, 0.719);
    font-weight: 500;
    margin-bottom: 20px;
`;

const _Detail = styled.div`
    display: inline-block;
    font-size: 16px;
    line-height: 28px;
    color: rgb(255, 255, 255);
`;

const _Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: fill;
`;


export default Main;
