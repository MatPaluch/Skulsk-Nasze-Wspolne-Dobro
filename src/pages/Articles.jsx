import { useParams } from "react-router-dom";
import { Art0 } from "../components/Articles/Article_0/article_0";
import { Art1 } from "../components/Articles/Article_1/article_1";
import { Art2 } from "../components/Articles/Article_2/article_2";
import { Art3 } from "../components/Articles/Article_3/article_3";
import { Art4 } from "../components/Articles/Article_4/article_4";
import { Art5 } from "../components/Articles/Article_5/article_5";
import { Art6 } from "../components/Articles/Article_6/article_6";
import { Art7 } from "../components/Articles/Article_7/article_7";

export const Articles = () => {
  const { name } = useParams();

  const renderComponent = (nameArticle) => {
    switch (nameArticle) {
      case "dzialalnosc-na-rzecz-osob-niepelnosprawnych":
        return <Art0 />;
      case "nie-jestes-sama-nie-jestes-sam":
        return <Art1 />;
      case "z-rehabilitacją-na-ty":
        return <Art2 />;
      case "nie-jestes-sama-nie-jestes-sam-ii":
        return <Art3 />;
      case "rozwijam-sie-w-misio":
        return <Art4 />;
      case "zainwestuj-w-zdrowie-to-sie-oplaca":
        return <Art5 />;
      case "zainwestuj-w-zdrowie-to-sie-oplaca-edycja-ii":
        return <Art6 />;
      case "krok-w-strone-zdrowia":
        return <Art7 />;
      default:
        return <h1 style={{ marginTop: "200px" }}>Nie ma takiego ogłoszenia</h1>;
    }
  };

  return <>{renderComponent(name)}</>;
};
