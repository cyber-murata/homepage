import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import img1 from './img/★作曲の構想に特化した新しいDTM.png';
import img2 from './img/★音楽理論をシステムに内臓.png';

const RecordItems = [
    {
        title: `★作曲の構想に特化した新しいDTM`,
        detail: `Licresiaは、作曲に必要な2要素である、
        「メロディ」と「ハーモニー」を、それぞれ専用のエディタで入力し、
        まるでスケッチをするかのように、少ないプロセスで楽曲を作成することができます。
        ハーモニーのエディタ画面は、曲の構成を把握する設計図としての役割を担っており、
        「作曲の構想」というプロセスにおいて高い生産性を発揮します。`,
        image: img1,
        reverseflg: false
    },
    {
        title: `★音楽理論をシステムに内臓`,
        detail: `拍・コード進行・音階など、作曲において必要な考え方が、
        システムに組み込まれており、曲構成の整合性を自動で管理します。
        作曲の知識がなくても、セオリーに沿った作曲体験を提供します。
        
        用意された一般的なコード進行のサンプル（200種類以上）をロードすることで、
        完全にゼロから作成するのではなく、
        既存のハーモニーにメロディだけをつけるところから、作曲の楽しみを味わうことが可能です。
        レベルに応じて少しずつステップアップしながら慣れていきましょう。`,
        image: img2,
        reverseflg: true
    },
];

const Record = (): JSX.Element => {

    const recordJSXList: JSX.Element[] = [];
    RecordItems.forEach((record, i) => {
        if (record.reverseflg) {
            recordJSXList.push(
                <_Record>
                    <div key={i}>
                        <_Recordlist>
                            <_Image src={record.image} alt="詳細"></_Image>
                        </_Recordlist>
                        <_Recordlist>
                            <_Catch>
                                {record.title}
                            </_Catch>
                            <_Detail>
                                {record.detail}
                            </_Detail>
                        </_Recordlist>
                    </div>
                </_Record>
            );
        } else {
            recordJSXList.push(
                <_Record>
                    <div key={i}>
                        <_Recordlist>
                            <_Catch>
                                {record.title}
                            </_Catch>
                            <_Detail>
                                {record.detail}
                            </_Detail>
                        </_Recordlist>
                        <_Recordlist>
                            <_Image src={record.image} alt="詳細"></_Image>
                        </_Recordlist>
                    </div>
                </_Record>
            );
        }
    });

    return (<>
        <_Record>
            {recordJSXList}
        </_Record>
    </>
    );
};

const _Record = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    vertical-align: top;
    margin-bottom: 20px;
`;

const _Recordlist = styled.div`
    display: inline-block;
    width: 550px;
    height: 600px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    text-align: left;
`;

const _Catch = styled.div`
    display: inline-block;
    font-size: 38px;
    color: rgba(255, 255, 255, 0.719);
    font-weight: 400;
    margin-bottom: 20px;
`;

const _Detail = styled.div`
    display: inline-block;
    font-size: 16px;
    line-height: 28px;
    color: rgb(255, 255, 255);
    white-space: pre-line;
`;

const _Image = styled.img`
    width: 550px;
    height: 600px;
    border-radius: 5px;
    object-fit: fill;
`;

export default Record;
