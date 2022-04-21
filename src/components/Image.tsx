import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './img/mock1.png';
import img2 from './img/mock2.png';
import img3 from './img/mock3.png';
import img4 from './img/mock4.png';
import img5 from './img/mock5.png';
import img6 from './img/mock6.png';

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipe: false,
    fade: true,
};

const items = [
    { title: "name1", img: img1 },
    { title: "name2", img: img2 },
    // { title: "name3", img: img3 },
    { title: "name4", img: img4 },
    { title: "name5", img: img5 },
    { title: "name6", img: img6 },
]

const Image = (props: any) => {
    return (<>
        <_Face>
            <Slider {...settings}>
                {items && items.map(item => {
                    return (
                        <div>
                            <_Img src={item.img} />
                        </div>
                    )
                })}
            </Slider>
            <_Catch>
                <_Catchtxt1>クリエイティブはデバイスを超えて</_Catchtxt1>
                <_Catchtxt2>ハーモナイズに特化した新しいDTM</_Catchtxt2>
            </_Catch>
        </_Face>
    </>
    );
};

const _Face = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
`;

const _Img = styled.img`
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: 90% 20%;
`;

const _Catch = styled.div`
    position: absolute;
    width: 100%;
    top: 100px;
    left: 0;
    z-index: 90;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 20, 0), rgba(0, 0, 20, 0.332), rgba(0, 0, 20, 0));
`;

const _Catchtxt1 = styled.div`
    display: inline-block;
    width: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    filter: drop-shadow(10px 10px 4px #000000);
    margin-top: 20px;
    font-size: 40px;
`;

const _Catchtxt2 = styled.div`
    display: inline-block;
    width: 100%;
    text-align: center;
    color: rgb(255, 255, 255);
    filter: drop-shadow(10px 10px 4px #000000);
    margin-top: 20px;
    display: inline-block;
    font-size: 30px;
`;

export default Image;
