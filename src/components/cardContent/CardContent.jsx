import "./cardContent.css";
import useQuery from "../../hooks/getQueryHook";
import { useSaveings } from "../contexts/savingContextx";
import { CardItem } from "../cardItem/CardItem";
import AddItem from "../../components/AddItem/AddItem.jsx";
import { SearchCat } from "../SearchCat/SearchCat";
import Plus from "../../assets/images/plus.svg";

export const CardContent = () => {
  const { detectedItem } = useSaveings();
  let query = useQuery();

  return (
    <div className="cardContent">
      <div className="title">
     {query.get("name")}
      </div>
      <SearchCat />
      <AddItem 
      icon={Plus}
      />

      {query.get("name") === "Meat" && (
        <div>
          {detectedItem.map((item) => {
            if (item.item === "cheeseburger") {
              return <CardItem item={item.item} />;
            }
          })}
        </div>
      )}

      {query.get("name") === "Fruits" && (
        <div className="item-display">
          {detectedItem.map((item) => {
            if (item.item === "banana") {
              return <CardItem item={item.item} />;
            }
          })}
        </div>
      )}

{query.get("name") === "Vegetables" && (
        <div className="item-display">
          {detectedItem.map((item) => {
            if (item.item === "cucumber, cuke") {
              return <CardItem item={item.item} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
