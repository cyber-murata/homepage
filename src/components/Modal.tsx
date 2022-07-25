import styled, { css } from "styled-components";
import manual1_1 from './img/manual_detail1_1.png';
import manual2_1 from './img/manual_detail2_1.png';
import manual2_2 from './img/manual_detail2_2.gif';
import manual2_3 from './img/manual_detail2_3.gif';
import manual2_4 from './img/manual_detail2_4.gif';
import manual2_5 from './img/manual_detail2_5.gif';
import manual3_1 from './img/manual_detail3_1.gif';
import manual3_2 from './img/manual_detail3_2.gif';
import manual3_3 from './img/manual_detail3_3.gif';
import manual4_1 from './img/manual_detail4_1.gif';
import manual4_2 from './img/manual_detail4_2.gif';
import manual4_3 from './img/manual_detail4_3.gif';
import manual5_1 from './img/manual_detail5_1.gif';
import manual5_2 from './img/manual_detail5_2.gif';
import manual6_1 from './img/manual_detail6_1.gif';
import manual6_2 from './img/manual_detail6_2.gif';
import manual7_1 from './img/manual_detail7_1.gif';
import manual7_2 from './img/manual_detail7_2.gif';
import manual8_1 from './img/manual_detail8_1.gif';
import manual9 from './img/manual_detail9.png';
import manual9_1 from './img/manual_detail9_1.gif';
import manual9_2 from './img/manual_detail9_2.png';
import manual9_3 from './img/manual_detail9_3.gif';
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
        category: `メロディ`,
        title: `01.画面の見方`,
        main: [
            [manual1_1,
                `画面構成`,
                <_Detail><_Bullets>①ノーツ</_Bullets><br />
                    &emsp;音程と音を鳴らす長さを表したもの。<br />
                    &emsp;主音、音階の構成音の場合は赤、非構成音の場合は黄色になります。<br />
                    &emsp;ノーツ入力欄の背景色が白の音は主音、薄いグレーは音階の構成音、<br />
                    &emsp;濃いグレーは非構成音を表しています。<br />
                    <_Bullets>②音程</_Bullets><br />
                    &emsp;音の高さが表示されています。<br />
                    &emsp;A～G#が音程、hihiやhiがオクターブを表しており、<br />
                    &emsp;low、mid1、mid2、hi、hihiの順に音が高くなります。<br />
                    <_Bullets>③タイムライン</_Bullets><br />
                    &emsp;音を鳴らすタイミングや長さの基準となる時間が表示されています。<br />
                    &emsp;メモリの上の１や２は小節を表しています。<br />
                    <_Bullets>④楽器一覧</_Bullets><br />
                    &emsp;どの楽器でメロディを鳴らすかを選択できます。<br />
                    <_Bullets>⑤クオンタイズ</_Bullets><br />
                    &emsp;ノーツを扱う際の基準となる幅を変更できます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `02.クオンタイズについて`,
        main: [
            [manual2_1,
                `クオンタイズとは`,
                <_Detail>ノーツを扱う際の入力する幅を変更することが出来ます。<br />
                    ここで選択したクオンタイズはノーツの移動、幅の変更の際にも影響します。</_Detail>,
                true
            ],
            [manual2_2,
                `16ボタンの場合`,
                <_Detail><_Bullets>①１６ボタン</_Bullets><br />
                    &emsp;１６分の幅でノーツの入力することが出来ます。</_Detail>,
                false
            ],
            [manual2_3,
                `8ボタンの場合`,
                <_Detail><_Bullets>②８ボタン</_Bullets><br />
                    &emsp;８分の幅でノールの入力をすることが出来ます。
                    &emsp;/３ボタンを選択することで１/３の幅を設定することができます。</_Detail>
                ,
                true
            ],
            [manual2_4,
                `4ボタンの場合`,
                <_Detail><_Bullets>③４ボタン</_Bullets><br />
                    &emsp;４分の幅でノーツの入力をすることが出来ます。
                    &emsp;/３ボタンを選択することで１/３の幅を設定することができます。</_Detail>,
                false
            ],
            [manual2_5,
                `/3ボタンの場合`,
                <_Detail><_Bullets>④/３ボタン</_Bullets><br />
                    &emsp;選択中の幅の１/３の幅でノーツを入力することが出来ます。<br />
                    &emsp;/３ボタンは８、４分を選択中の場合のみ選択することが出来ます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `03.ノーツの配置/削除`,
        main: [
            [manual3_1,
                `マウスでノーツの配置`,
                <_Detail>ノーツを配置したい箇所の始点と終点までをマウスでドラッグすることで配置できます。<br />
                    <br />
                    ノーツを入力する際に後ろにノーツが入力されている場合、<br />
                    そのノーツまでノーツの幅を広げることができます。<br />
                    <br />
                    配置する箇所(始点)、ノーツの幅の広がる長さはクオンタイズに依存します。</_Detail>,
                true
            ],
            [manual3_2,
                `キーボードでノーツの配置`,
                <_Detail>ノーツをフォーカスし、<_Bound>A</_Bound>を押すことで<br />
                    フォーカスしたノーツと同じノーツがフォーカスしたノーツの後ろに作成することができます。<br />
                    &emsp;<_Red>※選択した音の後にすでに音が入力されている場合、同じ音を作成することはできません。</_Red></_Detail>,
                false
            ],
            [manual3_3,
                `ノーツの削除`,
                <_Detail>ノーツを削除する方法については、消したいノーツを右クリックもしくは<br />
                    消したいノーツがフォーカスされている状態で<_Bound>deleteキー</_Bound>を押すことで選択した音を消すことができます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `04.ノーツの音程を変える`,
        main: [
            [manual4_1,
                `音程を変える`,
                <_Detail>ノーツがフォーカスされている状態で入力されている音程とは別の音程をクリックすることで音程を変更することができます。<br />
                    <br />
                    音程を変更したいノーツを選択した状態で<_Bound>矢印キーの上下</_Bound>で半音ずつノーツの高さを変更できます。</_Detail>,
                true
            ],
            [manual4_2,
                `音階を縛って音程を変える`,
                <_Detail>ノーツが選択された状態で<_Bound>C+矢印キー上下</_Bound>押すことで<br />
                    フォーカスの背景色が緑に変わり、音階の構成音で音程を上下させることができます。</_Detail>,
                false
            ],
            [manual4_3,
                `オクターブごとに音程を変える`,
                <_Detail>ノーツが選択された状態で<_Bound>X+矢印キー上下</_Bound>を押すことで、<br />
                    フォーカスの背景色がピンクに変わり、で1つ下または1つ下のオクターブに変更できます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `05.ノーツの幅を変える`,
        main: [
            [manual5_1,
                `マウスでノーツの幅を変える`,
                <_Detail>入力したノーツの右端をドラッグすることでノーツの背景色が赤に変わり、<br />
                    ノーツの幅を変更することができます。<br />
                    <br />
                    幅を変更したいノーツの後にノーツが存在する場合、<br />
                    入力されているノーツまでしかノーツの幅を広げることができません。<br />
                    <br />
                    ノーツの伸縮の幅はクオンタイズに依存します。<br />
                    ノーツの後に隙間がない場合、ノーツの幅を広げることはできません。</_Detail>,
                true
            ],
            [manual5_2,
                `キーボードでノーツの幅を変える`,
                <_Detail>幅を変更したいノーツを選択し、<_Bound>F+矢印キー左右</_Bound>を押すことで、<br />
                    背景色が赤に変わり、ノーツの長さを変更することができます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `06.ノーツを移動する`,
        main: [
            [manual6_1,
                `マウスでノーツを移動`,
                <_Detail>入力したノーツの左端をドラッグすることでノーツの背景色が青に変わり、<br />
                    ノーツを移動することができます。<br />
                    <br />
                    移動したいノーツの前後にノーツが入力されている場合、<br />
                    入力されているノーツの間を移動することができます。<br />
                    <br />
                    ノーツの伸縮の幅はクオンタイズに依存します。<br />
                    ノーツの後に隙間がない場合、ノーツの幅を広げることはできません。</_Detail>,
                true
            ],
            [manual6_2,
                `キーボードでノーツを移動`,
                <_Detail>移動したいノーツを選択し、<_Bound>D+矢印キー左右</_Bound>を押すことで、<br />
                    背景色が青に変わり、ノーツの長さを変更することができます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `07.ノーツの複数選択`,
        main: [
            [manual7_1,
                `マウスでノーツを複数選択`,
                <_Detail>タイムライン上でドラッグし、白のセレクトボックスで囲んだノーツの背景色が水色に変わり、<br />
                    ノーツの複数選択することができます。<br />
                    <br />
                    ノーツの移動、削除、コピーを行う際、<br />
                    ノーツを複数選択することでまとめて編集をすることが可能です。<br /></_Detail>,
                true
            ],
            [manual7_2,
                `キーボードでノーツ複数選択`,
                <_Detail><_Bound>shift+矢印キー左右</_Bound>を押すことで、<br />
                    選択したノーツの背景色が水色に変わり、ノーツを複数選択することができます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `08.フレーズをコピー`,
        main: [
            [manual8_1,
                `フレーズをコピーする`,
                <_Detail>コピーをしたいノーツを選択または複数選択した状態で、<_Bound>Ctrl+C</_Bound>でノーツをコピーすることができます。<br />
                    <br />
                    その後、<_Bound>Ctrl+V</_Bound>でコピーしたノーツが選択しているノーツの後ろにペーストされます。<br />
                    <br />
                    コピーした分の隙間がない場合、コピーしたノーツをペーストをすることはできません。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `メロディ`,
        title: `09.プレビュー再生`,
        main: [
            [manual9_1,
                `入力したメロディを再生する`,
                <_Detail>画面上部の<_Bound>「Play/Pause」ボタン</_Bound>を押下することで、入力したメロディを再生することができます。<br />
                    <br />
                    メロディを再生中にもう一度押下することでメロディを停止することができます。<br />
                    メロディの再生はフォーカスされているノーツの位置から再生されます。<br /></_Detail>,
                true
            ],
            [manual9_2,
                `ハーモニーと合わせてメロディを再生する`,
                <_Detail><_Bound>「Emsamble/Solo」ボタン</_Bound>押すことで、再生モードを変更できます。<br />
                    Emsambleの場合、Harmonyで入力した音と合わせて入力したメロディが再生されます。<br />
                    Soloの場合、メロディのみが再生されます。<br /></_Detail>,
                false
            ],
            [manual9_3,
                `ハーモニーのみ再生する`,
                <_Detail>再生したいハーモニーの箇所をカーソルでフォーカスした状態で、<br />
                    <_Bound>Zキー</_Bound>を押すことでフォーカスされたエリアのハーモニーのみが再生されます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `1.画面の説明`,
        main: [
            [manual1_1,
                `画面構成`,
                <_Detail><_Bullets>①ノートウィンドウ</_Bullets><br />
                    &emsp;様々な要素ブロックが表示されるメイン画面です。<br />
                    <_Bullets>②パラメータウィンドウ</_Bullets><br />
                    &emsp;要素ブロックの値を変更するためのウィンドウです。<br />
                    &emsp;選択しているブロックによって表示される内容が変化します。<br />
                    <_Bullets>③タイムライン</_Bullets><br />
                    &emsp;コードの長さと前後の関係を表すウィンドウです。<br />
                    <_Bullets>④ストラクトウィンドウ</_Bullets><br />
                    &emsp;設定されているコードの構成音を表示するウィンドウです。<br />
                    <_Bullets>⑤セクションウィンドウ</_Bullets><br />
                    &emsp;ノートウィンドウに設定したセクションが表示されるウィンドウです。<br />
                    &emsp;セクションウィンドウのブロック内には、セクション内に設定されている小節数が表示されます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `2.イニシャルブロックの設定`,
        main: [
            [manual1_1,
                `イニシャルブロックについて`,
                <_Detail>イニシャルブロックは、スケール、キー、テンポ、拍子を設定するブロックです。<br />
                    このブロックは必ずノートウィンドウの先頭に表示されます。</_Detail>,
                true
            ],
            [manual1_1,
                `スケールを変更する`,
                <_Detail>major（明るい音階）、minor（暗い音階）に変更できます。</_Detail>,
                false
            ],
            [manual1_1,
                `キーを変更する`,
                <_Detail>曲の全体の高さを変えられます。<br />
                    コードブロックにディグリーネームを設定している場合、算出されるコードが変わります。</_Detail>,
                true
            ],
            [manual1_1,
                `テンポを変更する`,
                <_Detail>曲の速さを変更することができます。</_Detail>,
                false
            ],
            [manual1_1,
                `拍子を変更する`,
                <_Detail>一小節の拍の数を変更することができます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `3.コードブロックについて`,
        main: [
            [manual1_1,
                `コードブロックについて`,
                <_Detail>コードブロックはディグリーネーム、拍数、バッキングを定義する要素です。<br />
                    コードブロックにディグリーネーム、バッキングを設定することで伴奏を鳴らすことができます。<br />
                    ①キー<br />
                    枠外の左上に<_Red>キー</_Red>が表示されています。<br />
                    <br />
                    枠内のローマ数字（Ⅰ～Ⅶ）で表示されているのが<_Red>ディグリーネーム、</_Red><br />
                    その横に表示されているmやsus4が<_Red>シンボル</_Red>、その下の四角が<_Red>拍</_Red>です。<br />
                    <br />
                    枠内の左下の青い線は<_Red>バッキングの有無</_Red>を表しており、<br />
                    バッキングが設定されていない場合、青色の線は表示されません。<br />
                    <br />
                    枠外に表示されているCやAmが<_Red>コード</_Red>が表示されています。</_Detail>,
                true
            ],
            [manual1_1,
                `コードブロックの追加`,
                <_Detail><_Bound>Aキーまたは、＋ボタン</_Bound>を押下することで、<br />
                    選択しているコードブロックの後ろに空白のコードブロックを追加することができます。</_Detail>,
                false
            ],
            [manual1_1,
                `コードブロックの削除`,
                <_Detail><_Bound>Deleteキーまたは、－ボタン</_Bound>を押下することで、<br />
                    選択しているコードブロックを削除することができます。<br /></_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `4.コードの設定/変更`,
        main: [
            [manual1_1,
                `ダイアトニックコードを入力する`,
                <_Detail>コードブロックを選択した状態で<br />
                    <_Bound>１～７キー</_Bound>を押下または、パラメータウィンドウのディグリーネームとシンボルを選択することコードを変更することができます。<br />
                    <br />
                    設定されたコードが正しくない場合、ディグリーネームが赤く表示されます。<br />
                    正しいコードが設定されているとディグリーネームは黒字で表示されます。</_Detail>,
                true
            ],
            [manual1_1,
                `ダイアトニックコードのみ変更する`,
                <_Detail><_Bound>Ｆキー</_Bound>を押下した状態で、<_Bound>矢印キー上下</_Bound>でシンボルを変更できます。<br /></_Detail>,
                false
            ],
            [manual1_1,
                `シンボルのみ変更する`,
                <_Detail><_Bound>Ｃキー</_Bound>を押下した状態で、<_Bound>矢印キー上下</_Bound>で三和音のシンボルを選択でき、<br />
                    <_Bound>矢印キー右</_Bound>で選択したシンボルから派生した1音足したシンボルを選択できます。<br /></_Detail>,
                true
            ],
            [manual1_1,
                `オンコードを設定する`,
                <_Detail><_Bound>Ｃキー</_Bound>を押下した状態で、<_Bound>矢印キー上下</_Bound>で三和音のシンボルを選択でき、<br />
                    <_Bound>矢印キー右</_Bound>で選択したシンボルから派生した1音足したシンボルを選択できます。<br /></_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `5.コードの拍を変更する`,
        main: [
            [manual1_1,
                `キーボードで拍を変更する`,
                <_Detail>コードブロックを選択した状態で<_Bound>Fキーを押下しながら矢印キー左右</_Bound>で拍を変更することができます。</_Detail>,
                true
            ],
            [manual1_1,
                `マウスで拍を変更する`,
                <_Detail>コードブロックを選択した状態でパラメータウィンドウのBeat Lengthの項目で拍を変更できます。<br /></_Detail>,
                false
            ],
            [manual1_1,
                `シンコペーションを設定する`,
                <_Detail>コードブロックを選択した状態でパラメータウィンドウのMinute Head（先頭）、Minute Tail（後尾）の項目で<br />
                    シンコペーションを設定することができます。<br />
                    <br />
                    シンコペーションが設定されていると先頭と後尾の拍が伸びていると青、減っていると赤く表示されます。<br /></_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `6.セクションブロックの追加`,
        main: [
            [manual1_1,
                `セクションブロックについて`,
                <_Detail>下に表示されている数字はセクション内の小節数が表示されます。<br />
                    小節が終わっていない場合、その隣に括弧に囲まれた数字が表示されます。<br />
                    括弧内の数字は余りの拍数が表示されます。<br /></_Detail>,
                true
            ],
            [manual1_1,
                `セクションブロックの追加`,
                <_Detail>ノートウィンドウ内のブロックを選択した状態で<br />
                    <_Bound>Ｓキー</_Bound>を押下することで選択したブロックの後ろにセクションブロックを追加することができます。</_Detail>,
                false
            ],
            [manual1_1,
                `セクション名の変更`,
                <_Detail>セクションブロックを選択した状態で<br />
                    パラメータウィンドウからイントロやAメロなどのセクションの名前を選択することで、<br />
                    セクション名を変更することができます。</_Detail>,
                true
            ],
            [manual1_1,
                `セクションの移動`,
                <_Detail><_Bound>矢印キーの上下</_Bound>またはセクションウィンドウ内のセクションブロックを選択することで、<br />
                    セクションを移動することができます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `7.バッキングを設定`,
        main: [
            [manual1_1,
                `バッキングの設定`,
                <_Detail>バッキングを設定することで様々な音の鳴らし方を設定することができます。<br />
                    <br />
                    コードブロックを選択した状態で<_Bound>Bキー</_Bound>を押すことで、<br />
                    バッキングウィンドウが表示され、使用する音（ボイシング）選択することでバッキングを設定できます。<br />
                    <br />
                    コードブロックにコードが設定されていない場合、<br />
                    バッキングを設定することができません。</_Detail>,
                true
            ],
            [manual1_1,
                `バッキングのステータスについて`,
                <_Detail>バッキングのボイシングが設定されている場合、<br />
                    コードブロックの左下に青の線が表示されてます。<br />
                    <br />
                    バッキングのパターンが設定されている場合、<br />
                    コードブロックの右下に緑の線が表示されます。<br />
                    <br />
                    バッキングの設定にエラーがある場合、<br />
                    コードブロックの下に赤い線が表示されます。<br /></_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `8.アルターブロック（モデュレート）について`,
        main: [
            [manual1_1,
                `アルターブロック（モデュレート）の設定`,
                <_Detail><_Bound>Ｍキー</_Bound>を押下することでアルターブロックを追加し、<br />
                    パラメータウィンドウにて、modulateを選択すること転調方法を設定することができます。</_Detail>,
                true
            ],
            [manual1_1,
                `転調方法について`,
                <_Detail>変更する方法としましては、<br />
                    <_Red>domm、parallel、relative、key</_Red>の4つ方法で転調することができます。<br />
                    <br />
                    <_Bullets>①domm</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているキーを基準に<br />
                    &emsp;五度圏を＋であれば時計回り、－であれば半時計回りに転調を行います。<br />
                    <_Bullets>②parallel</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているキーを基準に<br />
                    &emsp;五度圏の対応するmajor、minorキーに転調を行います。<br />
                    <_Bullets>③relative</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているスケールを基準に<br />
                    &emsp;設定されているキーのmajor、minorの転調を行います。<br />
                    <_Bullets>④key</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているキーを基準に<br />
                    &emsp;現在のキーを半音上げたり、半音下げたりする転調を行います。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `9.アルターブロック（テンポ）について`,
        main: [
            [manual1_1,
                `アルターブロック（テンポ）の設定`,
                <_Detail><_Bound>Ｍキー</_Bound>を押下することでアルターブロックを追加し、<br />
                    パラメータウィンドウにて、tempoを選択することテンポの変更方法を設定することができます。</_Detail>,
                true
            ],
            [manual1_1,
                `転調方法について`,
                <_Detail>テンポを変更する方法としましては、<br />
                    diff、rate、absの3つ方法で転調することができます。<br />
                    <br />
                    <_Bullets>①diff</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているテンポを基準に<br />
                    &emsp;設定した数値分テンポの上げ下げすることができます。<br />
                    <_Bullets>②rate</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているテンポを基準に<br />
                    &emsp;設定したパーセント分だけテンポの上げ下げをすることができます。<br />
                    <_Bullets>③abs</_Bullets><br />
                    &emsp;イニシャルブロックに設定されているテンポに関係なく、<br />
                    &emsp;設定した数値にテンポを転調することができます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `10.アルターブロック（ビート）について`,
        main: [
            [manual1_1,
                `アルターブロック（ビート）の設定`,
                <_Detail><_Bound>Ｍキー</_Bound>を押下することでアルターブロックを追加し、<br />
                    パラメータウィンドウにて、beatを選択することで変更後の拍子を設定することができます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `11.コードブロックを複数選択`,
        main: [
            [manual1_1,
                `複数選択のやり方`,
                <_Detail><_Bound>shift+矢印キー左右</_Bound>を押すことで複数選択することができます。<br />
                    <br />
                    コードブロック複数選択することでコピーを行う際、<br />
                    いくつかのコードブロックを複数選択することでまとめて削除、コピーすることが可能です。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `12.コピー`,
        main: [
            [manual1_1,
                `コードブロックをコピー`,
                <_Detail>コピーをしたいコードブロックを選択または複数選択した状態で、<_Bound>Ctrl+X</_Bound>でコードブロックをコピーすることができます。<br />
                    <br />
                    その後、<_Bound>Ctrl+V</_Bound>でコピーしたコードブロックが選択しているコードブロックの後ろにペーストされます。</_Detail>,
                true
            ],
            [manual1_1,
                `バッキングをコピー`,
                <_Detail>コピーをしたいコードブロックを選択または複数選択した状態で、<_Bound>Ctrl+C</_Bound>でバッキングをコピーすることができます。<br />
                    <br />
                    その後、<_Bound>Ctrl+V</_Bound>でコピーしたバッキングが選択しているコードブロックにペーストされます。</_Detail>,
                false
            ],
        ]
    },
    {
        category: `ハーモナイズ`,
        title: `13.プレビュー再生`,
        main: [
            [manual1_1,
                `入力したメロディを再生する`,
                <_Detail>画面上部の<_Bound>「Play/Pause」ボタン</_Bound>を押下することで、入力したハーモニーを再生することができます。<br />
                    <br />
                    ハーモニーを再生中にもう一度押下することでハーモニーを停止することができます。<br />
                    ハーモニーの再生はフォーカスされているノーツの位置から再生されます。</_Detail>,
                true
            ],
            [manual1_1,
                `ハーモニーと合わせてメロディを再生する`,
                <_Detail><_Bound>「Emsamble/Solo」ボタン</_Bound>押すことで、再生モードを変更できます。<br />
                    Emsambleの場合、melodyで入力した音と合わせて入力したハーモニーが再生されます。<br />
                    Soloの場合、ハーモニーのみが再生されます。</_Detail>,
                false
            ],
            [manual9,
                `選択したコードブロックのみ再生する`,
                <_Detail> 再生したいコードブロックを選択した状態で、<br />
                    <_Bound>Zキー</_Bound>を押すことで選択されたコードブロックのハーモニーのみが再生されます。</_Detail>,
                true
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `1.画面構成`,
        main: [
            [,
                `画面構成(ボイシング選択画面)`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `画面構成(パターン作成画面)`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `2.ボイシングを選択`,
        main: [
            [,
                `ボイシングを選択する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `ボイシング選択のエラーについて`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `3.チャンネルの設定`,
        main: [
            [,
                `チャンネルを追加する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `チャンネルのエラーについて`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `4.ノーツの設定`,
        main: [
            [,
                `ノーツの枠を追加する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `ノーツを設定する(マウス)`,
                <_Detail></_Detail>,
                false
            ],
            [,
                `ノーツを設定する(キーボード)`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `ノーツを設定のエラーについて`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `5.ペダルの設定`,
        main: [
            [,
                `ペダルの踏み方を設定する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `ペダルの踏み方の種類`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `6.レイヤーについて`,
        main: [
            [,
                `レイヤーの設定する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `レイヤー設定時のエラーについて`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `7.ベロシティの設定`,
        main: [
            [,
                `ベロシティを設定する`,
                <_Detail></_Detail>,
                true
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `8.詳細設定`,
        main: [
            [,
                `詳細設定モードに切り替える`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `奏法(スタッカート、タイ)を設定する`,
                <_Detail></_Detail>,
                false
            ],
            [,
                `ディレイを設定する`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `ベロシティを設定する`,
                <_Detail></_Detail>,
                false
            ],
        ]
    },
    {
        category: `バッキング`,
        title: `9.ボタンの説明`,
        main: [
            [,
                `Teatボタンについて`,
                <_Detail></_Detail>,
                true
            ],
            [,
                `Cancelボタンについて`,
                <_Detail></_Detail>,
                false
            ],
            [,
                `Updateボタンについて`,
                <_Detail></_Detail>,
                true
            ],
        ]
    },
];

const Modal = (props: { isModal: (isShow: any) => void, show: any, manualKey: any }): JSX.Element => {

    const image = 0;
    const subheading = 1;
    const explanatoryText = 2;
    const reverseFlg = 3;

    const recordJSXList: JSX.Element[] = [];
    const showModal = (): JSX.Element => {
        if (props.show) {
            manualDetail[props.manualKey].main?.forEach((manual, i) => {
                if (manual[reverseFlg]) {
                    recordJSXList.push(
                        <div>
                            <_Subheading>{manual[subheading]}</_Subheading>
                            <_Image src={String(manual[image])}></_Image>
                            {manual[explanatoryText]}
                        </div>
                    );
                } else {
                    recordJSXList.push(
                        <div>
                            <_Subheading>{manual[subheading]}</_Subheading>
                            {manual[explanatoryText]}
                            <_Image src={String(manual[image])}></_Image>
                        </div>
                    );
                }
            });
            return (
                <_Overlay overflow={props.show}>
                    <_Content>
                        <_Directory>{manualDetail[props.manualKey].category}＞{manualDetail[props.manualKey].title}</_Directory>
                        {recordJSXList}
                        <_Closebutton onClick={() => { props.isModal(false) }}></_Closebutton>
                    </_Content>
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

const _Overlay = styled.div<{ overflow: boolean }>`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // width:100%;
    // height:100%;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
        props.overflow
            ? css`
          overflow: hidden;
          overflow-y: hidden; 
           `
            : ''}
`;

const _Content = styled.div`
    overflow-y: auto;
    z-index:3;
    height:60%;
    padding: 1em;
    background-Color: rgba(220,220,220,1);
    /* background-Color: #A7F1FF; */
`;

const _Subheading = styled.span`
    display: block;
    font-weight: bold;
    font-size: 25px;
    margin-top: 20px;
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
