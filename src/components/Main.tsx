import styled from "styled-components";
import Outline from './Outline';
import Manual from './Manual';
import Kiso from './Kiso';
import Inquiry from './Inquiry';
import Link from './Link';
import { PageStatus } from '../App';

export type ContentsProps = {
    status: PageStatus;
}

const Main = (props: ContentsProps): JSX.Element => {

    const getContentsJSX = (): JSX.Element => {
        switch (props.status) {
            case PageStatus.OUTLINE:
                return <Outline />;
            case PageStatus.MANUAL:
                return <Manual />;
            case PageStatus.KISO:
                return <Kiso />;
            case PageStatus.INQUIRY:
                return <Inquiry />;
            case PageStatus.LINK:
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
