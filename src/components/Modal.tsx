import styled from "styled-components";
import manual1 from './img/manual_detail1.png';
import manual2 from './img/manual_detail2.png';
import manual3 from './img/manual_detail3.png';
import manual4 from './img/manual_detail4.png';
import manual5 from './img/manual_detail5.png';
import manual6 from './img/manual_detail6.png';
import manual7 from './img/manual_detail7.png';
import manual8 from './img/manual_detail8.png';
import manual9 from './img/manual_detail9.png';
import Manual from "./Manual";

const _Red = styled.span`
　　color:red;
`;

const _Bullets = styled.span`
　　font-weight: bold;
`;

const _Bound = styled.span`
　　font-family: sans-serif;
　　font-weight: bold;
`;

const _Detail = styled.div`
    display: inline-block;
    font-family: serif;
    width: 600px;
    font-size: 16px;
    line-height: 28px;
    color: rgb(0, 0, 0);
    white-space: pre-line;
    text-align: left;
    vertical-align: top;
    margin-top: 50px;
    white-space: pre-line;
`;

const manualDetail = [
    {
        title: `01.画面の見方`,
        image: manual1,
        detail: <_Detail><_Bullets>①ノーツ</_Bullets><br />
            &emsp;音程と音を鳴らす長さを表したもの。<br />
            &emsp;主音、音階の構成音の場合は赤、非構成音の場合は黄色になります。<br />
            &emsp;ノーツ入力欄の背景色が白の音は主音、薄いグレーは音階の構成音、<br />
            &emsp;濃いグレーは非構成音を表しています。<br />
            <_Bullets>②音程</_Bullets><br />
            &emsp;音の高さが表示されています。<br />
            &emsp;A～G#が音程、hihiやhiがオクターブを表しています。<br />
            <_Bullets>③タイムライン</_Bullets><br />
            &emsp;音を鳴らすタイミングや長さの基準となる時間が表示されています。<br />
            &emsp;メモリの上の１や２は小節を表しています。<br />
            <_Bullets>④楽器一覧</_Bullets><br />
            &emsp;どの楽器でメロディを鳴らすかを選択できます。<br />
            <_Bullets>⑤クオンタイズ</_Bullets><br />
            &emsp;ノーツを扱う際の基準となる幅を変更できます。</_Detail>
    },
    {
        title: `02.クオンタイズについて`,
        image: manual2,
        detail: <_Detail>ノーツを扱う際の入力する幅を変更することが出来ます。<br />
            <br />
            <_Bullets>①１６ボタン</_Bullets><br />
            &emsp;１６分の幅でノーツの入力することが出来ます。<br />
            <_Bullets>②８ボタン</_Bullets><br />
            &emsp;８分の幅でノールの入力をすることが出来ます。<br />
            <_Bullets>③４ボタン</_Bullets><br />
            &emsp;４分の幅でノーツの入力をすることが出来ます。<br />
            <_Bullets>④/３ボタン</_Bullets><br />
            &emsp;選択中の幅の１/３の幅でノーツを入力することが出来ます。<br />
            &emsp;/３ボタンは８、４分の場合、選択することが出来ます。</_Detail>
    },
    {
        title: `03.ノーツの配置/削除`,
        image: manual3,
        detail: <_Detail>ノーツを配置したい箇所の始点と終点までをマウスでドラッグすることで配置できます。<br />
            <br />
            ノーツを入力する際に後ろにノーツが入力されている場合、<br />
            そのノーツまでノーツの幅を広げることができます。<br />
            <br />
            配置する箇所(始点)、ノーツの幅の広がる長さはクオンタイズに依存します。<br />

            ノーツをフォーカスし、<_Bound>A</_Bound>を押すことで<br />
            フォーカスしたノーツと同じノーツがフォーカスしたノーツの後ろに作成することができます。<br />
            &emsp;<_Red>※選択した音の後にすでに音が入力されている場合、同じ音を作成することはできません。</_Red><br />
            <br />
            ノーツを削除する方法については、消したいノーツを右クリックもしくは<br />
            消したいノーツがフォーカスされている状態で<_Bound>deleteキー</_Bound>を押すことで選択した音を消すことができます。</_Detail>
    },
    {
        title: `04.ノーツの音程を変える`,
        image: manual4,
        detail: <_Detail>ノーツがフォーカスされている状態で入力されている音程とは別の音程をクリックすることで音程を変更することができます。<br />
            <br />
            音程を変更したいノーツを選択した状態で<_Bound>矢印キーの上下</_Bound>で半音ずつノーツの高さを変更できます。<br />
            <br />
            <_Bound>C+矢印キー上下</_Bound>で音階の構成音で音程を上下させることができます。<br />
            <_Bound>X+矢印キー上下</_Bound>で1つ下または1つ下のオクターブに変更できます。</_Detail>
    },
    {
        title: `05.ノーツの幅を変える`,
        image: manual5,
        detail: <_Detail>入力したノーツの右端をドラッグすることでノーツの幅を変更することができます。<br />
            幅を変更したいノーツの後にノーツが存在する場合、<br />
            入力されているノーツまでしかノーツの幅を広げることができません。<br />
            <br />
            ノーツの伸縮の幅はクオンタイズに依存します。<br />
            ノーツの後に隙間がない場合、ノーツの幅を広げることはできません。<br />
            <br />
            幅を変更したいノーツを選択し、<_Bound>F+矢印キー左右</_Bound>を押すことでノーツの長さを変更できます。</_Detail>
    },
    {
        title: `06.ノーツを移動する`,
        image: manual6,
        detail: <_Detail>入力したノーツの左端をドラッグすることでノーツを移動することができます。<br />
            <br />
            移動したいノーツの前後にノーツが入力されている場合、<br />
            入力されているノーツの間を移動することができます。<br />
            <br />
            移動する量はクオンタイズに依存します。<br />
            ノーツの前後に移動させる隙間がない場合、ノーツを移動することはできません。<br />
            <br />
            移動したいノーツを選択し、<_Bound>D+矢印キー左右</_Bound>を押すことでノーツの場所を変更できます。</_Detail>
    },
    {
        title: `07.ノーツの複数選択`,
        image: manual7,
        detail: <_Detail>タイムライン上でドラッグすることでノーツの複数選択を行うことができます。<br />
            <br />
            ノーツの移動などを行う際、<br />
            いくつかのノーツを複数選択することでまとめて移動、削除、コピーすることが可能です。<br />
            <br />
            <_Bound>shift+矢印キー左右</_Bound>を押すことで複数選択することができます。</_Detail>
    },
    {
        title: `08.フレーズをコピー`,
        image: manual8,
        detail: <_Detail>コピーをしたいノーツを選択または複数選択した状態で、<_Bound>Ctrl+C</_Bound>でノーツをコピーすることができます。<br />
        <br />
        その後、<_Bound>Ctrl+V</_Bound>でコピーしたノーツが選択しているノーツの後ろにペーストされます。<br />
        <br />
        コピーした分の隙間がない場合、コピーしたノーツをペーストをすることはできません。</_Detail>
    },
    {
        title: `09.プレビュー再生`,
        image: manual9,
        detail: <_Detail>画面上部の<_Bound>「Play/Pause」ボタン</_Bound>を押下することで、入力したメロディを再生することができます。<br />
        <br />
        メロディを再生中にもう一度押下することでメロディを停止することができます。<br />
        メロディの再生はフォーカスされているノーツの位置から再生されます。<br />
        <br />
        <_Bound>「Emsamble/Solo」ボタン</_Bound>押すことで、再生モードを変更できます。<br />
        Emsambleの場合、Harmonyで入力した音と合わせて入力したメロディが再生されます。<br />
        Soloの場合、メロディのみが再生されます。<br />
        <br />
        ハーモニーのみ聞きたい場合は、<br />
        再生したいハーモニーの箇所をカーソルでフォーカスした状態し、<br />
        <_Bound>Zキー</_Bound>を押すことでフォーカスされたエリアのハーモニーのみが再生されます。</_Detail>
    },
    {
        title: `MMM`,
        image: manual1,
        detail: <div>MMM</div>
    },
];

