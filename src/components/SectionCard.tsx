import styled from "styled-components";
import Modal from './Modal';
import { useState } from "react";

const SectionCard = (props: {cardKey: number, image: string, title: string, detail: string, isModal: (isShow: any) => void, setKey: (key: any) => void }): JSX.Element => {

    function setState(){
        props.isModal(true)
        props.setKey(props.cardKey)
    }

    return (<>
        <_SectionCard onClick={() => {setState()}}>
            <_Recordlist>
                <_Image src={props.image} alt="image"></_Image>
            </_Recordlist>
            <_Recordlist2>
                <_Catch>
                    {props.title}
                </_Catch>
                <_Detail>
                    {props.detail}
                </_Detail>
            </_Recordlist2>
        </_SectionCard>
    </>
    );
};

const _SectionCard = styled.div`
    display: inline-block;
    width: 420px;
    height: 200px;
    margin-top: 20px;
    background-Color: rgba(256,256,256,0.6);
    /* background-Color: white; */
    border: solid;
    margin-bottom: 20px;
    margin-right: 20px;
    text-align: left;
    &:hover{
        background-Color: rgba(256,256,256,0.8);
        /* background-Color: #A7F1FF; */
    }
`;

const _Recordlist = styled.div`
    display: inline-block;
    margin: 5px;
    padding: 10px;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    text-align: left;
`;

const _Recordlist2 = styled.div`
    display: inline-block;
    width: 100px;
    height: 200px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    text-align: left;
`;

const _Catch = styled.div`
    display: inline-block;
    width: 200px;
    font-size: 15px;
    /* color: #E6FFE9; */
    color: #000000;
    margin-bottom: 20px;
    /* border-bottom: 2px solid #E6FFE9; */
    border-bottom: 2px solid #000000;
    font-weight: bold;
`;

const _Detail = styled.div`
    display: inline-block;
    width: 190px;
    font-size: 12px;
    /* color: #E6FFE9; */
    color: #000000;
`;

const _Image = styled.img`
    width: 165px;
    height: 150px;
    border-radius: 5px;
    object-fit: contain;
`;

export default SectionCard;
