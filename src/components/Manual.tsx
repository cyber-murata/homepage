import styled from "styled-components";
import Modal from './Modal';
import SectionCard from './SectionCard';
import manual1 from './img/manual_detail1.png';
import manual2 from './img/manual_detail2.png';
import manual3 from './img/manual_detail3.png';
import manual4 from './img/manual_detail4.png';
import manual5 from './img/manual_detail5.png';
import manual6 from './img/manual_detail6.png';
import manual7 from './img/manual_detail7.png';
import manual8 from './img/manual_detail8.png';
import manual9 from './img/manual_detail9.png';
import copy from './img/copy.png';
import { useState } from "react";

export enum Manuacategory {
    MELODY,
    HARMONAIZE,
    OTHER
}

const melodyitems = [
    {
        title: `01.画面の見方`,
        detail: `ここではメロディ画面の各項目について説明します。`,
        image: manual1,
    },
    {
        title: `02.クオンタイズについて`,
        detail: `ここではノーツの入力長さを変更する際の幅の長さ（クオンタイズ機能）について説明します。`,
        image: manual2,
    },
    {
        title: `03.ノーツの配置/削除`,
        detail: `ここでは音を鳴らすためのノーツの配置/削除の方法について説明します。`,
        image: manual3,
    },
    {
        title: `04.ノーツの音程を変える`,
        detail: `ここではノーツの音の高さ（音程）を変更する方法について説明します。`,
        image: manual4,
    },
    {
        title: `05.ノーツの幅を変える`,
        detail: `ここではノーツの幅（音の長さ）を変更する方法について説明します。`,
        image: manual5,
    },
    {
        title: `06.ノーツを移動する`,
        detail: `ここではノーツの位置（音を鳴らすタイミング）を変更する方法について説明します。`,
        image: manual6,
    },
    {
        title: `07.ノーツの複数選択`,
        detail: `ここではノーツを複数戦選択する方法について説明します。
        複数選択をすることで複数のノーツの移動などを一括で行うことが出来ます。`,
        image: manual7,
    },
    {
        title: `08.フレーズをコピー`,
        detail: `ここではノーツをコピーする方法について説明します。
        コピーを利用することで気に入ったフレーズを簡単に入力することが出来ます。`,
        image: manual8,
    },
    {
        title: `09.プレビュー再生`,
        detail: `ここでは入力したメロディを再生する方法について説明します。
        ハーモナイズ画面で入力した伴奏と合わせてメロディを聴くことも出来ます。
        
        `,
        image: manual9,
    },
];

const harmonaizeitems = [
    {
        title: `MMM`,
        detail: `MMM`,
        image: manual6,
    },
];

const Manual = (): JSX.Element => {

    const [show, setShow] = useState(false);
    const [num, setNum] = useState(-99);

    const melodyJSXList: JSX.Element[] = [];
    melodyitems.forEach((record, i) => {
        melodyJSXList.push(
            <SectionCard
                cardKey={i}
                image={record.image}
                title={record.title}
                detail={record.detail}
                isModal={(_isShow) => {
                    setShow(_isShow)
                }}
                setKey={(_key) => {
                    setNum(_key)
                }}
            />
        )
    });

    const harmonaizeJSXList: JSX.Element[] = [];
    harmonaizeitems.forEach((record, i) => {
        harmonaizeJSXList.push(
            <SectionCard
                cardKey={i + 9}
                image={record.image}
                title={record.title}
                detail={record.detail}
                isModal={(_isShow) => {
                    setShow(_isShow)
                }}
                setKey={(_key) => {
                    setNum(_key)
                }}
            />
        )
    });

    return (<>
        <_Record>
            <_Title>メロディ</_Title>
            <_Cardlist>
                {melodyJSXList}
            </_Cardlist>
            <_Title>ハーモナイズ</_Title>
            <_Cardlist>
                {harmonaizeJSXList}
            </_Cardlist>
            <Modal isModal={(_isShow) => {
                setShow(_isShow)
            }}
                show={show}
                manualKey={num}></Modal>
        </_Record>
    </>
    );
};

const _Record = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    /* background-Color: #111111; */
`;

const _Title = styled.div`
    font-size: 38px;
    /* color: rgba(15, 7, 7, 0.719); */
    color: rgba(256, 256, 256, 0.719);
    font-weight: 500;
    margin-bottom: 20px;
`;

const _Cardlist = styled.div`
    display: inline-block;
    width: 1000px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`;

export default Manual;
