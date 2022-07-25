import styled, { css } from "styled-components";
import Modal from './Modal';
import SectionCard from './SectionCard';
import manual1 from './img/manual_detail1_1.png';
import manual2 from './img/manual_detail2_1.png';
import manual3 from './img/manual_detail3.png';
import manual4 from './img/manual_detail4.png';
import manual5 from './img/manual_detail5.png';
import manual6 from './img/manual_detail6.png';
import manual7 from './img/manual_detail7.png';
import manual8 from './img/manual_detail8.png';
import manual9 from './img/manual_detail9.png';
import { useState } from "react";

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
        title: `1.画面の説明`,
        detail: `ここではハーモナイズ画面の各項目について説明します。`,
        image: manual1,
    },
    {
        title: `2.イニシャルブロックの設定`,
        detail: `ここではスケール、キー、テンポ、拍子を変更するイニシャルブロックについて説明します。`,
        image: manual1,
    },
    {
        title: `3.コードブロックについて`,
        detail: `ここでは音を鳴らすための情報を設定するコードブロックについて説明します。`,
        image: manual1,
    },
    {
        title: `4.コードの設定/変更`,
        detail: `ここではコード設定/変更方法について説明します。`,
        image: manual1,
    },
    {
        title: `5.コードの拍を変更する`,
        detail: `ここではコードの長さを決める拍の変更方法を説明します。`,
        image: manual1,
    },
    {
        title: `6.セクションブロックの追加`,
        detail: `ここでは曲のパート分けに使用するセクションブロックについて説明します。`,
        image: manual1,
    },
    {
        title: `7.バッキングを設定`,
        detail: `ここではコードをどのように鳴らすのかを決めるバッキングについて説明します。`,
        image: manual1,
    },
    {
        title: `8.アルターブロック（モデュレート）について`,
        detail: `ここでは曲のキーを途中で変更することができるアルターブロック（モデュレート）について説明します。`,
        image: manual1,
    },
    {
        title: `9.アルターブロック（テンポ）について`,
        detail: `ここでは曲の速さを途中で変更することができるアルターブロック（テンポ）について説明します。`,
        image: manual1,
    },
    {
        title: `10.アルターブロック（ビート）について`,
        detail: `ここでは曲の拍子を途中で変更することができるアルターブロック（ビート）について説明します。`,
        image: manual1,
    },
    {
        title: `11.コードブロックを複数選択`,
        detail: `ここではコードブロックの複数選択方法について説明します。`,
        image: manual1,
    },
    {
        title: `12.コピー`,
        detail: `ここではコードブロックのコピー方法について説明します。
        コピーを使用することで気に入ったハーモニーの入力が簡単に行えます。`,
        image: manual1,
    },
    {
        title: `13.プレビュー再生`,
        detail: `ここでは入力したハーモニーを再生する方法について説明します。
        メロディ画面で入力したメロディと合わせてハーモニーを聴くことも出来ます。`,
        image: manual1,
    },
];

const backingitems = [
    {
        title: `1.画面の説明`,
        detail: `ここではバッキング画面の各項目について説明します。`,
        image: ``,
    },
    {
        title: `2.ボイシングを選択`,
        detail: `ここではバッキング使用する音(ボイシング)の設定方法ついて説明します。`,
        image: ``,
    },
    {
        title: `3.チャンネルの設定`,
        detail: `ここでは使用するボイシングの数(チャンネル)の設定方法について説明します。`,
        image: ``,
    },
    {
        title: `4.ノーツの設定`,
        detail: `ここでは音を鳴らすパターンのノーツの設定方法について説明します。`,
        image: ``,
    },
    {
        title: `5.ペダルの設定`,
        detail: `ここでは音の響きをコントロールするペダルの設定方法を説明します。`,
        image: ``,
    },
    {
        title: `6.レイヤーについて`,
        detail: `ここでは弾く音を右手と左手で分けることが出来るレイヤーについて説明します。`,
        image: ``,
    },
    {
        title: `7.ベロシティの設定`,
        detail: `ここでは音の大きさ(ベロシティ)の設定方法を説明します。`,
        image: ``,
    },
    {
        title: `8.詳細設定`,
        detail: `ここでは一つのノーツに対して詳細な設定をする方法を説明します。`,
        image: ``,
    },
    {
        title: `9.ボタンの説明`,
        detail: `ここでは各ボタンについて説明します。`,
        image: ``,
    },
];

const Manual = (): JSX.Element => {

    const [modalDisp, setModalDisp] = useState(false);
    const [manualNum, setManualNum] = useState(-99);
    const harmonaizeTop = 9;
    const backingTop = 22;

    const melodyJSXList: JSX.Element[] = [];
    melodyitems.forEach((melody, i) => {
        melodyJSXList.push(
            <SectionCard
                cardKey={i}
                image={melody.image}
                title={melody.title}
                detail={melody.detail}
                isModal={(_isShow) => {
                    setModalDisp(_isShow)
                }}
                setKey={(_key) => {
                    setManualNum(_key)
                }}
            />
        )
    });

    const harmonaizeJSXList: JSX.Element[] = [];
    harmonaizeitems.forEach((harmonaize, i) => {
        harmonaizeJSXList.push(
            <SectionCard
                cardKey={i + harmonaizeTop}
                image={harmonaize.image}
                title={harmonaize.title}
                detail={harmonaize.detail}
                isModal={(_isShow) => {
                    setModalDisp(_isShow)
                }}
                setKey={(_key) => {
                    setManualNum(_key)
                }}
            />
        )
    });

    const backingJSXList: JSX.Element[] = [];
    backingitems.forEach((backing, i) => {
        backingJSXList.push(
            <SectionCard
                cardKey={i + backingTop}
                image={backing.image}
                title={backing.title}
                detail={backing.detail}
                isModal={(_isShow) => {
                    setModalDisp(_isShow)
                }}
                setKey={(_key) => {
                    setManualNum(_key)
                }}
            />
        )
    });

    return (<>
        <_Manual primary={modalDisp}>
            <_Title>メロディ</_Title>
            <_Outline>概要を表示する欄</_Outline>
            <_Cardlist>
                {melodyJSXList}
            </_Cardlist>
            <_Title>ハーモナイズ</_Title>
            <_Outline>概要を表示する欄</_Outline>
            <_Cardlist>
                {harmonaizeJSXList}
            </_Cardlist>
            <_Title>バッキング</_Title>
            <_Outline>概要を表示する欄</_Outline>
            <_Cardlist>
                {backingJSXList}
            </_Cardlist>
            <Modal isModal={(_isShow) => {
                setModalDisp(_isShow)
            }}
                show={modalDisp}
                manualKey={manualNum}></Modal>
        </_Manual>
    </>
    );
};

const _Manual = styled.div<{ primary: boolean }>`
display: inline-block;
width: 100%;
height: 100%;
margin-top: 20px;
${(props) =>
    props.primary
      ? css`
      overflow: hidden;
      overflow-y: hidden; 
       `
      : ''}
`;

const _Title = styled.div`
    font-size: 38px;
    color: rgba(256, 256, 256, 0.719);
    font-weight: 500;
    margin-bottom: 20px;
`;

const _Outline = styled.div`
    color: rgba(256, 256, 256, 0.719);
`;

const _Cardlist = styled.div`
    display: inline-block;
    width: 1000px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`;

export default Manual;
