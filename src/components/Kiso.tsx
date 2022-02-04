import styled from "styled-components";

const items = [
    {
        title: ``,
        detail: ``,
        image: ``,
        reverseflg: false
    },
];

const Kiso = (): JSX.Element => {

    return (<>
        <_Record>
            <_Catch>
                基礎
            </_Catch>
            <_Detail>
            </_Detail>
        </_Record>
    </>
    );
};

const _Record = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    background-Color: rgb(236, 233, 72);
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
    width: 550px;
    height: 600px;
    border-radius: 5px;
    object-fit: fill;
`;

export default Kiso;
