import styled from "styled-components";
import Record from './Record';
import Manual from './Manual';
import img1 from './img/detail1.png';
import { PlayStatus } from '../App';

export type ContentsProps = {
    status: PlayStatus;
}

const Main = (props: ContentsProps): JSX.Element => {

    const getContentsJSX = (): JSX.Element => {
        switch (props.status) {
            case PlayStatus.TOP: return <Record
                title="概要"
                detail="bbb"
                image={img1}
                reverseflg={true}
            />;
            case PlayStatus.MANUAL: return <Manual
                title="マニュアル"
                detail="bbb"
                image={img1}
                reverseflg={true}
            />;
            case PlayStatus.KISO: return <Manual
                title="基礎知識"
                detail="bbb"
                image={img1}
                reverseflg={true}
            />;
            case PlayStatus.INQUIRY: return <Manual
                title="問い合わせ"
                detail="bbb"
                image={img1}
                reverseflg={true}
            />;
            case PlayStatus.LINK: return <Manual
                title="リンク"
                detail="bbb"
                image={img1}
                reverseflg={true}
            />;
            default: return <></>;
        }
    };

    return (<>
        <div>
            {getContentsJSX()}
        </div>
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
