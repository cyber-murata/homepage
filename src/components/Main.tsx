import styled from "styled-components";
import Record from './Record';
import Manual from './Manual';
import Kiso from './Kiso';
import Inquiry from './Inquiry';
import Link from './Link';
import { PlayStatus } from '../App';

export type ContentsProps = {
    status: PlayStatus;
}

const Main = (props: ContentsProps): JSX.Element => {

    const getContentsJSX = (): JSX.Element => {
        switch (props.status) {
            case PlayStatus.TOP:
                return <Record />;
            case PlayStatus.MANUAL:
                return <Manual />;
            case PlayStatus.KISO:
                return <Kiso />;
            case PlayStatus.INQUIRY:
                return <Inquiry />;
            case PlayStatus.LINK:
                return <Link />;
            default:
                return <></>;
        }
    };

    return (<>
        <div>
            {getContentsJSX()}
        </div>
    </>
    );
};

export default Main;
