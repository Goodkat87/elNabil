import { useState, useEffect } from "react";
import data from "./assets/json/data.json";
import Navbar from "./components/Navbar";
import Imgbanner from "./assets/img/banner.jpg";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Banner from "./components/Banner";
import Bag from "./assets/img/bag.png";
import SideBar from "./components/SideBar";

function App() {
  const [side, setSide] = useState(false);
  const [basket, setBasket] = useState([]);
  const [solde, setSolde] = useState(300);

  const [added, setAdded] = useState(0);
  const [cart, setCart] = useState([]);

  let add = (element) => {
    if (element.stock > 0 && solde > element.price) {
      setBasket([...basket, element]);
      if (basket.length > 0) {
        setCart([...new Set(basket)]);
      } else {
        setCart([...cart, element]);
      }
      setAdded(added + 1);
      element.stock--;
      element.quantity++;
      setSolde(solde - element.price);
    }
  };

  let discard = (article) => {
    if (article.quantity > 0) {
      article.quantity--;
      article.stock++;
      setSolde(solde + article.price);
      setAdded(added - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <SideBar
        side={side}
        solde={solde}
        basket={basket}
        cart={cart}
        add={add}
        discard={discard}
      ></SideBar>
      <Navbar
        bag={Bag}
        side={side}
        setSide={setSide}
        basket={basket}
        added={added}
      />
      <Banner imgbanner={Imgbanner} />
      <div className="w-11/12 h-max flex flex-wrap justify-center gap-3 pb-32 pt-32">
        {data.map(function (item, key) {
          return <Card item={item} key={key} add={add} added={added}></Card>;
        })}
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