const Modal = (props: { isModal: (isShow: any) => void, show: any, manualKey: any }): JSX.Element => {

    const showModal = (): JSX.Element => {
        if (props.show) {
            return (
                <_Overlay>
                    <_Content>
                    <_Directory>メロディ＞{manualDetail[props.manualKey].title}</_Directory>
                        <_Image src={manualDetail[props.manualKey].image}></_Image>
                        {manualDetail[props.manualKey].detail}
                    </_Content>
                    <_Closebutton onClick={() => { props.isModal(false) }}></_Closebutton>
                </_Overlay>
            )
        } else {
            return (<></>);
        }
    };

    return (<>
        {showModal()}
    </>
    );
};

const _Directory = styled.div`
　　text-align: left;
　　margin-top: 10px;
　　font-size: 18px;
　　font-weight: bold;
`;

const _Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const _Content = styled.div`
    overflow-y: auto;
    overflow-y: scroll;
    z-index:3;
    height:60%;
    padding: 1em;
    /* background:#fff; */
    background-Color: #A7F1FF;
`;

const _Image = styled.img`
    width: 600px;
    height: 400px;
    border-radius: 5px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 30px;
    object-fit: contain;
    z-index:3;
`;



const _Closebutton = styled.button`
  display: block;
  position: absolute;
  top:110px;
  right:230px;
  width: 30px;
  height: 30px;
  border: 2px solid rgb(255, 255, 255); /* 枠の調整 */
  border-radius: 50%;  /* 丸みの度合い */
  background: rgba(255,255,255,0);
  &:after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px; /* 棒の幅（太さ） */
    height: 22px; /* 棒の高さ */
    background: rgb(255, 255, 255); /* バツ印の色 */
    transform: translate(-50%,-50%) rotate(-45deg);
  }
  &:before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px; /* 棒の幅（太さ） */
    height: 22px; /* 棒の高さ */
    background: rgb(255, 255, 255); /* バツ印の色 */
    transform: translate(-50%,-50%) rotate(45deg);
  }
`;



export default Modal;
