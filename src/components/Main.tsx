import styled from "styled-components";
import Outline from './Outline';
import Manual from './Manual';
import Guide from './Guide';
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
            case PageStatus.GUIDE:
                return <Guide />;
            case PageStatus.MANUAL:
                return <Manual />;
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
