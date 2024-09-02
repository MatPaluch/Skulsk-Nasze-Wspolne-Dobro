import { useParams } from "react-router-dom";
import { Art0 } from "../components/News/Content/Article_0/article_0";
import { Art1 } from "../components/News/Content/Article_1/article_1";

export const Articles = () => {
  const { name } = useParams();

  const renderComponent = (nameArticle) => {
    switch (nameArticle) {
      case "dzialalnosc-na-rzecz-osob-niepelnosprawnych":
        return <Art0 />;
      case "nie-jestes-sama-nie-jestes-sam":
        return <Art1 />;
      default:
        return <h1 style={{ marginTop: "200px" }}>Nie ma takiego ogłoszenia</h1>;
    }
  };

  return <>{renderComponent(name)}</>;
};
