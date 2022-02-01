import styled from "styled-components";
import SectionCard from './SectionCard';

const items = [
    {
        title: `AAA`,
        detail: ``,
        image: ``,
    },
    {
        title: `BBB`,
        detail: ``,
        image: ``,
    },
    {
        title: `CCC`,
        detail: ``,
        image: ``,
    },
];

const Manual = (): JSX.Element => {

    const manualJSXList: JSX.Element[] = [];
    items.forEach((record, i) => {
        manualJSXList.push(
            <SectionCard
                image={record.image}
                title={record.title}
                detail={record.detail}
            />
        )
    });

    return (<>
        <_Record>
            <_Title>マニュアル</_Title>
            <_Cardlist >
                {manualJSXList}
            </_Cardlist>
        </_Record>
    </>
    );
};

const _Record = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    background-Color: rgb(141, 209, 86);
`;

const _Title = styled.div`
    font-size: 38px;
    color: rgba(15, 7, 7, 0.719);
    font-weight: 500;
    margin-bottom: 20px;
`;

const _Cardlist = styled.ul`
    text-align: center;
    column-count: 2;
`;

export default Manual;
