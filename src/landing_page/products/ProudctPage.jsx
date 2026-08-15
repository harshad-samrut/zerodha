import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import ZerodhaUniverse from "./ZerodhaUniverse";
import ZerodhaTech from "./ZerodhaTech";
import SignUp from "../SignUp";

import productKite from "../../assets/products-kite.png";
import productsCoin from "../../assets/products-coin.png";
import varsityProducts from "../../assets/varsity-products.png";

import productsConsole from "../../assets/products-console.png";
import kiteConnectApi from "../../assets/Kite-connect-api.png";

let leftImgData = [
  {
    ImgUrl: productKite,
    Title: "kite",
    Description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    TryDemo: "/",
    LearnMore: "/",
    ImgName: "product-kite",
  },
  {
    ImgUrl: productsCoin,
    Title: "Coin",
    Description:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    TryDemo: "/",
    LearnMore: "/",
    ImgName: "product-coin",
  },
  {
    ImgUrl: varsityProducts,
    Title: "Varsity mobile",
    Description:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    TryDemo: "/",
    LearnMore: "/",
    ImgName: "varsity-products",
  },
];

let rightImgData = [
  {
    Title: "Console",
    Description:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    LearnMore: "/",
    Img: productsConsole,
    ImgURl: "/",
    ImgName: "products-console",
  },
  {
    Title: "Kite Connect API",
    Description:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    LearnMore: "/",
    Img: kiteConnectApi,
    ImgURl: "/",
    ImgName: "products-console",
  },
];

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImg {...leftImgData[0]} />
      <RightImg {...rightImgData[0]} />
      <LeftImg {...leftImgData[1]} />
      <RightImg {...rightImgData[1]} />
      <LeftImg {...leftImgData[2]} />
      <ZerodhaTech />
      <ZerodhaUniverse />
      <SignUp />
    </>
  );
}

export default ProductPage;
