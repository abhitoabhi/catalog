import { Link } from "react-router-dom";
import { slugify } from "../data/catalog";

export function ItemCard({ item }) {
  return (
    <Link to={`/item/${slugify(item.itemname)}`} className="item-card">
      <div className="item-card-media">
        <img src={item.image} alt={item.itemname} loading="lazy" />
      </div>
      <div className="item-card-body">
        <h3 className="item-card-title">{item.itemname}</h3>
        <span className="item-card-cat">{item.category}</span>
      </div>
    </Link>
  );
}
