import styled from "styled-components";

type SectionCardProps = {
    image: string;
    title: string;
    detail: string;
};

const SectionCard = (props: SectionCardProps): JSX.Element => {

    return (<>
        <_SectionCard>
            <_Catch>
                {props.title}
            </_Catch>
            <_Detail>
            </_Detail>
        </_SectionCard>
    </>
    );
};

const _SectionCard = styled.li`
    display: inline-block;
    width: 400px;
    height: 300px;
    margin-top: 20px;
    background-Color: rgb(182, 216, 154);
    border: solid;
    margin-bottom: 20px;
    margin-right: 20px;
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

export default SectionCard;
