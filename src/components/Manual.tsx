import styled from "styled-components";

export type ManualProps = {
    title: string;
    detail: string;
    image: string;
    reverseflg: boolean;
}

const Manual = (props: ManualProps): JSX.Element => {

  return(<>
    <_Record>
            <div>
                <_Catch>
                    {props.title}
                </_Catch>
                <_Detail>
                    {props.detail}
                </_Detail>
            </div>
            <div>
                <_Image src={props.image} alt="詳細"></_Image>
            </div>
        </_Record>
    </>
  );
};

const _Record= styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 20px;
`;

const _Catch= styled.div`
    display: inline-block;
    font-size: 38px;
    color: rgba(255, 255, 255, 0.719);
    font-weight: 500;
    margin-bottom: 20px;
`;

const _Detail= styled.div`
    display: inline-block;
    font-size: 16px;
    line-height: 28px;
    color: rgb(255, 255, 255);
`;

const _Image= styled.img`
    width: 550px;
    height: 600px;
    border-radius: 5px;
    object-fit: fill;
`;

export default Manual;
