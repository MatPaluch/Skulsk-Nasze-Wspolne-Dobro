import { useParams } from "react-router-dom";
import { Art1 } from "../components/News/Content/Article/article_1";

export const Articles = () => {
  const { name } = useParams();

  const renderComponent = (nameArticle) => {
    switch (nameArticle) {
      case "dzialalnosc-na-rzecz-osob-niepelnosprawnych":
        return <Art1 />;

      default:
        return <h1 style={{ marginTop: "200px" }}>Nie ma takiego ogłoszenia</h1>;
    }
  };

  return <>{renderComponent(name)}</>;
};
